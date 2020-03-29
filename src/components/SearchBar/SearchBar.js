import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

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

export const SearchBar = ({ searchCritter }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

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
