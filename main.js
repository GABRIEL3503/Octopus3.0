var typed = new Typed('#element', {
  strings: ['Atractivos.', 'Personsalizados.' ,'Veloces.'],
  typeSpeed: 111,
  loop:true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});