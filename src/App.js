import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fishData } from "./data/FishData";
import { NavBar } from "./components/NavigationBar/NavBar";
import { HeaderTabs } from "./components/HeaderTabs/HeaderTabs";

function App() {
  const [modifiedFishData, setmodifiedFishData] = useState(fishData);
  const searchCritter = value => {
    setmodifiedFishData(
      modifiedFishData.filter(fish =>
        fish.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const handleRequestSort = headerName => {
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
        const fishWithDates = modifiedFishData.filter(
          fish => fish.isYearRound === false
        );
        const fishWithoutDates = modifiedFishData.filter(
          fish => fish.isYearRound === true
        );
        const sortedFishWithDates = fishWithDates.sort((a, b) => {
          const aMonth = a.month.substring(0, a.month.indexOf("-")) || a.month;
          const bMonth = b.month.substring(0, b.month.indexOf("-")) || b.month;
          return months.indexOf(aMonth) - months.indexOf(bMonth);
        });
        setmodifiedFishData(sortedFishWithDates.concat(fishWithoutDates));
        break;
      case "id":
        setmodifiedFishData(fishData);
        break;
      default:
        return modifiedFishData;
    }
  };

  return (
    <div>
      <NavBar searchBar={<SearchBar searchCritter={searchCritter} />} />
      <HeaderTabs
        modifiedFishData={modifiedFishData}
        handleRequestSort={handleRequestSort}
      />
      {/* <CritterTable
      title="All Fish"
        fishData={modifiedFishData}
        critterTableHead={
          <CritterTableHead onRequestSort={handleRequestSort} />
        }
      /> */}
    </div>
  );
}

export default App;
