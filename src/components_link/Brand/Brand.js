import React from "react";
import "./Brand.css";

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      go: "go"
    };
  }
  test() {
    return 1045;
  }

  render() {
    return <div className="container">its brand</div>;
  }
}

export default Brand;
