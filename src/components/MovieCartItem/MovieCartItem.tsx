import toast from "react-hot-toast";
import { deleteFromCart } from "../../redux/cartSlice/cartSlice";
import { CurrentMovie } from "../../types/types";
import s from "./MovieCartItem.module.css";
import { useAppDispatch } from "../../hooks/hooks";
type Props = {
  item: CurrentMovie;
};

const MovieCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className={s.item}>
      <img src={item.Poster} alt={item.Plot} />
      <div>
        <h2>{item.Title}</h2>
        <button
          onClick={() => {
            dispatch(deleteFromCart(item.imdbID));
            toast.success("Successfully deleted!");
          }}
          className={s.button}
        >
          Delete from favorites
        </button>
      </div>
    </li>
  );
};

export default MovieCartItem;
