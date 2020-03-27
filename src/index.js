import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let data = {
    brand: "Brand",
    models: "Models",
    news: "News",
    ownership: "Ownership",
    tools: "Tools"
  };
ReactDOM.render(<App data={data} />, document.getElementById("root"));

serviceWorker.unregister();
