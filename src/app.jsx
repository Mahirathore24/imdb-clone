import MovieCard from "./MovieCard";

function App() {
  const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
  };

  return (
    <div style={{ padding: "20px" }}>
      <MovieCard
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        poster={movie.poster}
      />
    </div>
  );
}

export default App;
