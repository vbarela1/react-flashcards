import React, { Component } from 'react';
import './App.css';
import Flashcards from './components/Flashcards';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2> React Flash Cards</h2>
          <Flashcards/>
      </div>
    );
  }
}

export default App;
