import React from "react";
import "./Nav.css";

class Nav extends React.Component {

  render() {
    let direction = this.props.data;
    return (
      <div className="nav">
        <ul>
          {Object.keys(direction).map((keyName, i) => (
            <li key={keyName}>
              <a href={`/${keyName}`}>{direction[keyName]}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
