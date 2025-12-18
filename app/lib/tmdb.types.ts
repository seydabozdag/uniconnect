export type TmdbMovieApiItem = {
  id: number;
  title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: string | null;
  vote_average?: number;
};

export type TmdbMovieApiResponse = {
  results?: TmdbMovieApiItem[];
};
