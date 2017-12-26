import React, { Component } from 'react';
import {NavLink } from "react-router-dom";

class Tabs extends Component {
    render() {
        return (
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
        );
    }
}

export default Tabs;