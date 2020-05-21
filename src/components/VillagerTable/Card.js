/* *
 *
 *  File: Card.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React, { useEffect, useRef } from "react";
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

export const VillagerCard = ({ villager, highlight, ...props }) => {
  const { name, description, img, personality, gender, id } = villager;
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    if (highlight && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }
  }, [highlight, ref]);

  return (
    <Paper id={`${name}-card`} className={`card ${classes.root} ${highlight && 'highlight'}`} ref={ref} {...props}>
      <img src={`http://acnhapi.com/icons/villagers/${id}`} alt={name}/>

      <Typography gutterBottom variant="h5">
        {name}
      </Typography>

      <Typography gutterBottom variant="body2">
        <strong>Gender:&ensp;</strong> {gender}
      </Typography>

      <Typography gutterBottom variant="body2">
        <strong>Personality:&ensp;</strong> {personality}
      </Typography>

      <Typography gutterBottom variant="body2">
        <strong>Birthday:&ensp;</strong> {villager['birthday-string']}
      </Typography>

      <Typography gutterBottom variant="subtitle2">
        Description:
      </Typography>

      <Typography gutterBottom variant="body2">
        {description}
      </Typography>
    </Paper>
  );
};
