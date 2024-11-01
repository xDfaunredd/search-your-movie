import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/selectors";
import MovieItem from "../MovieItem/MovieItem";
import { Movie } from "../../types/types";
import s from "./MoviesList.module.css";

const MoviesList = () => {
  const movies = useSelector(selectMovies);

  console.log(movies);

  return (
    <ul className={s.list}>
      {movies?.length > 0
        ? movies.map((item: Movie) => (
            <MovieItem key={item.imdbID} item={item} />
          ))
        : ""}
    </ul>
  );
};

export default MoviesList;
