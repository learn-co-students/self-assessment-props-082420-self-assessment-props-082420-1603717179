import React from "react";
import NotesContainer from './NotesContainer'
class Header extends React.Component {
  render() {
    return(<div>
            <h1>{this.props.header}</h1>
            <NotesContainer />
            </div>
          )
  }
}

export default Header;
