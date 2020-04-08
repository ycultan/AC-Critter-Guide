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
import { monthNameToNumMap } from "./data/utils";

function App() {
  const [modifiedFishData, setModifiedFishData] = useState(fishData);
  const [modifiedInsectData, setModifiedInsectData] = useState(insectData)
  const [isSearchingForCritter, setIsSearchingForCritter] = useState(false);
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("number")
  const queryString = window.location.href.split("/").pop()
  const [critterTab, setCritterTab] = useState(queryString || "fish")

  const searchCritter = value => {
    if (value === "") {
      setIsSearchingForCritter(false);
    } else {
      setIsSearchingForCritter(true);
    }
    setModifiedFishData(
      fishData.filter(fish =>
        fish.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const sortData = (title, order) => {
    if (order === "asc") {
      return modifiedFishData.sort((a, b) => (a[title] > b[title] ? 1 : -1));
    } else {
      return modifiedFishData.sort((a, b) => (a[title] > b[title] ? 1 : -1)).reverse();
    }
  }

  const handleRequestSort = (header) => {
    const isAsc = orderBy === header.id && order === "asc"
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder)
    setOrderBy(header.id)

    switch (header.id) {
      case "number":
          setModifiedFishData([...sortData("id", newOrder)]);
        break;
      case "name":
        setModifiedFishData([...sortData("name", newOrder)]);
        break;
      case "location":
        setModifiedFishData([...sortData("location",newOrder)]);
        break;
      case "shadowSize":
        setModifiedFishData([...sortData("shadowSize",newOrder)]);
        break;
      case "value":
        const sortedByValue = modifiedFishData
          .sort((a, b) =>
            parseInt(a.value.replace(/,/g, "") - b.value.replace(/,/g, ""))
          )
          .reverse();
        newOrder === "asc" ? setModifiedFishData([...sortedByValue]) : setModifiedFishData([...sortedByValue.reverse()]);
        break;
      case "time":
        const allDayFish = modifiedFishData.filter(
          fish => fish.time === "All day"
        );
        const fishWithTimes = modifiedFishData.filter(
          fish => fish.time !== "All day"
        );
        const sortByTime = fishWithTimes.sort((a, b) => {
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
     newOrder === "asc" ? setModifiedFishData([...sortByTime, ...allDayFish]) : setModifiedFishData(([...sortByTime, ...allDayFish]).reverse());
        break;
      case "month":
        const months = Object.keys(monthNameToNumMap);

        const fishWithoutDates = modifiedFishData.filter(
          fish => fish.isYearRound === true
        );
        const fishWithDates = modifiedFishData.filter(
          fish => fish.isYearRound === false
        );
        const sortedFishWithDates = fishWithDates.sort((a, b) => {
          const aMonth = a.month.substring(0, a.month.indexOf("-")) || a.month;
          const bMonth = b.month.substring(0, b.month.indexOf("-")) || b.month;
          return months.indexOf(aMonth) - months.indexOf(bMonth);
        });
        newOrder === "asc" ? setModifiedFishData(sortedFishWithDates.concat(fishWithoutDates)) : setModifiedFishData(sortedFishWithDates.concat(fishWithoutDates).reverse());
        break;
      default:
        return modifiedFishData;
    }
  };

  const handleCritterTabChange = tab => {
    setCritterTab(tab)
  }

  return (
    <div>
      <NavBar searchCritter={searchCritter} />
      <HeaderTabs
        modifiedFishData={modifiedFishData}
        modifiedInsectData={modifiedInsectData}
        handleRequestSort={handleRequestSort}
        isSearchingForCritter={isSearchingForCritter}
        order={order}
        orderBy={orderBy}
        onCritterTabChange={handleCritterTabChange}
        currentCritterTab={critterTab}
      />
    </div>
  );
}

export default App;
