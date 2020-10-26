import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NotesContainer from './Components/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <NotesContainer />
      </div>
    )
  }
}

export default App;
