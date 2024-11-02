import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors";
import { CurrentMovie } from "../../types/types";

import s from "./MovieCartList.module.css";
import MovieCartItem from "../MovieCartItem/MovieCartItem";

const MovieCartList = () => {
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);

  return (
    <ul className={s.list}>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item: CurrentMovie) => (
            <MovieCartItem item={item} />
          ))}
        </>
      ) : (
        <p>Here is no films yet!</p>
      )}
    </ul>
  );
};

export default MovieCartList;
