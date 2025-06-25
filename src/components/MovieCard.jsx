import React from 'react';
import "../CSS/MovieCard.css";

const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert(`YOU LIKED ${movie.Title}`);
  };

  return (
    <div className="Movie-card">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavoriteClick}>
            Like
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        {movie.imdbRating && <p>IMDb: {movie.imdbRating}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
