/* 
 *  
 *  File: SearchBar.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useEffect, useState, useRef, useContext } from "react";

import { debounce } from 'lodash';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { getQueryParam } from "../../data/utils";
import { CritterDataContext } from "../../context/CritterDataContext";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: 290,
    height: 40,
    margin: "auto 0 auto auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export const SearchBar = () => {
  const {searchCritter, currentCritterTab} = useContext(CritterDataContext)
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const initRender = useRef(true);
  const debouncer = useRef();

  useEffect(() => {
    if (initRender.current) {
      const params = getQueryParam();
      const q = params.search || params.q || '';
      setSearch(q);
      searchCritter(q)

      initRender.current = false;
    } else {
      setSearch('');
      searchCritter('');
    }

    debouncer.current = debounce(val => {
      searchCritter(val);
    }, 300, { leading: false, trailing: true });
  }, [currentCritterTab])

  const onSearchInputChange = e => {
    setSearch(e.target.value);
    debouncer.current(e.target.value);
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
