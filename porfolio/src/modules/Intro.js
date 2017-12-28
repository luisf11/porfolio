import React, { Component } from 'react';
import emoji from "../images/LF-emoji.png";
// import Typed from 'typed.js';

// var options = {
//     strings: ["Full Stack Developer", "Creator", "Enthusiast"],
//     typeSpeed: 40
//   }
//   var typed = new Typed(".type", options);

class Intro extends Component {
    render() {
        return (
            <div className="home">
                <div className="card-content">
                <img src={emoji} className="emoji-image" />
                <h1>Luis F. Peña</h1>
               
               
                <p className="type">
                  Full Stack Developer &nbsp;&bull;&nbsp; Creator
                  &nbsp;&bull;&nbsp; Enthusiast

                </p>
              </div> 
            </div>
        );
    }
}

export default Intro;