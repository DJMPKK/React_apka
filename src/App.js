import logo from './logo.svg';
import './App.css';
import Cal from './cal.js'
import React from 'react';

function App() {
  return (
    <div className="App">
      <head>
      <script src="https://unpkg.com/react/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone/babel.js"></script>
      </head>
      <header className="App-header">
        <p>Dominik Kaczorkiewicz</p>
        <p>105733</p>
        <p>grupa 2</p>
        </header>
        <header className="App-kalkulator">
              <div id="calculator">
        {/* Screen and clear key */}
        <div class="top">
          <span class="clear">C</span>
          <div class="screen"></div>
        </div>
        <div class="keys">
        {/* operators and other keys */}
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span class="operator">+</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span class="operator">-</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span class="operator">÷</span>
          <span>0</span>
          <span>.</span>
          <span class="eval">=</span>
          <span class="operator">x</span>
        </div>
      </div>
        </header>

    </div>
  );
}



export default App;
