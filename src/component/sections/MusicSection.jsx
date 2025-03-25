import React, { useContext, useEffect, useState } from "react";
import MusicCard from "../MusicCard";
import { MusicData } from "../../data/cardData";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalStatesContext } from "../../App";
import { addMusic, loadAllMusic } from "../../redux/music/musicSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../uiComponents/Loader";

const MusicSection = ({ isEdit, setIsEdit }) => {
  const dispatch = useDispatch();
  const musicData = useSelector((state) => state.musicSlice.allMusic);
 

  const states = useContext(GlobalStatesContext);
  console.log("from music section", states);
  let { setTheme } = states;

  return (
    <div className="mt-5">
      <button
        onClick={() => setTheme("green")}
        className="p-4 bg-red-600 text-white"
      >
        change theme
      </button>
      <h1 className="text-4xl text-center  mb-6 font-bold text-black animate__animated animate__backInDown animate__delay-2s">
        Music card
      </h1>
      
        <section
          className="grid grid-cols-3 gap-5 justify-items-center"
          id="card-container"
        >
          {musicData.map((song, idx) => (
            <div key={idx}>
              <MusicCard
                musicData={musicData}
                // setMusicData={setMusicData}
                id={song.id}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                songName={song.songName}
                singer={song.singer}
                poster={song.poster}
                movieName={song.movieName}
              />
            </div>
          ))}
        </section>
     
    </div>
  );
};

export default MusicSection;
