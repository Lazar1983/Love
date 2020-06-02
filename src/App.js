import React from 'react';
import logo from './love.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.facebook.com/lazarlazov83/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEPA I LOVE YOU
        </a>
      </header>
    </div>
  );
}

export default App;
