/*
 *
 *  File: HeaderTabs.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useState, useContext } from "react";
import {
  makeStyles,
  AppBar,
  Button,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faBug, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { CritterTable } from "../CritterTable/CritterTable";
import { VillagerTable } from "../VillagerTable/Table";
import { HemisphereSelector } from "../HemisphereSelector/HemisphereSelector";
import { ImportantCritterSection } from "../ImportantCritter/ImportantCritter";
import { MAX_WIDTH } from "../../const";
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
  const [showTable, setShowTable] = useState(false);
  const shouldShowTable = showTable || !showImportantSection;
  const isCritter = type !== "villager";

  return (
    value === type && (
      <Typography
        style={style.tabPanel}
        component="div"
        role="tabpanel"
        id={`scrollable-force-tabpanel-${type}`}
        aria-labelledby={`scrollable-force-tab-${type}`}
      >
        {showImportantSection && (
          <>
            <HemisphereSelector />
            <ImportantCritterSection critter={type} />
          </>
        )}

        {isCritter ? (
          <>
            {shouldShowTable && table}
            {showImportantSection && (
              <Button
                variant="text"
                color="primary"
                onClick={() => setShowTable(!showTable)}
              >
                {`${shouldShowTable ? "Hide" : "Show"} all ${type}`}
              </Button>
            )}
          </>
        ) : (
          table
        )}
      </Typography>
    )
  );
};

export const HeaderTabs = () => {
  const classes = useStyles();
  const {
    onCritterTabChange,
    currentCritterTab,
    modifiedFishData,
    modifiedInsectData,
    isSearchingForCritter,
    handleRequestSort,
    foundVillager,
    clearFoundVillager,
  } = useContext(CritterDataContext);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    onCritterTabChange(newValue);
  };

  return (
    <BrowserRouter>
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
              component={Link}
              to="/fish"
            />
            <Tab
              value="insect"
              label="Insect"
              icon={<FontAwesomeIcon icon={faBug} />}
              component={Link}
              to="/insect"
            />
            <Tab
              value="villager"
              label="villager"
              icon={<FontAwesomeIcon icon={faHouseUser} />}
              component={Link}
              to="/villager"
            />
          </Tabs>
        </AppBar>

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
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
            )}
          />
          <Route
            path="/fish"
            render={() => (
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
            )}
          />
          <Route
            path="/insect"
            render={() => (
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
            )}
          />
          <Route
            path="/villager"
            render={() => (
              <TabPanel
                value={currentCritterTab}
                type="villager"
                table={
                  <VillagerTable
                    foundVillager={foundVillager}
                    clearFoundVillager={clearFoundVillager}
                  />
                }
                showImportantSection={false}
              />
            )}
          />
        </Switch>

        {/* <TabPanel
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
        /> */}
        {/* <TabPanel
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
        /> */}
        {/* <TabPanel
          value={currentCritterTab}
          type="villager"
          table={
            <VillagerTable
              foundVillager={foundVillager}
              clearFoundVillager={clearFoundVillager}
            />
          }
          showImportantSection={false}
        /> */}
      </div>
    </BrowserRouter>
  );
};
