// Search functionality
    function searchFunction() {
      const query = document.getElementById("searchBar").value.trim();
      if (query) alert(`You searched for: ${query}`);
      else alert("Please enter a search term!");
    }


// Carousel Images
const carouselImages = [
  'bg1.jpeg',
  'bg2.jpeg',
  'bg3.jpeg',
];

// Movies Array with Titles and Poster Images
const movies = [
  { title: 'Inception', poster: 'img1.jpg' },
  { title: 'Avatar', poster: 'img2.jpg' },
  { title: 'Interstellar', poster: 'img3.jpg' },
  { title: 'The Dark Knight', poster: 'img4.jpg' },
  { title: 'Joker', poster: 'img5.jpg' },
  { title: 'Spider-Man', poster: 'img7.jpg' },
  { title: 'The Avengers', poster: 'img1.jpg' },
  { title: 'Frozen', poster: 'img3.jpg' },
   
{ title: 'Inception', poster: 'img1.jpg' },
  { title: 'Avatar', poster: 'img2.jpg' },
  { title: 'Interstellar', poster: 'img3.jpg' },
  { title: 'The Dark Knight', poster: 'img4.jpg' },
  { title: 'Joker', poster: 'img5.jpg' },
];
// Carousel Functionality
let currentSlide = 0;

function renderCarousel() {
  const carouselContainer = document.querySelector('.carousel-slides');
  carouselContainer.innerHTML = ''; // Clear previous slides

  carouselImages.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'img';
    carouselContainer.appendChild(imgElement);
  });
  showSlide(currentSlide); // Show the first slide
}

function showSlide(index) {
  currentSlide = (index + carouselImages.length) % carouselImages.length;
  document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Movie List with Pagination
let currentPage = 1;
const itemsPerPage = 4;

function renderMovies(page) {
  const movieList = document.getElementById('movieList');
  movieList.innerHTML = ''; // Clear previous movies
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  movies.slice(start, end).forEach((movie) => {
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h4>${movie.title}</h4>
    `;
    movieList.appendChild(movieItem);
  });

  document.getElementById('pageNumber').textContent = page;
}

function changePage(direction) {
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  currentPage = Math.max(1, Math.min(currentPage + direction, totalPages));
  renderMovies(currentPage);
}

// Initialize Page
function init() {
  renderCarousel();
  renderMovies(currentPage);
}

init();