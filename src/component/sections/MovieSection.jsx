import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { movieData } from "../../data/Data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addselectedMovie, getMovieAsync } from "../../redux/movie/movieSlice";
import { useNavigate } from "react-router-dom";

const MovieSection = () => {
  const [start,setStart]=useState(()=>sessionStorage.getItem("currentpage"))
  let itemPerPage = 3
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieSlice.allMovies);
  console.log("redux movie", movies);

  useEffect(() => {
    dispatch(getMovieAsync());
  }, [dispatch]);

  return (
    <div className="mt-5 pb-5">
      <h1 className="text-4xl text-center  mb-6 font-bold text-black animate__animated animate__backInDown animate__delay-2s">
        Movies card
      </h1>
      <section
        className="grid grid-cols-3 gap-5 justify-items-center mx-auto"
        id="card-container"
      >
        {movies.slice(start,start+itemPerPage).map((movie, idx) => (
          <div
            onClick={() => {
              dispatch(addselectedMovie(movie.id));
              navigate(`/movie/${movie.id}`);
            }}
            key={idx}
          >
            <MovieCard
              moviename={movie.moviename}
              genre={movie.genre}
              time={movie.time}
              img={movie.img}
            />
          </div>
        ))}
      </section>
        {/* ----------------pagination------------ */}
        <div className="flex items-center justify-center gap-x-20 w-11/12 mx-auto">
          <button disabled={start <= 0} onClick={()=>{setStart((prev)=>prev-itemPerPage);sessionStorage.setItem("currentpage",start+itemPerPage)}} className="w-fit px-3 py-1 rounded-lg bg-white text-blue-600 font-medium " >prev</button>
          <button disabled={(start+itemPerPage) >= movies.length} onClick={()=>{setStart((prev)=>prev+itemPerPage);sessionStorage.setItem("currentpage",start+itemPerPage)}} className="w-fit px-3 py-1 rounded-lg bg-white text-blue-600 font-medium " >next</button>
        </div>
    </div>
  );
};

export default MovieSection;
