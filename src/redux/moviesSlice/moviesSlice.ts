import { createSlice } from "@reduxjs/toolkit";

import { CurrentMovie, Movie } from "../../types/types";
import { fetchMovieByID, fetchMoviesByTitle } from "./moviesOps";

export type InitialState = {
  items: Array<Movie>;
  currentFilm: CurrentMovie;
};

const initialState: InitialState = {
  items: [],
  currentFilm: {
    Poster: "",
    Title: "",
    Released: "",
    Actors: "",
    Genre: "",
    Plot: "",
    Ratings: [],
    imdbID: "",
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByTitle.fulfilled, (state, actions) => {
        console.log(actions.payload.Search);
        state.items = actions.payload.Search;
      })
      .addCase(fetchMovieByID.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
      });
  },
});

export const movieReducer = movieSlice.reducer;
