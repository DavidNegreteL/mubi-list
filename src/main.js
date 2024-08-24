function initializeSwiper() {
  const slidesLoaded = document.querySelectorAll(".swiper-slide").length > 0;
  const swiperLibraryLoaded = typeof Swiper !== "undefined";

  if (slidesLoaded && swiperLibraryLoaded) {
    new Swiper(".swiper", {
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 20,
      grabCursor: true,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      },
    });
  } else {
    setTimeout(initializeSwiper, 100);
  }
}

initializeSwiper();
