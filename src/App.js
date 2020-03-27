import React, { useState } from "react";
import { FishTable } from "./components/FishTable";
import { SearchBar } from "./components/SearchBar";
import { fishData } from "./data/FishData";
import { FishTableHead } from "./components/FishTableHead";


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
    switch(headerName) {
      case 'month':
        const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
        const fishWithDates = modifiedFishData.filter(fish => fish.isYearRound === false)
        const fishWithoutDates = modifiedFishData.filter(fish => fish.isYearRound === true)
        const sortedFishWithDates = fishWithDates.sort((a,b) => {
          const aMonth = a.month.substring(0, a.month.indexOf('-')) || a.month
          const bMonth = b.month.substring(0, b.month.indexOf('-')) || b.month
          return months.indexOf(aMonth) - months.indexOf(bMonth)
        })
        setmodifiedFishData(sortedFishWithDates.concat(fishWithoutDates))
        break;
      case 'id':
        setmodifiedFishData(fishData)
        break;
      default:
        return modifiedFishData
    }
  }

  return (
    <div>
      <SearchBar searchCritter={searchCritter} />
      <FishTable fishData={modifiedFishData}>
        <FishTableHead onRequestSort={handleRequestSort} />
      </FishTable>
    </div>
  );
}

export default App;
