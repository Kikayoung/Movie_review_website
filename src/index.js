// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import MovieList from './components/MovieList';
// import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Login/> */}
    {/* <MovieList/> */}
  </React.StrictMode>
);

reportWebVitals();
