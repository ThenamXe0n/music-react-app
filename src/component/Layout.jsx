import React from "react";
import NavBar from "./uiComponents/NavBar";
import { Navigate,Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Footer = () => {
  return (
    <footer className="w-screen h-40 flex items-center justify-center bg-black text-white font-bold">
      Footer
    </footer>
  );
};

const Layout = () => {
  // console.log(childern)
  return (
    <div>
      <NavBar/>
      <main className="w-screen flex min-h-[80vh]">
      
        <div className="w-full"><Outlet/></div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
