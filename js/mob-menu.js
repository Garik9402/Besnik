const burgerNode = document.querySelector('.header__burger')
const swipeBtn = document.querySelector('.swipe-btn')
const overlayMenu = document.querySelector('.mob-menu')
const menuItem = document.querySelectorAll('.menu-item')
burgerNode.addEventListener('click', (e) => {
   if (e.target === burgerNode) {
      overlayMenu.classList.add('active')
      document.body.style.overflow = 'hidden'
   }
})


overlayMenu.addEventListener('click', (e) => {
   if (e.target === overlayMenu) {
      closeModal()
   }
})

function closeModal() {
   document.body.style.overflow = 'visible'
   overlayMenu.classList.remove('active')
}

menuItem.forEach(item => {
   item.addEventListener('click', () => {
      menuItem.forEach(elem => {
         elem.classList.remove('active')
      })
      item.classList.add('active')
      closeModal()
   })
})

swipeBtn.addEventListener('swiped-down', function (e) {
   closeModal()
});

swipeBtn.addEventListener('click', function (e) {
   closeModal()
});