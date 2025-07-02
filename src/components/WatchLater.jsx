import React from 'react';
import MovieCard from './MovieCard';

const WatchLater = ({ watchLater }) => {
  return (
    <div className="watch-later-page">
      <h2>Watch Later</h2>

      {watchLater.length > 0 ? (
        <div className="movie-list">
          {watchLater.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="watch-later-empty">
          <h3>Nothing is added to Watch Later</h3>
          <p>Start adding movies to your Watch Later list!</p>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
