import React from 'react';
import '../App.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const summaryLimit = 50;
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    console.log("찜하기 버튼 클릭됨");
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="movie">
      <img src={movie.posterUrl} alt={`${movie.title} Poster`} />
      <h2>{movie.title}</h2>
      <p><strong>개봉일:</strong> {movie.releaseDate}</p>
      <p>
        {isExpanded ? movie.summary : `${movie.summary.substring(0, summaryLimit)}...`}
        {movie.summary.length > summaryLimit && (
          <>
            <br />
            <br />
            <button className="toggle-button" onClick={handleToggleExpand}>
              {isExpanded ? '간단히 보기' : '자세히 보기'}
            </button>
          </>
        )}
      </p>
      <div className="buttons">
        <button className="like-button" onClick={handleLike}>
          <img src={liked ? "/full_heart.png" : "/blank_heart.png"} alt="찜하기" />
        </button>
        <button className="review-button">
          <Link to={`/CommentList?movieId=${movie.id}`} className="review-link">
            리뷰 보기
          </Link>
        </button>
      </div>

    </div>
  );
};

export default Movie;
