import React from 'react';
import logo from '../../asset/logo.svg';
import { Router, Link } from '@reach/router';

import Home from '../../components/home';
import Blog from '../../components/blog';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="/">Home</Link> | <Link to="Blog">Blog</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Blog path="blog" />
      </Router>
    </div>
  );
};

export default App;
