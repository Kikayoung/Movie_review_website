import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const handleLogin = (e) => {
  e.preventDefault();
  console.log('로그인 시도');
};

const Login = () => {
  return (
    <div className='loginSignin-container'>
      <div className="login-container">
      <form className="loginSignin-form" onSubmit={handleLogin}>
        <h1>로그인</h1>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="loginSignin-button">로그인</button>
        <p className="loginSignin-link">
          아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;