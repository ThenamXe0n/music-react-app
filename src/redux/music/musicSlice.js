import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteMusicApi, getSongsApi } from "./musicApi";
import Notiflix from "notiflix";

const initialState = {
  allMusic: [],
  selectedMusic: null,
  isLoading: true,
};

export const getMusicAsync = createAsyncThunk("music/fetch music", async () => {
  const response = await getSongsApi();
  return response;
});

export const deleteMusicAsync = createAsyncThunk(
  "music/delete music",
  async (id) => {
    const response = await deleteMusicApi(id);
    return response;
  }
);

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addMusic: (state, action) => {
      console.log(action.payload);
      state.allMusic.push(action.payload);
      state.isLoading = true;
    },
    addselectedMusic: (state, action) => {
      let selected = state.allMusic.find(
        (music) => music.id === action.payload
      );
      if (!selected) {
        Notiflix.Notify.failure("no such song found");
        return;
      }
      state.selectedMusic = selected;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMusicAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMusicAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMusic = action.payload;
      })
      .addCase(getMusicAsync.rejected, (state) => {
        state.isLoading = false;
        Notiflix.Notify.failure("something went wrong");
      })
      .addCase(deleteMusicAsync.fulfilled, (state, action) => {
        console.log("action", action.payload);
        let newData = state.allMusic.filter(
          (music) => music?.id !== action.payload?.id
        );
        state.allMusic = newData;
      });
  },
});

export const { addMusic, addselectedMusic } = musicSlice.actions;

export default musicSlice.reducer;
