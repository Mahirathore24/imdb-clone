import "./MovieCard.css";

function MovieCard({ poster, title, year, rating }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />

      <div className="movie-info">
        <h3>{title}</h3>
        <p>Release Year: {year}</p>
        <p className="rating"> {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
