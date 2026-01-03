const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

/**
 * Fetch movies by search query
 * @param {string} query - Search term for movies
 * @returns {Promise<Object>} - API response with movie results
 */
export const searchMovies = async (query) => {
  if (!API_KEY) {
    throw new Error("Missing OMDb API key. Set REACT_APP_OMDB_API_KEY in your .env file.");
  }

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&type=movie&s=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

/**
 * Fetch popular movies (simulated by searching common titles)
 * Since OMDb doesn't have a "popular" endpoint, we search for common movies
 * @returns {Promise<Array>} - Array of popular movies
 */
export const fetchPopularMovies = async () => {
  if (!API_KEY) {
    throw new Error("Missing OMDb API key. Set REACT_APP_OMDB_API_KEY in your .env file.");
  }

  // Search for popular/common movie titles to simulate a "popular" feed
  const popularSearches = ["Batman", "Avengers", "Star Wars", "Spider", "Matrix"];
  const randomSearch = popularSearches[Math.floor(Math.random() * popularSearches.length)];

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&type=movie&s=${randomSearch}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  if (data.Response === "True" && Array.isArray(data.Search)) {
    return data.Search;
  }

  return [];
};

/**
 * Fetch detailed movie information by IMDb ID
 * @param {string} imdbID - IMDb ID of the movie
 * @returns {Promise<Object>} - Detailed movie data
 */
export const fetchMovieDetails = async (imdbID) => {
  if (!API_KEY) {
    throw new Error("Missing OMDb API key. Set REACT_APP_OMDB_API_KEY in your .env file.");
  }

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  if (data.Response === "True") {
    return data;
  }

  throw new Error(data.Error || "Movie not found");
};
