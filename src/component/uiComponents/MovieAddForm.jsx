import axios from "axios";
import { Notify } from "notiflix";
import React from "react";
import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addMovieAsync } from "../../redux/movie/movieSlice";

const MovieAddForm = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function addMovieToData(data) {
    console.log("movieData:", data);
    dispatch(addMovieAsync(data))
  }

  return (
    <form
      onSubmit={handleSubmit(addMovieToData)}
      className="min-w-[60vw] h-fit p-11 border-2"
    >
      <div className="flex items-center gap-4 text-white font-bold">
        <BsPlusCircle size={24} /> Add New Movie
      </div>

      <div className="grid grid-cols-2 gap-5 mt-4 ">
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            Movie name
          </label>
          <input
            {...register("moviename", {
              required: "*must fill movie name to add song",
            })}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter movie name"
          />
          {errors.moviename && (
            <p className="text-red-500">{errors.moviename.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            Duration
          </label>
          <input
            {...register("time")}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter movie duration"
          />
          {errors.time && (
            <p className="text-red-500">{errors.time?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            poster URL
          </label>
          <input
            {...register("img")}
            className="bg-slate-500 rounded-md p-3"
            type="url"
            placeholder="enter movie poster url"
          />
          <p>{errors.img?.message}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            movie genre
          </label>
          <input
            {...register("genre")}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter movie genre"
          />
          <p className="text-red-500">{errors.genre?.message}</p>
        </div>
      </div>
      <button className="bg-black  text-indigo-700 font-bold w-full p-2 my-4 ">
        Add
      </button>
    </form>
  );
};

export default MovieAddForm;
