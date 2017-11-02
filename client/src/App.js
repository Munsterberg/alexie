import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Alexie</h1>
        </header>
        <p>Click <a href="/auth/google">here</a> to sign into google OAuth</p>
      </div>
    );
  }
}

export default App;
