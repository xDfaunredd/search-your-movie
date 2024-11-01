import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "54e34144";

export const moviesAPI = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const fetchMoviesByTitle = createAsyncThunk(
  "movies/fetchMoviesByTitle",
  async (title: string, thunkAPI) => {
    try {
      const { data } = await moviesAPI.get("", {
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
    if (!id) {
      return thunkAPI.rejectWithValue("ID фільму не визначено");
    }

    try {
      const { data } = await moviesAPI.get("", {
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
