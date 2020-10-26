import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header.js'
import NotesContainer from './Components/NotesContainer.js'

class App extends Component {
  render() {
    return <div>
        <Header header="Hello" />
        <NotesContainer />
      </div>
  }
}

export default App;
