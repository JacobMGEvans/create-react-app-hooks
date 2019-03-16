import React, { useState } from 'react';
import logo from '../../asset/logo.svg';
import { Router, Link } from '@reach/router';

import Home from '../../components/home';
import Blog from '../../components/blog';

import './App.css';

const App = () => {
  const [colorLogo, changeColor] = useState('#61DAFB');

  const handleClick = () => {
    changeColor(colorLogo ? 'red' : '#61DAFB');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ color: colorLogo }}
        />
        <nav>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          |
          <Link to="Blog" onClick={handleClick}>
            Blog
          </Link>
        </nav>
      </header>

      <Router>
        <Home path="/" />
        <Blog path="blog" />
      </Router>
    </div>
  );
};

export default App;
