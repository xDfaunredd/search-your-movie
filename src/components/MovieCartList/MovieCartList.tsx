import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors";
import { CurrentMovie } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteFromCart } from "../../redux/cartSlice/cartSlice";
import s from "./MovieCartList.module.css";
import toast from "react-hot-toast";

const MovieCartList = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useAppDispatch();

  console.log(cartItems);

  return (
    <ul className={s.list}>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item: CurrentMovie) => (
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
          ))}
        </>
      ) : (
        <p>Here is no films yet!</p>
      )}
    </ul>
  );
};

export default MovieCartList;
