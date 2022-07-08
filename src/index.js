const burgerBtn = document.querySelector('.nav-mobile__burger')
const xBtn = document.querySelector('.nav-mobile__x')
const mobileMenu = document.querySelector('.nav-mobile__menu')

const toggleMenu = () => {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active')
        burgerBtn.style.display = 'block'
        xBtn.style.display = 'none'
    } else {
        mobileMenu.classList.add('active')
        burgerBtn.style.display = 'none'
        xBtn.style.display = 'block'
    }
}

burgerBtn.addEventListener('click', toggleMenu)
xBtn.addEventListener('click', toggleMenu)

// Swiper JS
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
const swiper2 = new Swiper(".mySwiper2", {
spaceBetween: 10,
thumbs: {
    swiper: swiper,
},
});

// section team
const swiper3 = new Swiper(".section-team-swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });