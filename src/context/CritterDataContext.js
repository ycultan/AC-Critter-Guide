/*
 *
 *  File: CritterDataContext.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { villagersList } from "../data/VillagerData";
import { getAllBugs, getAllFish, getAllVillagers } from "../components/requests";
import LocalStorageContext from "./LocalStorageContext";

// Create context
export const CritterDataContext = createContext(null);

// Provider component
export const CritterDataProvider = ({ children }) => {
  const { isNorth } = useContext(LocalStorageContext);
  const [modifiedFishData, setModifiedFishData] = useState([]);
  const [modifiedInsectData, setModifiedInsectData] = useState([]);

  const allFish = useRef([]);
  const allBugs = useRef([]);
  const allVillagers = useRef([]);

  const [critterTab, setCritterTab] = useState(document.location.pathname.split('/')[1] || 'fish');
  const [isSearchingForCritter, setIsSearchingForCritter] = useState(false);
  const [foundVillager, setFoundVillager] = useState();

  useEffect(() => {
    getAllVillagers().then(data => allVillagers.current = data);
    getAllFish().then(data => { allFish.current = data; setModifiedFishData(data); });
    getAllBugs().then(data => { allBugs.current = data; setModifiedInsectData(data); });
  }, []);

  useEffect(() => {
    const setMonth = critter => {
      critter.availability.month = critter.availability[`month-${isNorth ? 'northern' : 'southern'}`];

      return critter;
    };

    allFish.current = allFish.current.map(setMonth);
    allBugs.current = allBugs.current.map(setMonth)
    setModifiedFishData(modifiedFishData.map(setMonth));
    setModifiedInsectData(modifiedInsectData.map(setMonth));
  }, [isNorth]); // eslint-disable-line react-hooks/exhaustive-deps

  const onCritterTabChange = (tab) => setCritterTab(tab);

  const searchHelper = (searchVal, whichSetter, whichData) => {
    whichSetter(
      whichData.filter((critter) =>
        critter.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  const searchCritter = (value = "") => {
    if (!value) {
      setIsSearchingForCritter(false);
    } else {
      setIsSearchingForCritter(true);
    }

    if (critterTab === "fish") {
      searchHelper(value, setModifiedFishData, allFish.current);
    } else if (critterTab === "insect") {
      searchHelper(value, setModifiedInsectData, allBugs.current);
    } else if (critterTab === "villager") {
      if (value.length < 2) return setFoundVillager();

      const searchVal = value.toLowerCase();

      let firstMatch;
      let bestMatch;

      for (const villager of villagersList) {
        if (!firstMatch && villager.name.toLowerCase().includes(searchVal)) {
          firstMatch = villager;
        } else if (firstMatch && villager.name.toLowerCase() === searchVal) {
          bestMatch = villager;
        }
      }

      const foundVillager = bestMatch || firstMatch;

      if (foundVillager) setFoundVillager(foundVillager);
    }
  };

  const sortData = (title, order, data) => {
    if (order === "asc") {
      return data.sort((a, b) => (a[title] > b[title] ? 1 : -1));
    } else {
      return data.sort((a, b) => (a[title] > b[title] ? 1 : -1)).reverse();
    }
  };

  const sortHelper = (header, order, whichSet, whichData) => {
    switch (header.id) {
      case "number":
        whichSet([...sortData("id", order, whichData)]);
        break;
      case "name":
        whichSet([...sortData("name", order, whichData)]);
        break;
      case "location":
        whichSet([...sortData("location", order, whichData)]);
        break;
      case "shadowSize":
        whichSet([...sortData("shadowSize", order, whichData)]);
        break;
      case "value":
        const critterWithValues = whichData.filter(
          (critter) => critter.price !== "N/A"
        );
        const critterWithoutValues = whichData.filter(
          (critter) => critter.price === "N/A"
        );
        const sortedByValue = critterWithValues
          .sort((a, b) =>
            parseInt(a.price.replace(/,/g, "") - b.price.replace(/,/g, ""))
          )
          .reverse();
        order === "asc"
          ? whichSet([...sortedByValue, ...critterWithoutValues])
          : whichSet([...sortedByValue, ...critterWithoutValues].reverse());
        break;
      case "time":
        const allDayCritter = whichData.filter(
          (critter) => critter.availability.time === "All day"
        );
        const critterWithTimes = whichData.filter((critter) => {
          if (critter.availability.time === "All day" || critter.availability.time === "Unknown")
            return false;
          return true;
        });
        const sortByTime = critterWithTimes.sort((a, b) => {
          const aTime = a.availability.time.substring(0, a.availability.time.indexOf("-")).split(" ");
          const bTime = b.availability.time.substring(0, b.availability.time.indexOf("-")).split(" ");
          aTime[0] = aTime[0].concat(":00");
          aTime[1] = aTime[1].replace(/[.]/g, "").toUpperCase();
          bTime[0] = bTime[0].concat(":00");
          bTime[1] = bTime[1].replace(/[.]/g, "").toUpperCase();
          return (
            new Date("1970/01/01 " + aTime.join(" ")) -
            new Date("1970/01/01 " + bTime.join(" "))
          );
        });
        order === "asc"
          ? whichSet([...sortByTime, ...allDayCritter])
          : whichSet([...sortByTime, ...allDayCritter].reverse());
        break;
      case "month":
        const critterWithoutDates = whichData.filter((critter) => {
          if (critter.isYearRound) return true;

          return false;
        });

        const critterWithDates = whichData.filter((critter) => {
          if (critter.isYearRound) return false;

          return true;
        });

        const sortedcritterWithDates = critterWithDates.sort((a, b) => {
          const aSubstr = a.availability.month.substring(0, a.availability.month.indexOf("-"));
          const bSubstr = b.availability.month.substring(0, b.availability.month.indexOf("-"));
          const aMonth = parseInt(aSubstr || a.availability.month);
          const bMonth = parseInt(bSubstr || b.availability.month);

          return aMonth - bMonth;
        });

        order === "asc"
          ? whichSet([...sortedcritterWithDates, ...critterWithoutDates])
          : whichSet(
              [...sortedcritterWithDates, ...critterWithoutDates].reverse()
            );
        break;
      default:
        return whichData;
    }
  };

  const handleRequestSort = (header, order) => {
    if (critterTab === "fish") {
      sortHelper(header, order, setModifiedFishData, modifiedFishData);
    } else if (critterTab === "insect") {
      sortHelper(header, order, setModifiedInsectData, modifiedInsectData);
    }
  };

  const clearFoundVillager = () => setFoundVillager();

  return (
    <CritterDataContext.Provider
      value={{
        modifiedFishData,
        modifiedInsectData,
        isSearchingForCritter,
        searchCritter,
        foundVillager,
        clearFoundVillager,
        currentCritterTab: critterTab,
        onCritterTabChange,
        handleRequestSort,
        allVillagers: allVillagers.current,
        fishWithDates: allFish.current.filter(critter => critter.isYearRound === false),
        insectWithDates: allBugs.current.filter(critter => critter.isYearRound === false),
      }}
    >
      {children}
    </CritterDataContext.Provider>
  );
};
