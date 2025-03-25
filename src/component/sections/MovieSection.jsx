import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { movieData } from "../../data/Data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovieAsync } from "../../redux/movie/movieSlice";

const MovieSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieSlice.allMovies);
  console.log("redux movie", movies);

  useEffect(() => {
    dispatch(getMovieAsync());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center  mb-6 font-bold text-black animate__animated animate__backInDown animate__delay-2s">
        Movies card
      </h1>
      <section
        className="grid grid-cols-3 gap-5 justify-items-center"
        id="card-container"
      >
        {movies.map((movie, idx) => (
          <div key={idx}>
            <MovieCard
              moviename={movie.moviename}
              genre={movie.genre}
              time={movie.time}
              img={movie.img}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovieSection;
