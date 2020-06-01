/*
 *
 *  File: LocalStorageContext.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React, { memo, useEffect, useState, createContext } from 'react';
import { getQueryParam, monthNameToNumMap } from "../data/utils";

const LocalStorageContext = createContext(null);
LocalStorageContext.displayName = 'LocalStorageContext';

export default LocalStorageContext;

export const LocalStorageProvider = memo(function LocalStorageProvider({ children }) {
  // toLowerCase for backwards compatibility (before we were using titleCase in storage)
  const [critterStorage, setCritterStorage] = useState(JSON.parse((localStorage.getItem('critterStorage') || '{}').toLowerCase()));
  const [isNorth, setIsNorth] = useState(localStorage.getItem('northernHemisphere') !== 'false');
  const [selectedMonth, setSelectedMonth] = useState(getMonth());

  const toggleCritter = critter => {
    setCritterStorage({ ...critterStorage, [critter]: !critterStorage[critter] });
  };

  useEffect(() => {
    localStorage.setItem('critterStorage', JSON.stringify(critterStorage));
  }, [critterStorage]);

  useEffect(() => {
    localStorage.setItem('northernHemisphere', isNorth);
  }, [isNorth]);

  useEffect(() => {
    localStorage.setItem('selectedMonth', selectedMonth);
  }, [selectedMonth]);

  return (
    <LocalStorageContext.Provider value={{ critterStorage, toggleCritter, isNorth, setIsNorth, selectedMonth, setSelectedMonth }}>
      {children}
    </LocalStorageContext.Provider>
  );
});

/**
 * Returns the current month in the following order of precedence:
 * the month specified in queryParams, localStorage, Date()
 */
const getMonth = () => {
  const queryMonth = getQueryParam().month;
  const isQueryMonthInvalid = isNaN(monthNameToNumMap[queryMonth]);
  const date = new Date();
  const monthName = isQueryMonthInvalid
      ? (localStorage.getItem('selectedMonth') || date.toLocaleDateString("default", { month: "long" }))
      : queryMonth;

  return monthName
};
