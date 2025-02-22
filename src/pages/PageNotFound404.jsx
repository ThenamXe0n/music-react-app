import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound404 = () => {
  const navigate = useNavigate();
  
  function goToHome() {
    let ask = window.confirm("do you want to navigate on home page?");
    if (ask) {
      navigate("/");
    }else{
      alert("if you say so !")
    }
  }
  return (
    <section className="h-screen w-screen bg-black flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-4xl text-white font-extrabold ">
        404 Page Not Found
      </h1>

      <button
        onClick={goToHome}
        className="bg-indigo-600 text-white p-4 rounded-lg"
      >
        🏠 go to home
      </button>
    </section>
  );
};

export default PageNotFound404;
