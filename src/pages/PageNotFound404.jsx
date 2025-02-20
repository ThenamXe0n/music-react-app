import React from "react";
import { Link } from "react-router-dom";

const PageNotFound404 = () => {
  return (
    <section className="h-screen w-screen bg-black flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-4xl text-white font-extrabold ">
        404 Page Not Found
      </h1>
      <Link to="/">
        <button className="bg-indigo-600 text-white p-4 rounded-lg">
          🏠 go to home
        </button>
      </Link>
    </section>
  );
};

export default PageNotFound404;
