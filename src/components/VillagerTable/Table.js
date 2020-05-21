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
import { DropdownSelector } from "../DropdownSelector/DropdownSelector";
import { villagerData } from "../../data/VillagerData";
import { getQueryParam } from "../../data/utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoryContainer: {
    margin: '16px 0',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
  dropdownContainer: {
    margin: '16px 0',

    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  button: {
    margin: '2px'
  }
}));

const categories = villagerData.categories;
const villagerMap = villagerData.villagers;

export const VillagerTable = ({ foundVillager, clearFoundVillager, basicVillagerData }) => {
  const classes = useStyles();
  const animalParam = (getQueryParam().animal || '').toLowerCase();
  const initAnimal = foundVillager?.category || categories.includes(animalParam) ? animalParam : categories[0];

  const [animalType, setAnimalType] = useState(initAnimal);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    if (foundVillager) setAnimalType(foundVillager.category)
  }, [foundVillager])

  useEffect(() => {
    if (animalType) setVillagers(villagerMap[animalType]);
  }, [animalType]);

  const onSelectCategory = e => {
    setAnimalType(e.target.value);
    clearFoundVillager();
  };

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
        <div className={classes.dropdownContainer}>
          <DropdownSelector label="Category" data={categories} selected={animalType} onSelect={onSelectCategory} />
        </div>
        <div className={classes.cardContainer}>
          {villagers.map(villager => {
            const basicInfo = (basicVillagerData[animalType] || {})[villager.name];

            return (
              <VillagerCard
                key={`${villager.name}-card`}
                villager={{...villager, ...basicInfo, name: villager.name}}
                highlight={villager.name === foundVillager?.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
