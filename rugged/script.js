

/*Carousel*/ 



const productContainers = [...document.querySelectorAll('.product-container')];
const prevButton = [...document.querySelectorAll('.carousel-prev')];
const nextButton = [...document.querySelectorAll('.carousel-next')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextButton[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
  });

  prevButton[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
  });

});
