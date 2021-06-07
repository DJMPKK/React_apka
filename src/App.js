import logo from './logo.svg';
import './App.css';
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
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        <header className="App-kalkulator">
        <p>zamiana centymetrów na cale:</p>
        <form>
          <label>
            <input type="text" name="centy" />
          </label>
          <input type="submit" value="Zamień" ></input>
        </form>
        <p>zamiana cali na centymetry:</p>
        <form>
          <label>
            <input type="text" name="cal" />
          </label>
          <input type="submit" value="Zamień" ></input>
        </form>
        </header>
      
    </div>
  );
}



export default App;
