import React from "react";
import "./Other.css";

class Other extends React.Component {
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
    return <div className="container">its brand</div>;
  }
}

export default Other;
