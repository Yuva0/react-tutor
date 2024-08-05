import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = () => {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
};

export default Layout;
