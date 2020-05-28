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
  const [critterStorage, setCritterStorage] = useState(JSON.parse(localStorage.getItem('critterStorage')) || {});

  const toggleCritter = critter => {
    setCritterStorage({ ...critterStorage, [critter]: !critterStorage[critter] });
  };

  useEffect(() => {
    localStorage.setItem('critterStorage', JSON.stringify(critterStorage));
  }, [critterStorage]);

  return (
    <LocalStorageContext.Provider value={{ critterStorage, toggleCritter }}>
      {children}
    </LocalStorageContext.Provider>
  );
});
