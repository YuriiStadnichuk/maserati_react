import React from "react";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="section-33 fl-left">
        <div className="dl-top diagonal-line"></div>
        <div className="car-description ">
          <div className="triangle-small"></div>
          <div className="section-50 fl-left">
            <div className="name-sedan">
              <h2><a href="/">Ghibli</a></h2>
            </div>
          </div>
          <div className="section-50 fl-left">
            <img
              className="photo-car"
              src={require("../images/image 3.png")}
              alt="auto"
            />
          </div>
          <h4>
            A masterful combination of style, power, sporty handling and
            comfort.
          </h4>
          <h6>
            Constructed with the utmost attention to detail, every Maserati is a
            true masterpiece of Italian design
          </h6>
          <p>
            <a href="/">Read more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
