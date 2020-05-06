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
import { getQueryParam } from "../../data/utils";

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

export const VillagerTable = ({ foundVillager, clearFoundVillager }) => {
  const classes = useStyles();
  const animalParam = getQueryParam().animal.toLowerCase();
  const initAnimal = foundVillager?.category || categories.includes(animalParam) ? animalParam : categories[0];

  const [animalType, setAnimalType] = useState(initAnimal);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    if (foundVillager) setAnimalType(foundVillager.category)
  }, [foundVillager])

  useEffect(() => {
    if (animalType) setVillagers(villagerMap[animalType]);
  }, [animalType]);

  return (
    <div>
      <Typography variant="h6">Villagers</Typography>
      <div className={classes.root}>
        <div className={classes.categoryContainer}>
          {categories.map(category =>
            <Button
              key={`${category}-btn`}
              className={classes.button}
              size="small"
              variant={category === animalType ? 'contained' : 'outlined'}
              onClick={() => { setAnimalType(category); clearFoundVillager(); } }
              color={category === animalType ? 'primary' : 'default'}
            >
              {category}
            </Button>
          )}
        </div>
        <div className={classes.cardContainer}>
          {villagers.map(villager =>
            <VillagerCard
              villager={villager}
              highlight={villager.name === foundVillager?.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};
