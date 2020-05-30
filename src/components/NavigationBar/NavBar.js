/*
 *
 *  File: NavBar.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { SearchBar } from "../SearchBar/SearchBar";
import { MAX_WIDTH } from "../../const";

const useStyles = makeStyles((theme) => ({
  img: {
    paddingRight: "16px",

    [theme.breakpoints.down("sm")]: {
      height: "48px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "64px",
    },
  },
  container: {
    display: "flex",
    maxWidth: MAX_WIDTH,
    margin: "auto",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png"
        alt="animal crossing new horizons logo"
        className={classes.img}
      />
      <SearchBar />
    </div>
  );
};
