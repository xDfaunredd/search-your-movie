import MoviesList from "../../components/MoviesList/MoviesList";
import SearchForm from "../../components/SearchForm/SearchForm";

const MovieGallery = () => {
  return (
    <section className="section">
      <div className="container">
        <SearchForm />
        <MoviesList />
      </div>
    </section>
  );
};

export default MovieGallery;
