import React from "react";
import { navBarData } from "../../data/Data";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-black flex justify-between items-center text-white w-screen py-3 px-2 ">
      <div className="font-bold text-2xl">LOGO</div>
      <nav className="flex items-center gap-7">
        {navBarData.map((item, idx) => (
          <Link className="flex items-center gap-2 hover:text-indigo-700 duration-300 cursor-pointer" to={item.href}>
          {item.icon}
            <h6>{item.title}</h6>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-7">
        <button className="p-2 rounded-md border-2">login</button>
        <button className="p-2 rounded-md border-2">sign up</button>
      </div>
    </header>
  );
};

export default NavBar;
