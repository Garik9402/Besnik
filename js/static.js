const $body = document.body;
const profileNode = document.querySelector('.profile')
const btnExit = document.querySelector('.profile__exit-btn')
const profileCircle = document.querySelector('.header__profile')
const btnCloseProf = document.querySelector('.profile__close-btn')

window.addEventListener('click', (e) => {
   if (profileCircle.contains(e.target) || profileNode.contains(e.target)) {
      profileNode.classList.add('active')
      $body.style.overflow = 'hidden'
      if (btnCloseProf.contains(e.target)) {
         profileNode.classList.remove('active')
         $body.style.overflow = 'visible'
      }
   }

   else {
      profileNode.classList.remove('active')
      $body.style.overflow = 'visible'
   }
})