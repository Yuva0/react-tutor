import React from "react";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./helpers/helpers";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";
import Homepage from "./pages/Homepage/Homepage";
import Error from "./pages/Error/Error";
import Topic from "./pages/Topic/Topic";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider
        accent={{ primary: colors.accent.primary }}
        appearance={colors.appearance as "light" | "dark"}
      >
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/:idCategory/:idTopic" element={<Topic />} />
          <Route path="/404-not-found" element={<Error />} />
          <Route path="*" element={<Navigate to="/404-not-found" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
