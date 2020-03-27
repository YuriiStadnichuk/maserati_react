import React from "react";
import "./Tools.css";

class Tools extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tuk: "tuk-oo"
      };
    }
    test() {
      return 45;
    }
  
    render() {
      return <div className="container">its tools</div>;
    }
  }
  
  export default Tools;
  