/* *
 *
 *  File: Card.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React from "react";
import { Paper, Typography } from "@material-ui/core";
import "./styles.css";

export const VillagerCard = ({ villager }) => {
  const { name, description, img } = villager;

  return (
    <Paper className="card">
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
