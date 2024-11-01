import { Link } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={s.container}>
      <div className="container">
        <h1 className={s.title}>Welcome to your personal Movie searcher 🐝</h1>

        <Link to="movies" className={s.link}>
          Go to movies
        </Link>
      </div>
    </section>
  );
};

export default Home;
