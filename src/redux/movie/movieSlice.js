import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addMovieApi, getMovieApi } from "./movieApi";

const initialState = {
  allMovies: [],
  selectedMovie:{},
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
  reducers: {
     addselectedMovie: (state, action) => {
          let selected = state.allMovies.find(
            (movie) => movie.id === action.payload
          );
          if (!selected) {
            Notiflix.Notify.failure("no such movie found");
            return;
          }
          state.selectedMovie = selected;
        },
  },
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

export const {addselectedMovie} = movieSlice.actions

export default movieSlice.reducer;
