import React from "react";
import MusicCard from "../MusicCard";
import { MusicData } from "../../data/cardData";
import { Link } from "react-router-dom";

const MusicSection = () => {
  return (
    <div>
      <h1 className="text-4xl text-center  mb-6 font-bold text-black animate__animated animate__backInDown animate__delay-2s">
        Music card
      </h1>
      <section
        className="grid grid-cols-3 gap-5 justify-items-center"
        id="card-container"
      >
        {MusicData.map((song, idx) => (
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
