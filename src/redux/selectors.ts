import { RootState } from "./store";

export const selectMovies = (state: RootState) => state.movies.items;
export const selectCurrentMovie = (state: RootState) =>
  state.movies.currentFilm;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
