import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        go: "goooo"
      };
    }
    test() {
      return 1045;
    }
  
    render() {
      return <div className="container">its header</div>;
    }
  }
  
  export default Header;
  