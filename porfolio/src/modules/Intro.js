import React from 'react';
import emoji from "../images/LF-emoji.png";

const  Intro = () => {
        return (
            <div className="home">
                <div className="card-content">
                <img alt="emoji" src={emoji} className="emoji-image" />
                <h1>Luis F. Peña</h1>
                <p className="type">
                  Full Stack Developer &nbsp;&bull;&nbsp; Creator
                  &nbsp;&bull;&nbsp; Enthusiast
                </p>
              </div> 
            </div>
        );
    }


export default Intro;