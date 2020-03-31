import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fishData, importantFishData } from "./data/FishData";
import { NavBar } from "./components/NavigationBar/NavBar";
import { HeaderTabs } from "./components/HeaderTabs/HeaderTabs";
import { ImportantFish } from "./components/ImportantFish/ImportantFish";

function App() {
  const [modifiedFishData, setModifiedFishData] = useState(fishData);
  const [isSearchingForCritter, setIsSearchingForCritter] = useState(false);
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("number")

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

  const handleRequestSort = header => {
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
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];

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

  return (
    <div>
      <NavBar searchBar={<SearchBar searchCritter={searchCritter} />} />
      <HeaderTabs
        importantFish={<ImportantFish importantFishData={importantFishData} />}
        modifiedFishData={modifiedFishData}
        handleRequestSort={handleRequestSort}
        isSearchingForCritter={isSearchingForCritter}
        order={order}
        orderBy={orderBy}
      />
    </div>
  );
}

export default App;
