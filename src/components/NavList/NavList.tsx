import { NavLink } from "react-router-dom";
import s from "./NavList.module.css";
import clsx from "clsx";

type IsActive = {
  isActive: boolean;
};

const buildLinkClass = ({ isActive }: IsActive) => {
  return clsx(s.link, isActive && s.active);
};

const NavList = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="movies" className={buildLinkClass}>
        Movies
      </NavLink>
      <NavLink to="cart-favorites" className={buildLinkClass}>
        Favorites Movies
      </NavLink>
    </nav>
  );
};

export default NavList;
