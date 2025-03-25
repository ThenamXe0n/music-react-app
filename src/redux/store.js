import { configureStore } from "@reduxjs/toolkit";
import MusicReducer from "./music/musicSlice";
import MovieReducer from "./movie/movieSlice";

export const mystore = configureStore({
  reducer: {
    musicSlice: MusicReducer,
    movieSlice: MovieReducer,
  },
});
