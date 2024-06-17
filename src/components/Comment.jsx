import React from "react";
import "../App.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="Avatar"
      />
      <div className="comment-content">
        <span className="comment-author">{props.name}</span>
        <p className="comment-text">{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
