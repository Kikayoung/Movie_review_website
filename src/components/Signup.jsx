import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const handleSignup = (e) => {
  e.preventDefault();
  console.log('회원가입 시도');
};

const Signup = () => {
  return (
    <div className='loginSignin-container'>
      <div className="signup-container">
      <form className="loginSignin-form" onSubmit={handleSignup}>
        <h1>회원가입</h1>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>

        <button type="submit" className="loginSignin-button">회원가입</button>
        <p className="login-link">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </p>
      </form>
    </div>
    </div>
  );
    
};

export default Signup;
