import React from "react";
import "./Ownership.css";

class Ownership extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fr: "100"
      };
    }
    test() {
      return 17845;
    }
  
    render() {
      return <div className="container">its ownership</div>;
    }
  }
  
  export default Ownership;
  