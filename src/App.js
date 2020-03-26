import React, { useState } from "react";
import { FishTable } from "./components/FishTable";
import { SearchBar } from "./components/SearchBar";
import { fishData } from "./data/FishData";

function App() {
  const [modifiedFishData, setmodifiedFishData] = useState(fishData);
  const searchCritter = value => {
    setmodifiedFishData(
      fishData.filter(fish =>
        fish.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <SearchBar searchCritter={searchCritter} />
      <FishTable fishData={modifiedFishData} />
    </div>
  );
}

export default App;
