function initializeSwiper() {
  const slidesLoaded = document.querySelectorAll(".swiper-slide").length > 0;
  const swiperLibraryLoaded = typeof Swiper !== "undefined";

  if (slidesLoaded && swiperLibraryLoaded) {
    new Swiper(".swiper", {
      centeredSlides: false,
      grabCursor: true,
      loop: false,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  } else {
    setTimeout(initializeSwiper, 100);
  }
}

initializeSwiper();
