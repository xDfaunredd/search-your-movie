import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrentMovie, Movie } from "../../types/types";

const API_KEY = "54e34144";

type DataByTitle = {
  data: {
    Search: Array<Movie> | undefined;
  };
};

type DataByID = {
  data: CurrentMovie;
};

export const moviesAPI = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const fetchMoviesByTitle = createAsyncThunk(
  "movies/fetchMoviesByTitle",
  async (title: string, thunkAPI) => {
    try {
      const { data }: DataByTitle = await moviesAPI.get("", {
        params: {
          s: title,
          apikey: API_KEY,
        },
      });
      console.log(data);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const fetchMovieByID = createAsyncThunk(
  "movies/fetchMovieByID",
  async (id: string | undefined, thunkAPI) => {
    try {
      const { data }: DataByID = await moviesAPI.get("", {
        params: {
          i: id,
          apikey: API_KEY,
        },
      });
      console.log(data);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
