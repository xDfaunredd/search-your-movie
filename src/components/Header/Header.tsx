import NavList from "../NavList/NavList";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <NavList />
      </div>
    </header>
  );
};

export default Header;
