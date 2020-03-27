import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {
    return (
      <div className="section-33 triangle-big fl-left">
        <div className="article">
          <h2>
            An Italian story<span className="vertical-line"></span>
            <span> A global icon</span>
          </h2>
          <p>
            When the Maserati brothers opened in 1914 the Officine Alfieri
            Maserati in the heart of Bologna, Italy,they could hardly have
            imagined the impact they would have on the world
          </p>
          <p>
            <a href="/">Read more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
