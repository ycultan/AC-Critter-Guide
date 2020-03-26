import React from 'react';
import { FishTable } from './components/FishTable';
import { SearchBar } from './components/SearchBar';
import { fishData } from './context/FishData';


function App() {
  return (
    <div>
      <SearchBar />
     <FishTable fishData={fishData}/>
    </div>
  );
}

export default App;
