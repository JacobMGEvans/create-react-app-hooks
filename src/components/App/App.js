import React, { useState } from 'react';
import logo from '../../asset/logo.svg';
import { Router, Link } from '@reach/router';

import Home from '../../components/home';
import Blog from '../../components/blog';

import './App.css';

const App = () => {
  const [colorLogo, changeColor] = useState('#61DAFB');

  // const handleClick = () => {
  //   changeColor(colorLogo ? 'red' : '#61DAFB');
  // };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ border: `1px solid ${colorLogo}` }}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav
          style={{
            height: '5vh',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
          }}>
          <Link
            to="/"
            onClick={() => changeColor(colorLogo ? 'red' : '#61DAFB')}>
            Home
          </Link>
          |
          <Link
            to="Blog"
            onClick={() => changeColor(colorLogo ? 'red' : '#61DAFB')}>
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
