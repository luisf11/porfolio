import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import navOptions from "../config/config"



class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
            {navOptions.map(option =>(
                
                <NavLink key={option.key} to={option.route}>
                      {option.name}
                </NavLink>   
            
            ))}
              </div>
        );
    }
}

export default Tabs;