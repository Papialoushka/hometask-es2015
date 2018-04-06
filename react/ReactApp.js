import React, {Component} from 'react';
import TwitChange from 'TwitChange';

class ReactApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our React Homemade Twitter</h1>
        </header>
        <TwitChange author="me" twit="some twit" />
      </div>
    );
  }
}

export default ReactApp;