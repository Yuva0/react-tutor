import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;
