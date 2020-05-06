/* *
 *
 *  File: Table.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { VillagerCard } from "./Card";
import { villagerData } from "../../data/VillagerData";

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoryContainer: {
    margin: '16px 0'
  },
  button: {
    margin: '2px'
  }
});

const categories = villagerData.categories;
const villagerMap = villagerData.villagers;

export const VillagerTable = () => {
  const classes = useStyles();
  const [animalType, setAnimalType] = useState(categories[0]);
  const [villagers, setVillagers] = useState([]);
  useEffect(() => {
    if (!animalType) return; // should not happen

    setVillagers(villagerMap[animalType]);
  }, [animalType]);

  return (
    <div>
      <Typography variant="h6">Villagers</Typography>
      <div className={classes.root}>
        <div className={classes.categoryContainer}>
          {categories.map(animalType =>
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => setAnimalType(animalType)}
            >
              {animalType}
            </Button>
          )}
        </div>
        <div className={classes.cardContainer}>
          {villagers.map(villager => <VillagerCard villager={villager} />)}
        </div>
      </div>
    </div>
  );
};
