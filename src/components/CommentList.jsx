import React from "react";
import Comment from "./Comment";
import { useLocation } from 'react-router-dom';
import movies from '../assets/data';
import "../App.css";

const CommentList = () => {
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('movieId');
  const selectedMovie = movies.find(movie => movie.id === parseInt(movieId));

  if (!selectedMovie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="movie-details">
      <div className="movie">
          <img src={selectedMovie.posterUrl} alt={`${selectedMovie.title} Poster`} />
          <h2>{selectedMovie.title}</h2>
          <p><strong>개봉일:</strong> {selectedMovie.releaseDate}</p>
          <p>{selectedMovie.summary}
          </p>
      </div>
      <div className="comments">
        <h3>댓글 목록</h3>
        {selectedMovie.comments.map((comment, index) => (
          <Comment key={index} name={comment.name} comment={comment.comment} />
        ))}
        <div class="comments">
            <input htmlFor="comment" class="comments-input" type="text" placeholder="리뷰 남기기..."/>
            <button class="upload-button">게시</button>
          </div>
      </div>
    </div>
  );
};

export default CommentList;
