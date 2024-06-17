import React from 'react';
import Movie from './Movie';
import movies from '../assets/data';
import '../App.css'

const MovieList = () => {
  return (
    <div>
      <h1>영화 리뷰 웹 사이트</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
