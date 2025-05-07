import axios from "axios";
import {  useState, useRef, useCallback } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { FaRegCirclePause } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const SongTrackProgress = ({songTiming,currentTime,duration,handleSongTrackTime})=>{

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

  return (
    <div className="px-6 w-full py-4">
    <div className="flex items-center gap-5">
      <svg
        className="h-5 w-5 text-gray-500 dark:text-gray-400"
        fill="none"
        height={24}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      </svg>
      <input type="range" min={0} max={duration} value={songTiming ? songTiming : 0} className="w-full h-1  bg-green-300 rounded-lg appearance-none cursor-pointer accent--500" onChange={(e)=>handleSongTrackTime(e.target.value)}/>
      {/* <div className="w-full mx-3">
        <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
          <div className={`absolute left-0 top-0 h-full bg-yellow-500 `} style={{width:`${songTiming}%`}} />
        </div>
      </div> */}
      <p className="text-sm  text-gray-500 dark:text-gray-400">{currentTime}%</p>
    </div>
    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
      <span> {formatTime(songTiming)} </span>
      <span> {formatTime(duration)} </span>
    </div>
  </div>
  )
}

const MusicDetailsCard = () => {
  const audioRef = useRef();
  // const { id } = useParams();
  const navigate = useNavigate();
  const selectedMusic = useSelector((state) => state.musicSlice.selectedMusic);
  const [playing, setPlaying] = useState(false);
  const [songTiming,setSongTiming] = useState(0)
  console.log(songTiming)
  const trackStatusRef = useRef(null);
  const handleSongTrackTime = (time) => {
    audioRef.current.currentTime = time
  }

  function handleBack() {
    navigate(-1);
  }




const durationTracker = useCallback(() => {
  if (!playing) {
    trackStatusRef.current = setInterval(() => {
      if(audioRef.current.currentTime===audioRef.current.duration){
        setPlaying(false)
        clearInterval(trackStatusRef.current)
      }
      setSongTiming(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100));
    }, 1000);
  } else {
    clearInterval(trackStatusRef.current);
  }
 
  
}, [playing]);

  // console.log("url",selectedMusic?.songSrc)

  return (
    <section className="bg-gray-800 h-screen w-screen flex items-center justify-center">
      <button
        onClick={handleBack}
        className="bg-white size-9 rounded-md fixed top-5 left-8"
      >
        ↩
      </button>
      <div
        id="music-card-continer "
        className="bg-black justify-evenly flex flex-col items-center h-[80vh] w-[50vw]"
      >
        <div className="border border-red-500 h-80 w-80">
          <img
            className="h-full w-full object-cover"
            src={selectedMusic?.poster}
            alt={selectedMusic?.songName}
          />
        </div>
        <h1 className="text-2xl font-bold text-pink-700 capitalize">
          {selectedMusic?.songName}
        </h1>
        <h4 className="text-xl font-medium text-gray-700 capitalize">
          {selectedMusic?.singer}
        </h4>
        <p>
          <strong className="text-white">Movie : </strong>{" "}
          <span className="text-indigo-600 font-bold">
            {selectedMusic?.movieName}
          </span>
        </p>

        {/* //-------------controll section------------- */}
        <SongTrackProgress handleSongTrackTime={handleSongTrackTime} duration={Math.floor(audioRef.current?.duration)} currentTime={Math.floor(songTiming)} songTiming={Math.floor(audioRef.current?.currentTime)}/>
        {!playing && (
          <div
            onClick={() => {
              audioRef.current.play();
              setPlaying(true);
              durationTracker();
            }}
            className="text-black flex items-center justify-center rounded-full bg-white size-16 "
          >
            <BiPlayCircle size={48} />
          </div>
        )}
        {playing && (
          <div
            onClick={() => {
              audioRef.current.pause();
              setPlaying(false);
              durationTracker();
            }}
            className="text-black flex items-center justify-center rounded-full bg-white size-16 "
          >
            <FaRegCirclePause size={48} />
          </div>
        )}

        {selectedMusic?.songSrc && (
          <audio ref={audioRef}>
            <source src={selectedMusic.songSrc} type="audio/mp3" />
          </audio>
        )}
      </div>
    </section>
  );
};

export default MusicDetailsCard;
