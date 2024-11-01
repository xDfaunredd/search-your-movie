export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type Rate = {
  Source: string;
  Value: string;
};

export type CurrentMovie = {
  Poster: string;
  Title: string;
  Released: string;
  Actors: string;
  Genre: string;
  Plot: string;
  Ratings: Rate[];
  imdbID: string;
};
