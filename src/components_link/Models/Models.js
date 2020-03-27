import React from "react";
import "./Models.css";

class Models extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        go: "goooo2"
      };
    }
    test() {
      return 561;
    }
  
    render() {
      return <div className="container">its models</div>;
    }
  }
  
  export default Models;
  