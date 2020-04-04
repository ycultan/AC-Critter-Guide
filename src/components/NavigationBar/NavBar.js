/* 
 *  
 *  File: NavBar.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React from "react";
import "./NavBar.css";

export const NavBar = ({searchBar}) => {

  return (
    <div className="container">
      <img
        src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png"
        alt=""
      />
      {searchBar}
    </div>
  );
};
