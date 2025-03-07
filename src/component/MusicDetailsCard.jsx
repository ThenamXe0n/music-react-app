import axios from "axios";
import { useEffect, useState,useRef } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { FaRegCirclePause } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const MusicDetailsCard = () => {
  const audioRef = useRef()
  const { id } = useParams();
  const navigate = useNavigate();
  const [musicData, setMusicData] = useState([]);
  const [playing,setPlaying]=useState(false)
  async function getSongs() {
    try {
      const response = await axios.get("http://localhost:8080/songs");
      console.log("res", response.data);
      setMusicData(response.data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getSongs();
  }, []);

  let selectedMusic = musicData.find((item) => item.id == id);
  console.log("selected",selectedMusic)

  function handleBack() {
    navigate(-1);
  }

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
        <div className="px-6 w-full py-4">
          <div className="flex items-center">
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
            <div className="w-full mx-3">
              <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
                <div className="absolute left-0 top-0 h-full bg-yellow-500 w-1/2" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
            <span> 00:03 </span>
            <span> 3:35 </span>
          </div>
        </div>
        {!playing && <div onClick={()=>{audioRef.current.play();setPlaying(true)}} className="text-black flex items-center justify-center rounded-full bg-white size-16 ">
          <BiPlayCircle size={48} />
        </div>}
        {playing && <div onClick={()=>{audioRef.current.pause();setPlaying(false)}} className="text-black flex items-center justify-center rounded-full bg-white size-16 ">
          <FaRegCirclePause size={48} />
        </div>}

        {selectedMusic?.songSrc &&<audio ref={audioRef}  >
          <source src={selectedMusic.songSrc} type="audio/mp3" />
        </audio>}
      </div>
    </section>
  );
};

export default MusicDetailsCard;
