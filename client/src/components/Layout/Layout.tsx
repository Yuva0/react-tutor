import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Header />
      <NavigationBar />
    </>
  );
};

export default Layout;
