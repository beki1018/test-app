import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = (props) => {

  return (
    <div className="NavButton">
      <NavLink to={props.link}>{props.name}</NavLink>
    </div>
  );
};

export default NavButton;
