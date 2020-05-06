/* 
 *  
 *  File: NavBar.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { MAX_WIDTH } from "../../const";

export const NavBar = ({searchCritter, critterTab}) => {
  const style = {
    img: {
      height: '10vh'
    },
    container: {
      display: 'flex',
      maxWidth: MAX_WIDTH,
      margin: 'auto'
    }
  };

  return (
    <div className="container" style={style.container}>
      <img
        src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png"
        alt=""
        style={style.img}
      />
      <SearchBar searchCritter={searchCritter} critterTab={critterTab} />
    </div>
  );
};
