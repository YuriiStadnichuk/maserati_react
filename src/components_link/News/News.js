import React from "react";
import "./News.css";

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        go: "goooo2"
      };
    }
    test() {
      return "rka";
    }
  
    render() {
      return <div className="container">its news</div>;
    }
  }
  
  export default News;
  