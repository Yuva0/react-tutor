import React from "react";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./helpers/helpers";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";
import Homepage from "./pages/Homepage/Homepage";
import Topic from "./pages/Topic/Topic";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import { DataProvider } from "./components/DataProvider/DataProvider";
import styled from "styled-components";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider
        accent={{ primary: colors.accent.primary }}
        appearance={colors.appearance as "light" | "dark"}
      >
        <DataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/:idCategory/:idTopic" element={<Topic />} />
              <Route path="/404-not-found" element={<Error />} />
              <Route path="*" element={<Navigate to="/404-not-found" />} />
            </Route>
          </Routes>
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
