import React from 'react';
import logo from '../../asset/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>Home</nav>
      </header>
    </div>
  );
};

export default App;