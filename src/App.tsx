import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json"

function App() {
  return (
    <ThemeProvider accent={{primary: colors.accent.primary}} appearance={colors.appearance as "light" | "dark"}>
      <Header />
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
