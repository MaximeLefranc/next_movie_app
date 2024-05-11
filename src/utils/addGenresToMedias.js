import { getMovieByPath } from './movieClient';

export const addGenresToMedias = async (
  medias,
  locale,
  moviesNumber = undefined
) => {
  const { genres } = await getMovieByPath('/genre/movie/list', [], locale);

  return medias.slice(0, moviesNumber).map((movie) => {
    const genresToAdd = [];

    movie.genre_ids.map((genreID) => {
      genresToAdd.push(genres.find((genre) => genre.id === genreID));
    });

    return {
      ...movie,
      genres: genresToAdd.slice(0, 2),
    };
  });
};
