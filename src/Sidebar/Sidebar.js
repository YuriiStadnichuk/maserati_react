import React from "react";
import "./Sidebar.css";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="section-33 fl-left">
        <div className="sidebar">
          <Logo />
          <Nav data={this.props.data} />
        </div>
        <div className="triangle-medium"></div>
        <div className="diagonal-line dl-bottom"></div>
      </div>
    );
  }
}

export default Sidebar;
