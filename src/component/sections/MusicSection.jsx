import React, { useEffect, useState } from "react";
import MusicCard from "../MusicCard";
import { MusicData } from "../../data/cardData";
import { Link } from "react-router-dom";
import axios from "axios";

const MusicSection = () => {
const [musicData,setMusicData] = useState([])
async function getSongs() {
  try {
    const response = await axios.get("http://localhost:8080/songs");
    setMusicData(response.data);
  } catch (error) {
    alert(error.message);
  }
}

useEffect(() => {
  getSongs();
}, []);

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
            <Link to={`/musicDetails/${song.id}`} ><MusicCard
              songName={song.songName}
              singer={song.singer}
              poster={song.poster}
              movieName={song.movieName}
            /></Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MusicSection;
