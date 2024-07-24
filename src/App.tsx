import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { SideBar, SideBarItem, ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";
import Homepage from "./pages/Homepage/Homepage";
import Topic from "./pages/Topic/Topic";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        accent={{ primary: colors.accent.primary }}
        appearance={colors.appearance as "light" | "dark"}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/:idCategory/:idTopic" element={<Topic />} />
            <Route path="/404-not-found" element={<Error />} />
            <Route path="*" element={<Navigate to="/404-not-found" />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
