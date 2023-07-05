let hSlides = document.querySelectorAll(".horizont-slider__slide");
let activeSlide = document.querySelector('_active');

let swiperHorizont = new Swiper(".horizont-slider", {
  slidesPerView: 1,
  loop: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      opacity: 0,
    },
    next: {
      opacity: 0
    },
  },
});



let swiperVertical = new Swiper(".games__v-slider", {
  direction: 'vertical',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
  activeIndex: 0,
  loop: true,
  speed: 1000,
  on: {
    slideChange: function () {
      swiperHorizont.slideToLoop(this.realIndex, 1000);
      console.log(this.realIndex);
    }
  }
});


let swiperCommand = new Swiper(".swiper-mob", {
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 2,
});

