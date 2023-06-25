/*Carousel*/ 
const carouselContainer = document.querySelector('.carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let containerWidth = carouselContainer.offsetWidth;

nextButton.addEventListener('click', () => {
  carouselInner.scrollLeft += containerWidth;
});

prevButton.addEventListener('click', () => {
  carouselInner.scrollLeft -= containerWidth;
});
