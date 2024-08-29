window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);

function navigation() {
  if (location.hash.startsWith("#trend")) {
    trendsPage();
  } else if (location.hash.startsWith("#popular")) {
    popularPage();
  } else if (location.hash.startsWith("#upcoming")) {
    upcomingPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#genre=")) {
    genrePage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log("HOME");
  genreSection.classList.add("hidden");
  detailsSection.classList.add("hidden");
  searchBar.classList.add("hidden");
  movieSection.classList.add("hidden");
  searchSection.classList.add("hidden");
  getAllCategories();
  getMoviesPreview("trending/movie/day", "swiper-wrapper-trending");
  getMoviesPreview("movie/popular", "swiper-wrapper-popular");
  getMoviesPreview("movie/upcoming", "swiper-wrapper-upcoming");
}

function trendsPage() {
  console.log("trends");
  searchBar.classList.add("hidden");
  movieSection.classList.remove("hidden");
  genreSection.classList.add("hidden");
  genresSectionPreview.classList.add("hidden");
  detailsSection.classList.add("hidden");
  heroSection.classList.add("hidden");
  trendingSectionPreview.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}

function popularPage() {
  console.log("popular");
  searchBar.classList.add("hidden");
  movieSection.classList.remove("hidden");
  genreSection.classList.add("hidden");
  genresSectionPreview.classList.add("hidden");
  detailsSection.classList.add("hidden");
  heroSection.classList.add("hidden");
  trendingSectionPreview.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}

function upcomingPage() {
  console.log("upcoming");
  searchBar.classList.add("hidden");
  movieSection.classList.remove("hidden");
  genreSection.classList.add("hidden");
  genresSectionPreview.classList.add("hidden");
  detailsSection.classList.add("hidden");
  heroSection.classList.add("hidden");
  trendingSectionPreview.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}

function searchPage() {
  console.log("search");
  searchBar.classList.remove("hidden");
  searchSection.classList.remove("hidden");
  movieSection.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  genreSection.classList.add("hidden");
  genresSectionPreview.classList.add("hidden");
  detailsSection.classList.add("hidden");
  heroSection.classList.add("hidden");
  trendingSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}

function movieDetailsPage() {
  console.log("movieDetails");
  searchBar.classList.add("hidden");
  searchSection.classList.add("hidden");
  movieSection.classList.add("hidden");
  genreSection.classList.add("hidden");
  genresSectionPreview.classList.add("hidden");
  detailsSection.classList.remove("hidden");
  heroSection.classList.remove("hidden");
  trendingSectionPreview.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}

function genrePage() {
  console.log("genre");
  searchBar.classList.add("hidden");
  movieSection.classList.add("hidden");
  genreSection.classList.remove("hidden");
  detailsSection.classList.add("hidden");
  heroSection.classList.add("hidden");
  trendingSectionPreview.classList.add("hidden");
  popularSectionPreview.classList.add("hidden");
  upcomingSectionPreview.classList.add("hidden");
}
