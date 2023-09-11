import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const {movieResults, movieNames} = action.payload
      state.movieResults = movieResults;
      state.movieNames = movieNames
    },
  },
});

export const { toggleGptSearch, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
