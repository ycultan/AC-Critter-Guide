/* 
 *  
 *  File: SearchBar.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useEffect, useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { getQueryParam } from "../../data/utils";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: 290,
    height: 40,
    margin: "auto 10px auto auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export const SearchBar = ({ searchCritter, critterTab }) => {
  const classes = useStyles();
  const initRender = useRef(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (initRender.current) {
      const params = getQueryParam();
      const q = params.search || params.q || '';
      setSearch(q);
      searchCritter(q)

      initRender.current = false;
    } else {
      setSearch('');
    }
  }, [critterTab])

  const onSearchInputChange = e => {
    setSearch(e.target.value);
    searchCritter(e.target.value);
  };

  return (
    <Paper component="div" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        value={search}
        onChange={onSearchInputChange}
      />
      <SearchIcon className={classes.iconButton} />
    </Paper>
  );
};
