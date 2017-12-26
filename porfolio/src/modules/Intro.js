import React, { Component } from 'react';
import emoji from "../images/LF-emoji.png";
class Intro extends Component {
    render() {
        return (
            <div>
                <div className="card-content">
                <img src={emoji} className="emoji-image" />
                <h1>Luis F. Peña</h1>
                <p>
                  Full Stack Developer &nbsp;&bull;&nbsp; Creator
                  &nbsp;&bull;&nbsp; Enthusiast
                </p>
              </div> 
            </div>
        );
    }
}

export default Intro;