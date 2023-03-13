const overlayProfile = document.querySelector('.profile-overlay')
const profileNode = document.querySelector('.profile')
const btnExit = document.querySelector('.profile__exit-btn')
const profileCircle = document.querySelector('.header__profile')
const btnCloseProf = document.querySelector('.profile__close-btn')
window.addEventListener('click', (e) => {
   if (profileCircle.contains(e.target) || profileNode.contains(e.target)) {
      overlayProfile.classList.add('active')
      document.body.style.overflow = 'hidden'
      if (btnCloseProf.contains(e.target)) {
         overlayProfile.classList.remove('active')
         document.body.style.overflow = 'visible'

      }
   }
})

overlayProfile.addEventListener('click', (e) => {
   if (e.target === overlayProfile) {
      overlayProfile.classList.remove('active')
      document.body.style.overflow = 'visible'
   }
})

