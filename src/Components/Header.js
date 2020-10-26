import React from "react";
import Note from './Note'
import NotesContainer from './NotesContainer'

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi There!</h1>
        {Note()}
      </div>
    )
  }
}

export default Header;
