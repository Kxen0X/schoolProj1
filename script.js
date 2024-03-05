const bars = document.querySelectorAll('#b'),
   containerForBars = document.querySelector('.scroll__bars'),
   info = document.querySelector('.info'),
   headerLinks = document.querySelectorAll('.header a[href^="#"]')

const rect = containerForBars.getBoundingClientRect()
if (scrollY > rect.top) {
   bars.forEach((el) => el.classList.add('active'))
   info.style.display = 'flex'
}

headerLinks.forEach((a, idx) => {
   a.addEventListener('click', function (e) {
      e.preventDefault()
      const id = this.getAttribute('href').substring(1)
      if (id !== 'bars') {
         bars.forEach((el) => el.classList.add('active'))
         info.style.display = 'flex'
      }
      const elForAnchor = document.getElementById(id)

      const elPosition = elForAnchor.getBoundingClientRect().top

      window.scrollBy({
         top: elPosition,
         behavior: 'smooth',
      })
   })
})

function isInViewport(element) {
   const rect = element.getBoundingClientRect()
   if (scrollY < rect.top) {
      bars.forEach((el) => el.classList.remove('active'))
      info.style.display = 'none'
   }
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
         (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   )
}

function scroll() {
   if (isInViewport(containerForBars)) {
      bars.forEach((el, idx) => {
         el.classList.add('active')
         info.style.display = 'flex'
      })
   } else {
   }
}

document.addEventListener('scroll', scroll)
document.addEventListener('touch', scroll)
