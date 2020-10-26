import React from "react";

class Header extends React.Component {

  header = () => {
    return "Some string"
  }

  render() {
    return (
    <div>
      <h1>{this.header()}</h1>
    </div>
    );
  }
}

export default Header;
