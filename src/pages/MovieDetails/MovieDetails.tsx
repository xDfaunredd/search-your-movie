import { useEffect, useRef } from "react";
import { Link, Location, useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchMovieByID } from "../../redux/moviesSlice/moviesOps";
import { useSelector } from "react-redux";
import { selectCartItems, selectCurrentMovie } from "../../redux/selectors";
import { Rate } from "../../types/types";
import { addToCart } from "../../redux/cartSlice/cartSlice";

import s from "./MovieDetails.module.css";
import toast from "react-hot-toast";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();
  const location: Location = useLocation();
  useEffect(() => {
    dispatch(fetchMovieByID(movieId));
  }, [dispatch, movieId]);

  const currentMovie = useSelector(selectCurrentMovie);
  const movies = useSelector(selectCartItems);

  const handleClick = () => {
    dispatch(addToCart(currentMovie));

    if (movies.some((item) => item.imdbID === movieId)) {
      toast("Already in cart!");
      return;
    }

    toast.success("Successfully added!");
  };

  const goTo = useRef(location.state);

  goTo.current = location.state ?? "/movies";

  return (
    <section className="section">
      <div className="container">
        <Link to={goTo.current} className={s.link}>
          BACK TO MOVIES
        </Link>
        <div className={s.movieCart}>
          <img src={currentMovie.Poster} alt={currentMovie.Plot} />
          <div className={s.content}>
            <h2>{currentMovie.Title}</h2>
            <p>{currentMovie.Plot}</p>
            <ul className={s.categories}>
              <li>Genre: {currentMovie.Genre}</li>
              <li>Released: {currentMovie.Released}</li>
              <li>Actors: {currentMovie.Actors}</li>
            </ul>
            <h3>Rating:</h3>
            <ul>
              {currentMovie.Ratings.length > 0 ? (
                currentMovie.Ratings.map((item: Rate) => (
                  <li className={s.ratingStats}>
                    <p>{item.Source}</p>
                    <p>{item.Value}</p>
                  </li>
                ))
              ) : (
                <p>There is no rating yet! </p>
              )}
            </ul>
            <button onClick={handleClick} className={s.button}>
              Add to favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
