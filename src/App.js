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

  const handleRequestSort = headerName => {
    setIsCritterSearched(false);
    switch (headerName) {
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
        setModifiedFishData(sortedFishWithDates.concat(fishWithoutDates));
        break;
      case "id":
        setModifiedFishData(fishData);
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
