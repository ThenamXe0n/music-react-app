import React from "react";
import NavBar from "./NavBar";
import { Navigate,Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen h-40 flex items-center justify-center bg-black text-white font-bold">
      Footer
    </footer>
  );
};

const Layout = ({ children }) => {
  // console.log(childern)
  return (
    <div>
      <NavBar />
      <main className="w-screen flex min-h-[80vh]">
      
        <div className="w-[70%]">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
