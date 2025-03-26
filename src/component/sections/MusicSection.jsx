import React, { useContext, useEffect, useState } from "react";
import MusicCard from "../MusicCard";
import { MusicData } from "../../data/cardData";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalStatesContext } from "../../App";
import { addMusic, loadAllMusic } from "../../redux/music/musicSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../uiComponents/Loader";
import UpdateForm from "../UpdateForm";
import { BiCross } from "react-icons/bi";
import { FaCross } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

const MusicSection = ({ isEdit, setIsEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong,setSelectedSong] = useState(null)
  const dispatch = useDispatch();
  const musicData = useSelector((state) => state.musicSlice.allMusic);

  const states = useContext(GlobalStatesContext);
  console.log("from music section", states);
  let { setTheme } = states;

  return (
    <div className="mt-5">
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
            openUpdateForm={()=>{setSelectedSong(song);setIsModalOpen(true)}}
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
      {isModalOpen && (
        <section
          id="modal-outer"
          onClick={(e) => {
            if(e.target.id === "modal-outer"){ setIsModalOpen(false);setSelectedSong(null);};
          }}
          className="h-screen w-screen flex items-center justify-center bg-[#0000006c] fixed top-0"
        >
          <div className="relative">
            <GiCrossMark onClick={()=>{setIsModalOpen(false);setSelectedSong(null)}} size={24} className="hover:scale-105 duration-200 absolute top-5 cursor-pointer right-3" color="red" />

            <UpdateForm songData={selectedSong} />
          </div>
        </section>
      )}
    </div>
  );
};

export default MusicSection;
