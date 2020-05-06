/* 
 *  
 *  File: App.js 
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useState } from "react";
import { fishData } from "./data/FishData";
import { NavBar } from "./components/NavigationBar/NavBar";
import { HeaderTabs } from "./components/HeaderTabs/HeaderTabs";
import { insectData } from "./data/InsectData";
import { getQueryParam, monthNameToNumMap } from "./data/utils";
import { villagersList } from "./data/VillagerData";

function App() {
  const style = {
    app: { margin: '16px' }
  };

  const params = getQueryParam();

  const [foundVillager, setFoundVillager] = useState();
  const [modifiedFishData, setModifiedFishData] = useState(fishData);
  const [modifiedInsectData, setModifiedInsectData] = useState(insectData)
  const [isSearchingForCritter, setIsSearchingForCritter] = useState(false);
  const [critterTab, setCritterTab] = useState({
    Bug: 'insect',
    Insect: 'insect',
    Villager: 'villager'
  }[params.type] || 'fish')

  const searchHelper = (searchVal, whichSetter, whichData) => {
    whichSetter(
      whichData.filter(critter =>
        critter.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }

  const searchCritter = (value = '') => {
    if (!value) {
      setIsSearchingForCritter(false);
    } else {
      setIsSearchingForCritter(true);
    }

    if (critterTab === "fish") {
      searchHelper(value, setModifiedFishData, fishData)
    } else if (critterTab === "insect") {
      searchHelper(value, setModifiedInsectData, insectData)
    } else if (critterTab === "villager") {
      if (value.length < 2) return setFoundVillager()

      const foundVillager = villagersList.find(villager  => villager.name.toLowerCase().includes(value))

      if (foundVillager) setFoundVillager(foundVillager)
    }
  };

  const sortData = (title, order, data) => {
    if (order === "asc") {
      return data.sort((a, b) => (a[title] > b[title] ? 1 : -1));
    } else {
      return data.sort((a, b) => (a[title] > b[title] ? 1 : -1)).reverse();
    }
  }

  const sortHelper = (header, order, whichSet, whichData) => {
    switch (header.id) {
      case "number":
          whichSet([...sortData("id", order, whichData)]);
        break;
      case "name":
        whichSet([...sortData("name", order, whichData)]);
        break;
      case "location":
        whichSet([...sortData("location",order, whichData)]);
        break;
      case "shadowSize":
        whichSet([...sortData("shadowSize",order, whichData)]);
        break;
      case "value":
        const critterWithValues = whichData.filter(critter => critter.value !== "N/A")
        const critterWithoutValues = whichData.filter(critter => critter.value === "N/A")
        const sortedByValue = critterWithValues
          .sort((a, b) =>
            parseInt(a.value.replace(/,/g, "") - b.value.replace(/,/g, ""))
          )
          .reverse();
        order === "asc" ? whichSet([...sortedByValue, ...critterWithoutValues]) : whichSet(([...sortedByValue, ...critterWithoutValues]).reverse());
        break;
      case "time":
        const allDayCritter = whichData.filter(
          critter => critter.time === "All day"
        );
        const critterWithTimes = whichData.filter(
          critter => {
            if (critter.time === "All day" || critter.time === "Unknown") return false
            return true
          }
        );
        const sortByTime = critterWithTimes.sort((a, b) => {
          const aTime = a.time.substring(0, a.time.indexOf("-")).split(" ");
          const bTime = b.time.substring(0, b.time.indexOf("-")).split(" ");
          aTime[0] = aTime[0].concat(":00");
          aTime[1] = aTime[1].replace(/[.]/g, "").toUpperCase();
          bTime[0] = bTime[0].concat(":00");
          bTime[1] = bTime[1].replace(/[.]/g, "").toUpperCase();
          return (
            new Date("1970/01/01 " + aTime.join(" ")) -
            new Date("1970/01/01 " + bTime.join(" "))
          );
        });
     order === "asc" ? whichSet([...sortByTime, ...allDayCritter]) : whichSet(([...sortByTime, ...allDayCritter]).reverse());
        break;
      case "month":
        const months = Object.keys(monthNameToNumMap);

        const critterWithoutDates = whichData.filter(
          critter => {
            if (critter.isYearRound || critter.month === "Year-round") return true
            return false
          }
        );
        const critterWithDates = whichData.filter(
          critter => {
            if (critter.isYearRound || critter.month === "Year-round") return false
            return true
          }
        );
        const sortedcritterWithDates = critterWithDates.sort((a, b) => {
          const aMonth = a.month.substring(0, a.month.indexOf("-")) || a.month;
          const bMonth = b.month.substring(0, b.month.indexOf("-")) || b.month;
          return months.indexOf(aMonth) - months.indexOf(bMonth);
        });
        order === "asc" ? whichSet([...sortedcritterWithDates,...critterWithoutDates]) : whichSet(([...sortedcritterWithDates, ...critterWithoutDates]).reverse());
        break;
      default:
        return whichData;
    }
  }

  const handleRequestSort = (header,order) => {
    if (critterTab === "fish") {
      sortHelper(header, order, setModifiedFishData, modifiedFishData)
    } else if (critterTab === "insect") {
      sortHelper(header, order, setModifiedInsectData, modifiedInsectData)
    }
      
  };

  const handleCritterTabChange = tab => {
    setCritterTab(tab)
  }

  return (
    <div style={style.app}>
      <NavBar searchCritter={searchCritter} critterTab={critterTab} />
      <HeaderTabs
        clearFoundVillager={() => setFoundVillager()}
        foundVillager={foundVillager}
        modifiedFishData={modifiedFishData}
        modifiedInsectData={modifiedInsectData}
        handleRequestSort={handleRequestSort}
        isSearchingForCritter={isSearchingForCritter}
        onCritterTabChange={handleCritterTabChange}
        currentCritterTab={critterTab}
      />
    </div>
  );
}

export default App;
