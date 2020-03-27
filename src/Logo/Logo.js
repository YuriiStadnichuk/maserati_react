import React from "react";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    return (
      <div className=" logo">
        <img src={require("../images/Vector.png")} alt="icon" />
        <img
          src={require("../images/Vector (maserati).png")}
          alt="car_maserati"
        />
      </div>
    );
  }
}

export default Logo;
