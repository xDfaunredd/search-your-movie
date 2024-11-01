import { Link, Location, useLocation } from "react-router-dom";
import { Movie } from "../../types/types";
import s from "./MovieItem.module.css";

type Props = {
  item: Movie;
};

const MovieItem = ({ item }: Props) => {
  const location: Location = useLocation();

  return (
    <li className={s.item}>
      <Link to={`details/${item.imdbID}`} state={location} className={s.link}>
        <img src={item.Poster} alt="" className={s.image} />
        <div>
          <h2 className={s.title}>{item.Title}</h2>
          <p className={s.text}>Year: {item.Year}</p>
        </div>
      </Link>
    </li>
  );
};

export default MovieItem;
