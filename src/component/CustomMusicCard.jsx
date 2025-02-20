import React from "react";
import { MusicData } from "../data/cardData";

const CustomMusicCard = () => {
  return (
    <div className="m-5">
      <div id="card-container" className="h-48 p-5 rounded-md w-80 bg-[#18181b]">
        <div id="song-infoContainer" className="flex items-center gap-x-2">
          <div className=" size-12 overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src={MusicData[0].poster}
              alt={"song"}
            />
          </div>
          <div className="w-50%">
            <p className="font-bold text-white">aangaron</p>
            <p className="text-gray-400">sunidhi chauhan</p>
            <p className="text-pink-600">Pushpa</p>
          </div>
          <div className="flex w-[15%] self-right items-center justify-center">
            <svg
              id="heart"
              className="h-6 w-6 text-red-500"
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMusicCard;
