/*
 *
 *  File: LocalStorageContext.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React, { memo, useEffect, useState, createContext } from 'react';

const LocalStorageContext = createContext(null);
LocalStorageContext.displayName = 'LocalStorageContext';

export default LocalStorageContext;

export const LocalStorageProvider = memo(function LocalStorageProvider({ children }) {
  // toLowerCase for backwards compatibility (before we were using titleCase in storage)
  const [critterStorage, setCritterStorage] = useState(JSON.parse(localStorage.getItem('critterStorage').toLowerCase()) || {});
  const [isNorth, setIsNorth] = useState(localStorage.getItem('northernHemisphere') !== 'false');

  const toggleCritter = critter => {
    setCritterStorage({ ...critterStorage, [critter]: !critterStorage[critter] });
  };

  useEffect(() => {
    localStorage.setItem('critterStorage', JSON.stringify(critterStorage));
  }, [critterStorage]);

  useEffect(() => {
    localStorage.setItem('northernHemisphere', JSON.stringify(isNorth));
  }, [isNorth]);

  return (
    <LocalStorageContext.Provider value={{ critterStorage, toggleCritter, isNorth, setIsNorth }}>
      {children}
    </LocalStorageContext.Provider>
  );
});
