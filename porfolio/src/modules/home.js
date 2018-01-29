import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import Tabs from "../components/Tabs";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return <div className="loading">
        <div id="wrapper">
          <div id="bg" />
          <div id="overlay" />
          <div id="main">
          
            {/* Header  */}
           
            <div id="card">
            <div className="cardNav">
              <Tabs />
            </div>
              <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
              </Switch>

              <div className="Social">
                <Social />
              </div>
            </div>

            {/* Footer  */}
            <footer id="footer">
              <span className="copyright">
                &copy; HandMade by <a href="https://github.com/luisf11">
                  LuisF11
                </a>.
              </span>
            </footer>
          </div>
        </div>
      </div>;
  }
}

export default Home;
