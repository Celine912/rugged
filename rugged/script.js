// DOM-Elemente abrufen
const searchInput = document.querySelector('.search-input');
const productImage = document.querySelector('.product img');
const slideshowContainer = document.getElementById('slideshow');
var carouselInner = document.querySelector('.carousel-inner');
var images = carouselInner.querySelectorAll('img');
var currentIndex = 0;

// Event-Listener hinzufügen
searchInput.addEventListener('input', handleSearch);
productImage.addEventListener('click', handleProductClick);
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

// Funktionen für Event-Listener
function handleSearch(event) {
  const searchTerm = event.target.value;
  // Hier kannst du den Suchbegriff verarbeiten und entsprechende Aktionen ausführen
}

function handleProductClick() {
  // Hier kannst du Aktionen ausführen, wenn auf das Produktbild geklickt wird
}

function nextSlide(event) {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % images.length;
  carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function prevSlide(event) {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}
