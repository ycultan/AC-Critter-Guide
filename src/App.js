/*
 *
 *  File: App.js
 *  Author: Lucy
 *  Copyright (c) 2020 Lucy Tan
 */

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavigationBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { HeaderTabs } from "./components/HeaderTabs/HeaderTabs";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import { initializeHeap } from "./heap";

import { makeStyles } from "@material-ui/core/styles";
import { CritterDataProvider } from "./context/CritterDataContext";

const useStyles = makeStyles((theme) => ({
  gutter: {
    [theme.breakpoints.down("lg")]: {
      padding: "16px 24px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "16px 80px",
    },
  },
}));

function App() {
  const classes = useStyles();

  useEffect(() => {
    initializeHeap();
  }, []);

  return (
    <LocalStorageProvider>
      <CritterDataProvider>
        <BrowserRouter>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div className={classes.gutter}>
              <NavBar />
              <HeaderTabs />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CritterDataProvider>
    </LocalStorageProvider>
  );
}

export default App;
