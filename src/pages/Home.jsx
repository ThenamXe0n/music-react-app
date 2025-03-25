import React, { useContext, useEffect, useState } from "react";

import MusicSection from "../component/sections/MusicSection";
import MovieSection from "../component/sections/MovieSection";
import SlidingSection from "../component/Slider";
import { GlobalStatesContext } from "../App";
import { useDispatch } from "react-redux";
import { addMusic, getMusicAsync } from "../redux/music/musicSlice";

const Home = () => {
  const { contentToShow, setContentToShow, isEdit, setIsEdit } =
    useContext(GlobalStatesContext);

  function handleTabChange(e) {
    // console.log(e.target.innerText);
    setContentToShow(e.target.innerText.toLowerCase());
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicAsync());
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen">
      <div className="flex items-center gap-x-4 border border-gray-500  py-2 px-1">
        <div
          onClick={handleTabChange}
          className={`${
            contentToShow === "musics"
              ? "border-green-600 bg-amber-700"
              : "border-indigo-600 bg-black"
          } rounded-xl bg-black border-2 px-8 py-2 text-white `}
        >
          Musics
        </div>
        <div
          onClick={handleTabChange}
          className={`${
            contentToShow === "movies"
              ? "border-green-600 bg-amber-700"
              : "border-indigo-600 bg-black"
          } rounded-xl  border-2 px-8 py-2 text-white `}
        >
          Movies
        </div>
        {!isEdit ? (
          <div
            onClick={() => setIsEdit(true)}
            className="
             border-green-600 bg-amber-700 rounded-xl  border-2 px-8 py-2 text-white "
          >
            Edit
          </div>
        ) : (
          <div
            onClick={() => setIsEdit(false)}
            className="
             border-green-600 bg-amber-700 rounded-xl  border-2 px-8 py-2 text-white "
          >
            Cancel Edit
          </div>
        )}
      </div>

      {contentToShow === "musics" && (
        <MusicSection isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
      {contentToShow === "movies" && <MovieSection />}
    </div>
  );
};

export default Home;
