import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TwitList from './TwitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to our React Homemade Twitter</h1>
        </header>
        <TwitList author="me" twit="some twit" />
      </div>
    );
  }
}

export default App;