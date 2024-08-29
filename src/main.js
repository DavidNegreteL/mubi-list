const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

let movieGenres = [];

function getRatingStars(rating) {
  const maxRating = 10;
  const maxStars = 5;

  const normalizedRating = (rating / maxRating) * maxStars;

  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;

  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml +=
      '<span class="material-symbols-rounded filled">star_rate</span>';
  }

  if (hasHalfStar) {
    starsHtml += '<span class="material-symbols-rounded">star_half</span>';
  }

  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml +=
      '<span class="material-symbols-rounded empty">star_rate</span>';
  }

  return starsHtml;
}

function getGenreById(genreId) {
  if (movieGenres.length > 0) {
    const genre = movieGenres.find((genre) => genre.id === genreId);

    if (genre) {
      return genre.name;
    }
  }

  return "";
}

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

const createMovieSlide = (movie, index) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.id = `swiper-slide-${index}`;

  const link = document.createElement("a");
  link.classList.add("carousel__slide");
  link.href = "#";

  const figure = document.createElement("figure");
  figure.classList.add("card__image-container");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}.jpg`;
  img.alt = `${movie.original_title} poster`;
  img.classList.add("card__image");

  const h3 = document.createElement("h3");
  h3.textContent = movie.original_title;

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating__container");
  ratingContainer.id = `carousel-rating-container-item-${index}`;

  const ratingScaleContainer = document.createElement("div");
  ratingScaleContainer.classList.add("rating-scale__container");
  ratingScaleContainer.innerHTML = getRatingStars(movie.vote_average);

  const ratingText = document.createElement("span");
  ratingText.classList.add("rating__item-text");
  ratingText.textContent = roundToOneDecimal(movie.vote_average);

  const releaseDateTag = document.createElement("p");
  releaseDateTag.classList.add("tags");
  releaseDateTag.textContent = movie.release_date;

  const genreTag = document.createElement("p");
  genreTag.classList.add("tags");

  const movieGenres = movie.genre_ids;
  const movieTextGenres = [];
  movieGenres.forEach((movieGenre) => {
    const genreText = getGenreById(movieGenre);
    movieTextGenres.push(genreText);
  });

  genreTag.textContent = movieTextGenres.join(", ");

  figure.appendChild(img);
  ratingContainer.appendChild(ratingScaleContainer);
  ratingContainer.appendChild(ratingText);

  link.appendChild(figure);
  link.appendChild(h3);
  link.appendChild(ratingContainer);
  link.appendChild(releaseDateTag);
  link.appendChild(genreTag);

  slide.appendChild(link);

  return slide;
};

const getMoviesPreview = async (endpoint, containerId) => {
  const carousel = document.getElementById(containerId);

  try {
    const { data } = await api(endpoint);
    const movies = data.results;

    carousel.innerHTML = "";

    movies.forEach((movie, index) => {
      const slide = createMovieSlide(movie, index);
      carousel.appendChild(slide);
    });
  } catch (error) {
    console.error(`Error fetching movies from ${endpoint}:`, error);
  }
};

const getAllCategories = async () => {
  const genresContainer = document.getElementById("genres-list-container");
  try {
    const { data } = await api("genre/movie/list");
    const genreList = data.genres;
    movieGenres = genreList;
    genresContainer.innerHTML = "";

    genreList.forEach((genre, index) => {
      const genreLink = document.createElement("a");
      genreLink.classList.add("genre__link");
      genreLink.id = `${genre.name}-link-${index}`;
      genreLink.href = "#";
      genreLink.innerHTML = genre.name;
      genresContainer.appendChild(genreLink);
    });
  } catch (error) {
    console.error("Error fetching genres:", error);
  }
};
