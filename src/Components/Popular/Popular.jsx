import React from 'react';

// Utils
import { getMovieByPath } from '@/utils/movieClient';

// Components
import MediaCard from '@/Components/MediaCard/MediaCard';

// Style
import styles from './Popular.module.scss';

const Popular = async () => {
  const { results } = await getMovieByPath('/movie/popular');
  const { genres } = await getMovieByPath('/genre/movie/list');

  const popularMovies = results.slice(0, 6).map((movie) => {
    const genresToAdd = [];

    movie.genre_ids.map((genreID) => {
      genresToAdd.push(genres.find((genre) => genre.id === genreID));
    });

    return {
      ...movie,
      genres: genresToAdd.slice(0, 2),
    };
  });

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
