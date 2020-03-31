import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fishData, importantFishData } from "./data/FishData";
import { NavBar } from "./components/NavigationBar/NavBar";
import { HeaderTabs } from "./components/HeaderTabs/HeaderTabs";
import { ImportantFish } from "./components/ImportantFish/ImportantFish";

function App() {
  const [modifiedFishData, setModifiedFishData] = useState(fishData);
  const [isCritterSearched, setIsCritterSearched] = useState(false);
  const [isSearchingForCritter, setIsSearchingForCritter] = useState(false);

  const searchCritter = value => {
    if (value === "") {
      setIsSearchingForCritter(false);
    } else {
      setIsSearchingForCritter(true);
    }
    setIsCritterSearched(true);
    setModifiedFishData(
      fishData.filter(fish =>
        fish.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const sortData = title =>
    modifiedFishData.sort((a, b) => (a[title] > b[title] ? 1 : -1));

  const handleRequestSort = headerName => {
    setIsCritterSearched(false);

    switch (headerName) {
      case "Fish #":
        setModifiedFishData([...sortData("id")]);
        break;
      case "Fish":
        setModifiedFishData([...sortData("name")]);
        break;
      case "Location":
        setModifiedFishData([...sortData("location")]);
        break;
      case "Shadow Size":
        setModifiedFishData([...sortData("shadowSize")]);
        break;
      case "Value (Bells)":
        const sortedByValue = modifiedFishData
          .sort((a, b) =>
            parseInt(a.value.replace(/,/g, "") - b.value.replace(/,/g, ""))
          )
          .reverse();
        setModifiedFishData([...sortedByValue]);
        break;
      case "Time":
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
        setModifiedFishData([...sortByTime, ...allDayFish]);
        break;
      case "Month (Northern Hemisphere)":
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
        setModifiedFishData(sortedFishWithDates.concat(fishWithoutDates));
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
        isCritterSearched={isCritterSearched}
        isSearchingForCritter={isSearchingForCritter}
      />
    </div>
  );
}

export default App;
