import axios from "axios";
import { Notify } from "notiflix";
import React from "react";
import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { updateData } from "../api/apiFetch";

const UpdateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleUpdateSong=(data)=>{
    console.log(data);
    updateData("44a6",{poster:data.poster,songName:data.songName})

  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateSong)}
      className="min-w-[60vw] h-fit p-11 border-2"
    >
      <div className="flex items-center gap-4 text-white font-bold">
        <BsPlusCircle size={24} />  update  Song
      </div>

      <div className="grid grid-cols-2 gap-5 mt-4 ">
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            Song name
          </label>
          <input
            {...register("songName", {
              required: "*must fill song name to add song",
            })}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter song name"
          />
          {errors.songName && (
            <p className="text-red-500">{errors.songName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            Singer Name
          </label>
          <input
            {...register("singer")}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter singer or artist name"
          />
          {errors.singer && (
            <p className="text-red-500">{errors.singer?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            poster URL
          </label>
          <input
            {...register("poster")}
            className="bg-slate-500 rounded-md p-3"
            type="url"
            placeholder="enter song poster url"
          />
          <p>{errors.poster?.message}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-white capitalize font-extrabold">
            movie/Album name
          </label>
          <input
            {...register("movieName")}
            className="bg-slate-500 rounded-md p-3"
            type="text"
            placeholder="enter song album or movie name"
          />
          <p className="text-red-500">{errors.movieName?.message}</p>
        </div>
      </div>
      <button className="bg-black  text-indigo-700 font-bold w-full p-2 my-4 ">
        Add
      </button>
    </form>
  );
};

export default UpdateForm;
