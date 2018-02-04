import React from "react";
import { socialMedia } from "../config/config";
// import styled from 'styled-components';

// const ListItem = styled.li`

// `; 

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

const CardFooter = () => {
  return(
    <TabList />
  )
}

export default CardFooter;
