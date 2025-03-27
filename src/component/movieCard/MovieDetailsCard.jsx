import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieDetailsCard = ({ movieData }) => {
  const selectedmovie = useSelector((state) => state.movieSlice.selectedMovie);
  const navigate = useNavigate();
  console.log("selectedMovie", selectedmovie);
  return (
    <section className="h-full w-full py-4 flex flex-col bg-black">
      {selectedmovie.videoUrl ? (
        <>
          <button
            onClick={() => navigate(-1)}
            className="w-fit p-2 bg-white text-blue-600 rounded-xl translate-x-12"
          >
            {" "}
            ↩{" "}
          </button>
          <iframe
            className="h-[80%] w-[80%] mx-auto rounded-xl"
            src={selectedmovie?.videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </>
      ) : (
        <div className="h-[80%] flex flex-col gap-y-5 items-center  justify-center w-[80%] mx-auto rounded-xl">
          <h2 className="text-white text-3xl flex items-center gap-x-3 justify-center">
            <BiInfoCircle size={24} /> <p>Movie Video is not available !</p>
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="w-fit p-2 bg-white text-blue-600 rounded-xl "
          >
            {" "}
            Go back{" "}
          </button>
        </div>
      )}
      <div className=" w-[80%] mx-auto text-white">
        <h1 className="text-4xl capitalize font-bold ">
          {selectedmovie.moviename}
        </h1>
        <p className="text-2xl">
          {selectedmovie.genre} | Duration : {selectedmovie.time}
        </p>
      </div>
    </section>
  );
};

export default MovieDetailsCard;
