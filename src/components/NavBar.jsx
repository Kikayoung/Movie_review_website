import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">영화 리뷰</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </nav>
  );
};

export default NavBar;
