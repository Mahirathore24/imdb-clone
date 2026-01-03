import { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=`;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  const fetchMovies = useCallback(async (searchTerm) => {
    if (!API_KEY) {
      setError("Missing OMDb API key. Set REACT_APP_OMDB_API_KEY in your env.");
      setMovies([]);
      setNoResults(false);
      return;
    }

    setIsLoading(true);
    setError("");
    setNoResults(false);

    try {
      const response = await fetch(`${API_URL}${encodeURIComponent(searchTerm)}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.Response === "True" && Array.isArray(data.Search)) {
        setMovies(data.Search);
        setNoResults(data.Search.length === 0);
      } else {
        setMovies([]);
        setNoResults(true);
        setError(data.Error || "No results found.");
      }
    } catch (err) {
      setMovies([]);
      setNoResults(false);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setNoResults(false);
      setError("");
      return;
    }

    const debounceId = setTimeout(() => {
      fetchMovies(query);
    }, 500);

    return () => clearTimeout(debounceId);
  }, [fetchMovies, query]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__text">
          <p className="eyebrow">Search Movies</p>
          <h1>Find your next movie night pick</h1>
          <p className="subhead">
            Start typing to search the OMDb catalog. Results update with a gentle
            debounce to avoid unnecessary requests.
          </p>
        </div>
        <div className="search-box">
          <input
            type="search"
            value={query}
            placeholder="Search by movie title..."
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search movies by title"
          />
        </div>
      </header>

      <main className="content">
        {error && <div className="status status--error">{error}</div>}
        {noResults && !isLoading && !error && (
          <div className="status status--empty">No Results Found</div>
        )}

        {isLoading ? (
          <div className="status status--loading">Loading movies...</div>
        ) : (
          <div className="grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                poster={
                  movie.Poster && movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                title={movie.Title}
                year={movie.Year}
                rating={movie.imdbRating || "N/A"}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
