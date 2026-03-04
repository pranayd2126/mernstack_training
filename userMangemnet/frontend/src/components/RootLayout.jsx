import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="mx-20 min-h-screen text-center text-2xl font-bold">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
