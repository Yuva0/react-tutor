import React from "react";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { ScrollToTop } from "./helpers/helpers";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";
import Error from "./pages/Error/Error";
import Topic from "./pages/Topic/Topic";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider
        accent={{ primary: colors.accent.primary }}
        appearance={colors.appearance as "light" | "dark"}
      >
        <Header />
        <StyledMainContainer>
          <NavigationBar />
          <Routes>
            <Route index element={<Navigate to="/guides/understanding-react" />} />
            <Route path="/:idCategory/:idTopic" element={<Topic />} />
            <Route path="/404-not-found" element={<Error />} />
            <Route path="*" element={<Navigate to="/404-not-found" />} />
          </Routes>
        </StyledMainContainer>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
