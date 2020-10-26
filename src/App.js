import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
// import Note from "./Components/Note";
import NotesContainer from "./Components/NotesContainer";

class App extends Component {
  render() {
    return (
      // using Fragment<></>
      <>
        <Header header="Hello mod4!"/>
        <NotesContainer />
      </>
    )
  }
}

export default App;
