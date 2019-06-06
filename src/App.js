import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubRepos from './components/GithubRepos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GithubRepos />
    </div>
  );
}

export default App;
