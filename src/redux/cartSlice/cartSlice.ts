import { CurrentMovie } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateCard = {
  cartItems: CurrentMovie[];
};

const initialState: InitialStateCard = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CurrentMovie>) => {
      const isMovieInCart = state.cartItems.some(
        (item) => item.imdbID === action.payload.imdbID
      );

      if (!isMovieInCart) {
        state.cartItems = [...state.cartItems, action.payload];
      }

      console.log(state.cartItems);
    },
    deleteFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item: CurrentMovie) => action.payload === item.imdbID
      );

      state.cartItems.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
