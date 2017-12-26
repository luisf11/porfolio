import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import Intro from "./Intro";
import Stack from "./Stack";
import About from "./About";

class Home extends Component {
  render() {
    return (
      <div className="loading">
        <div id="wrapper">
          <div id="bg" />
          <div id="overlay" />
          <div id="main">

          
            {/* Header  */}
            <div id="card">

           
           
            {/* this bitch should recive an array with the paths */}
              <Switch>
                <Route exact path='/' component={Intro} />
                <Route path='/about' component={About} />
                <Route path='/stack' component={Stack} />
              </Switch>
           
           
            {/* move this bitch to an independent component */}
            <div className="Nav">
                <div className="tabs">
                  <NavLink to="/">
                        Home
                  </NavLink>
                  <NavLink to="/about">
                   About
                  </NavLink>
                  <NavLink to="/stack">
                    Stack
                  </NavLink>
                </div>

                <div>
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/LFernandoDleon"
                        className="icon fa-twitter"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-linkedin">
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/luisf11"
                        className="icon fa-github"
                      >
                        <span className="label">Github</span>
                      </a>
                    </li>
                    {/* <li><a href="about.html" className="icon fa-info"><span className="label">About Me</span></a></li> */}
                    <li>
                      <a href="#" className="icon fa-envelope-o">
                        <span className="label">Email</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer  */}
            <footer id="footer">
              <span className="copyright">
                &copy; HandMade by{" "}
                <a href="https://github.com/luisf11">LuisF11</a>.
              </span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
