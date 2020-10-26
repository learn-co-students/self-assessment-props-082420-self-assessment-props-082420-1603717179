import React from "react";

class Header extends React.Component {

  header = () => {
    return this.props.header
  }
  render(){
    // console.log(this.props)
    return (
      <div>
        <h1>{this.header()}</h1>
      </div>
    )
  }
}

export default Header;
