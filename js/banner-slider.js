const bannerSlider = new Swiper(".banner-slider", {
  speed: 600,
  navigation: {
    nextEl: "#banner-slider-next-btn",
    prevEl: "#banner-slider-prev-btn",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      slidesPerGroup: 1,
      initialSlide: 2,
    },
    764: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      initialSlide: 3,
    },
    1280:{
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
      initialSlide: 3,
    }
  },
  autoplay: {
    delay: 3000,
  },
});
