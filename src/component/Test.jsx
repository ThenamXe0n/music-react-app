import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [moviename, setMoviename] = useState("");
  const [img, setImg] = useState("");
  const [genre, setGenre] = useState("");
  const time = " 2h 23m";
  console.log("render");

  async function handleSubmit(e) {
    e.preventDefault();
    let data = { moviename: moviename, img: img, genre: genre, time: time };
    console.log(data);
    try {
      let response = await axios.post("http://localhost:8080/movies", data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <section className="m-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6"
      >
        <input
          id="moviename"
          onChange={(e) => setMoviename(e.target.value)}
          className="p-2 border-2 rounded-md text-xl"
          type=" text"
          placeholder="enter movie name"
        />
        <input
          id="img"
          onChange={(e) => setImg(e.target.value)}
          className="p-2 border-2 rounded-md text-xl"
          type=" text"
          placeholder="enter movie img"
        />
        <input
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border-2 rounded-md text-xl"
          type=" text"
          placeholder="enter movie genre"
        />
        <button className="p-2 bg-black rounded-md text-white ">
          post movie
        </button>
      </form>
    </section>
  );
};

export default Test;
