import React from 'react';

// Utils
import { getMovieByPath } from '@/utils/movieClient';

// Components
import MediaCard from '@/Components/MediaCard/MediaCard';

// Style
import styles from './Popular.module.scss';

const Popular = async () => {
  const { results } = await getMovieByPath('/movie/popular');
  const popularMovies = results.slice(0, 6);
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
