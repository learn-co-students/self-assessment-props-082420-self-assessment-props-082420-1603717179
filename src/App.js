import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
    return (
     <div>
        <Header header="My Notes?" />
        <NotesContainer />
     </div>
    )
  }
}

export default App;
