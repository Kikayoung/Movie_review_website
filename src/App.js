import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './components/MovieList';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import CommentList from './components/CommentList';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CommentList" element={<CommentList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
