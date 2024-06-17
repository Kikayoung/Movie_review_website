import React from 'react';
import Movie from './Movie';
import movies from '../assets/data';
import '../App.css'

const MovieList = () => {
  return (
    <div>
      <h1>Movie Review Site</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
