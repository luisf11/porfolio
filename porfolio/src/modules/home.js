import React, { Component } from "react";
import emoji from "../images/LF-emoji.png";

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
              <div className="card-content">
                <img src={emoji} className="emoji-image" />
                <h1>Luis F. Peña</h1>
                <p>
                  Full Stack Developer &nbsp;&bull;&nbsp; Creator
                  &nbsp;&bull;&nbsp; Enthusiast
                </p>
              </div>
			
			
              <div className="tabs">
                <button>About</button>
                <button>Projects</button>
                <button>Stack</button>
              </div>

              <div>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/LFernandoDleon"
                      class="icon fa-twitter"
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
