/* *
 *
 *  File: Card.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sx')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100%/2 - 40px)'
    },
    [theme.breakpoints.up('md')]: {
      width: 'calc(100%/3 - 40px)'
    },
  },
}));

export const VillagerCard = ({ villager, highlight }) => {
  const { name, description, img } = villager;
  const classes = useStyles();

  return (
    <Paper className={`card ${classes.root} ${highlight && 'highlight'}`}>
      <img src={img} alt={name}/>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </Paper>
  );
};
