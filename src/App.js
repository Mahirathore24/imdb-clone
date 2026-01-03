import { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { searchMovies, fetchPopularMovies } from "./api";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  // Fetch popular movies on initial load
  useEffect(() => {
    const loadPopularMovies = async () => {
      setIsLoading(true);
      setError("");

      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError(err.message || "Failed to load popular movies.");
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const fetchMoviesFromSearch = useCallback(async (searchTerm) => {
    setIsLoading(true);
    setError("");
    setNoResults(false);

    try {
      const data = await searchMovies(searchTerm);

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

  // Debounced search effect
  useEffect(() => {
    if (!query.trim()) {
      // When search is cleared, reload popular movies
      const loadPopularMovies = async () => {
        setIsLoading(true);
        setError("");
        setNoResults(false);

        try {
          const popularMovies = await fetchPopularMovies();
          setMovies(popularMovies);
        } catch (err) {
          setError(err.message || "Failed to load popular movies.");
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      };

      loadPopularMovies();
      return;
    }

    const debounceId = setTimeout(() => {
      fetchMoviesFromSearch(query);
    }, 500);

    return () => clearTimeout(debounceId);
  }, [fetchMoviesFromSearch, query]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__text">
          <p className="eyebrow">IMDb Clone</p>
          <h1>Discover Movies</h1>
          <p className="subhead">
            {query ? "Search results update with debouncing" : "Browse popular movies or search by title"}
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
