/*
 *
 *  File: HeaderTabs.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useEffect, useState, useContext } from "react";
import { makeStyles, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faBug, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { CritterTable } from "../CritterTable/CritterTable";
import { VillagerTable } from "../VillagerTable/Table";
import { ImportantCritterSection } from "../ImportantCritter/ImportantCritter";
import { MAX_WIDTH } from "../../const";
import { getVillagers } from "../requests";
import { CritterDataContext } from "../../context/CritterDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    flexDirection: "row",
    maxWidth: MAX_WIDTH,
    margin: "16px auto",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const style = {
  tabPanel: {
    maxWidth: "1278px",
    margin: "auto",
  },
};

const TabPanel = ({ table, value, type, showImportantSection }) => {
  return value === type && (
    <Typography
      style={style.tabPanel}
      component="div"
      role="tabpanel"
      id={`scrollable-force-tabpanel-${type}`}
      aria-labelledby={`scrollable-force-tab-${type}`}
    >
      {showImportantSection && (
        <ImportantCritterSection critter={type} />
      )}
      {table}
    </Typography>
  );
};

export const HeaderTabs = () => {
  const classes = useStyles();
  const {onCritterTabChange, currentCritterTab, modifiedFishData, isSearchingForCritter, handleRequestSort, modifiedInsectData, foundVillager, clearFoundVillager} = useContext(CritterDataContext)
  const [basicVillagerData, setBasicVillagerData] = useState();

  useEffect(() => {
    getVillagers().then(data => setBasicVillagerData(data));
  }, []);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    onCritterTabChange(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={currentCritterTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            value="fish"
            label="Fish"
            icon={<FontAwesomeIcon icon={faFish} />}
          />
          <Tab
            value="insect"
            label="Insect"
            icon={<FontAwesomeIcon icon={faBug} />}
          />
          <Tab
            value="villager"
            label="villager"
            icon={<FontAwesomeIcon icon={faHouseUser} />}
          />
        </Tabs>
      </AppBar>

      <TabPanel
        value={currentCritterTab}
        type="fish"
        table={
          <CritterTable
            title="Fishes"
            critter="fish"
            critterData={modifiedFishData}
            isSearchingForCritter={isSearchingForCritter}
            handleRequestSort={handleRequestSort}
            currentCritterTab={currentCritterTab}
          />
        }
        showImportantSection={!isSearchingForCritter}
      />
      <TabPanel
        value={currentCritterTab}
        type="insect"
        table={
          <CritterTable
            title="Insects"
            critter="insect"
            critterData={modifiedInsectData}
            isSearchingForCritter={isSearchingForCritter}
            handleRequestSort={handleRequestSort}
            currentCritterTab={currentCritterTab}
          />
        }
        showImportantSection={!isSearchingForCritter}
      />
      <TabPanel
        value={currentCritterTab}
        type="villager"
        table={
          <VillagerTable
            foundVillager={foundVillager}
            clearFoundVillager={clearFoundVillager}
            basicVillagerData={basicVillagerData}
          />
        }
        showImportantSection={false}
      />
    </div>
  );
};
