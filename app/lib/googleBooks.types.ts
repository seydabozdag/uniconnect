/**
 * Google Books API - minimal typed response
 * https://developers.google.com/books/docs/v1/reference/volumes
 */

export type GoogleBooksApiItem = {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    infoLink?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
  };
};

export type GoogleBooksApiResponse = {
  items?: GoogleBooksApiItem[];
};
