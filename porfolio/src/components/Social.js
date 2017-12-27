import React, { Component } from 'react';
import socialMedia from '../config/config';

console.log(socialMedia)

class Social extends Component {
    render() {
        return (
                <div className="Social">
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
        );
    }
}

export default Social;   