import React, { useState } from "react";
import { makeStyles, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faBug } from "@fortawesome/free-solid-svg-icons";
import { CritterTable } from "../CritterTable/CritterTable";
import { CritterTableHead } from "../CritterTableHeader/CritterTableHead";
import { importantFishData } from "../../data/FishData";
import { importantInsectData } from "../../data/InsectData";
import { ImportantCritter } from "../ImportantCritter/ImportantCritter";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    flexDirection: "row"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

const style = {
  tabPanel: {
    maxWidth: "1278px",
    margin: "auto"
  }
};

export const fishTableHeaders = [
  { id: "number", name: "Fish #" },
  { id: "name", name: "Fish" },
  { id: "location", name: "Location" },
  { id: "shadowSize", name: "Shadow Size" },
  { id: "value", name: "Value (Bells)" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];
export const insectTableHeaders = [
  { id: "number", name: "Insect #" },
  { id: "name", name: "Insect" },
  { id: "location", name: "Location" },
  { id: "value", name: "Value" },
  { id: "time", name: "Time" },
  { id: "month", name: "Month (Northern Hemisphere)" }
];

const TabPanel = ({
  importantFish,
  importantInsect,
  fishTable,
  insectTable,
  value,
  index,
  isSearchingForCritter
}) => {
  return (
    <Typography
      style={style.tabPanel}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
    >
      {!isSearchingForCritter && importantFish}
      {!isSearchingForCritter && importantInsect}

      {value === index && fishTable}
      {value === index && insectTable}
    </Typography>
  );
};

export const HeaderTabs = ({
  modifiedFishData,
  modifiedInsectData,
  handleRequestSort,
  isSearchingForCritter,
  order,
  orderBy,
  onCritterTabChange,
  onWhichCritterTab
}) => {
  const classes = useStyles();
  const queryString = window.location.href.split("/").pop()
  const [currentTab, setCurrentTab] = useState(queryString || "fish")

  const handleChange = (event, newValue) => {
    onCritterTabChange(newValue);
    setCurrentTab(newValue)
  };


  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={currentTab}
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
          </Tabs>
        </AppBar>

        <Switch>
          <Route
            exact
            path={["/", "/fish"]}
            component={() => (
              <TabPanel
                value={currentTab}
                index="fish"
                importantFish={
                  <ImportantCritter
                    critterTableHeaders={fishTableHeaders}
                    importantCritterData={importantFishData}
                  />
                }
                fishTable={
                  <CritterTable
                    title="All Fish"
                    critter="fish"
                    critterData={modifiedFishData}
                    isSearchingForCritter={isSearchingForCritter}
                    critterTableHead={
                      <CritterTableHead
                        onRequestSort={handleRequestSort}
                        tableHeaders={fishTableHeaders}
                        order={order}
                        orderBy={orderBy}
                        onWhichCritterTab={onWhichCritterTab}
                      />
                    }
                  />
                }
                isSearchingForCritter={isSearchingForCritter}
              />
            )}
          />
          <Route
            path="/insect"
            component={() => (
              <TabPanel
                value={currentTab}
                index="insect"
                importantInsect={
                  <ImportantCritter
                    critterTableHeaders={insectTableHeaders}
                    importantCritterData={importantInsectData}
                  />
                }
                insectTable={
                  <CritterTable
                    title="All Insects"
                    critter="insect"
                    critterData={modifiedInsectData}
                    isSearchingForCritter={isSearchingForCritter}
                    critterTableHead={
                      <CritterTableHead
                        onRequestSort={handleRequestSort}
                        tableHeaders={insectTableHeaders}
                        order={order}
                        orderBy={orderBy}
                      />
                    }
                  />
                }
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
