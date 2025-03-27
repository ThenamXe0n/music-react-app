import React from "react";
import { navBarData } from "../../data/Data";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    let ask = window.confirm("are you sure to logout?")
    if(ask){
      sessionStorage.removeItem("isLoggedIn")
      navigate("/login")
    }
  }
  return (
    <header className="bg-black flex justify-between items-center text-white w-screen py-3 px-10 ">
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
        <button onClick={handleLogout} className="p-2 rounded-md border-2 border-red-600">logout</button>
      </div>
    </header>
  );
};

export default NavBar;
