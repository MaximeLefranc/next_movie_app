import React from 'react';

import { getMovieByPath } from '@/utils/movieClient';
import styles from './SimilarMovies.module.scss';
import MediaCard from '../MediaCard/MediaCard';

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);
  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
