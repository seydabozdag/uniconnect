export type BookItem = {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string | null;
  publishedDate: string | null;
  infoLink: string | null;
};

export type MovieItem = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string | null;
  poster: string | null;
  vote: number | null;
};

export type BooksResponse = {
  items: BookItem[];
  error?: string;
};

export type MoviesResponse = {
  items: MovieItem[];
  error?: string;
};
