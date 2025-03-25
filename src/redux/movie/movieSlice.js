import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addMovieApi, getMovieApi } from "./movieApi";

const initialState = {
  allMovies: [],
  isLoading: true,
};

export const getMovieAsync = createAsyncThunk("movie/get movie", async () => {
  const response = await getMovieApi();
  return response;
});

export const addMovieAsync = createAsyncThunk(
  "movie/add movie",
  async (data) => {
    const response = await addMovieApi(data);
    return response;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMovies = action.payload.reverse();
      })
      .addCase(addMovieAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMovies.unshift(action.payload);
      });
  },
});

export default movieSlice.reducer;
