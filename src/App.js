import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Article from "./Article/Article";
import Brand from "./components_link/Brand/Brand";
import Models from "./components_link/Models/Models";
import News from "./components_link/News/News";
import Ownership from "./components_link/Ownership/Ownership";
import Tools from "./components_link/Tools/Tools";
import Other from "./components_link/Other/Other";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let data = this.props.data;
    return (
      <div className="wrapper">
        <Sidebar data={data} />
        <Main />
        <Article />
        <Router>
          <Switch>
            <Route exact path="/brand" component={Brand} />
            <Route exact path="/models" component={Models} />
            <Route exact path="/news" component={News} />
            <Route exact path="/ownership" component={Ownership} />
            <Route exact path="/tools" component={Tools} />
            <Route component={Other} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
