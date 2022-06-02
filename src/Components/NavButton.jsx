import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = (props) => {

  return (
    <div className={props.className}>
      <NavLink to={props.link}>{props.name}</NavLink>
    </div>
  );
};

export default NavButton;
