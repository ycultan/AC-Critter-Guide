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
  const newDesc = insertBoldTagsForImportantInfo(description)

  return (
    <Paper className={`card ${classes.root} ${highlight && 'highlight'}`}>
      <img src={img} alt={name}/>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <p className="MuiTypography-colorTextSecondary MuiTypography-body2" dangerouslySetInnerHTML={{ __html: newDesc }} />
    </Paper>
  );
};

// used for adding bold text into the description to highlight useful information: personality, birthday, fave song
const insertBoldTagsForImportantInfo = description => {
  const typeRegex = /(?<=is an?)\s(\w+)/g
  const dobRegex = /(?<=born on)\s(\w+)\s(\w+)/g
  const songRegex = /(?<=song is)\s.*/g

  const splitChar = '. '
  const regexes = [typeRegex, dobRegex, songRegex]
  const splitDesc = description.trim().split(splitChar)

  let newDesc = '';

  for (let i = 0; i < splitDesc.length; i++) {
    const fragment = splitDesc[i];

    newDesc += fragment.replace(regexes[i] || /.*/, match => {
      return `<strong class="caps">${match}</strong>`;
    })

    if (i !== splitDesc.length - 1) newDesc += splitChar
  }

  return newDesc;
};
