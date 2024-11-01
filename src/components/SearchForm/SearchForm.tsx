import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./SearchForm.module.css";

import { fetchMoviesByTitle } from "../../redux/moviesSlice/moviesOps";
import { useAppDispatch } from "../../hooks/hooks";

type InitialValues = {
  searchedMovie: string;
};
const initialValues = {
  searchedMovie: "",
};

const SearchForm = () => {
  const dispatch = useAppDispatch();

  function handleSubmit(
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) {
    console.log(values);
    dispatch(fetchMoviesByTitle(values.searchedMovie));

    actions.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label>
          <Field name="searchedMovie" type="text" className={s.field} />
        </label>
        <button type="submit" className={s.button}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
