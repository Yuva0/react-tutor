import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";

function App() {
  return (
    <ThemeProvider accent={{primary: "pink"}} appearance="light">
      <Header />
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
