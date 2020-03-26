import React, { useState } from "react";
import { FishTableBody } from "./components/FishTableBody";
import { SearchBar } from "./components/SearchBar";
import { fishData } from "./data/FishData";
import { FishTableHead } from "./components/FishTableHead";


function App() {
  const [modifiedFishData, setmodifiedFishData] = useState(fishData);
  const searchCritter = value => {
    setmodifiedFishData(
      fishData.filter(fish =>
        fish.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const handleRequestSort = () => {
    
  }

  return (
    <div>
      <SearchBar searchCritter={searchCritter} />
      <FishTableBody fishData={modifiedFishData}>
        <FishTableHead onRequestSort={handleRequestSort} />
      </FishTableBody>
      {/* <FishTable fishData={modifiedFishData} /> */}
    </div>
  );
}

export default App;
