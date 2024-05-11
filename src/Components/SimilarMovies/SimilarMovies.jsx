import React from 'react';

import { getMovieByPath } from '@/utils/movieClient';
import styles from './SimilarMovies.module.scss';
import MediaCard from '../MediaCard/MediaCard';
import { addGenresToMedias } from '@/utils/addGenresToMedias';

const SimilarMovies = async ({ movieId, locale }) => {
  const { results } = await getMovieByPath(
    `/movie/${movieId}/similar`,
    [],
    locale
  );

  const movies = await addGenresToMedias(results, locale, 6);

  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
