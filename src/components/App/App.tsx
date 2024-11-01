import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import MovieGallery from "../../pages/MovieGallery/MovieGallery";
import CartFavorite from "../../pages/CartFavorite/CartFavorite";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieGallery />} />
          <Route path="/movies/details/:movieId" element={<MovieDetails />} />
          <Route path="/cart-favorites" element={<CartFavorite />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
