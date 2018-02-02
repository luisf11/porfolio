import React from "react";
import { socialMedia } from "../config/config";

const Tab = (props) => {
  return (
    <li>
      <a href={props.link} className={props.icon}>
        <span className="label">{props.name}</span>
      </a>
    </li>
  );
};

const TabList = () => {
  return (
    socialMedia.map((social) =>(
      <Tab key={social.key}
        link={social.link}
        icon={social.icon}
        name={social.name}
      />
    ))
  )
};

const Social = () => {
  return(
    <TabList />
  )
}

export default Social;
