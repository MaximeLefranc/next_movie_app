import React from 'react';

// Utils
import { getMovieByPath } from '@/utils/movieClient';
import { addGenresToMedias } from '@/utils/addGenresToMedias';

// Components
import MediaCard from '@/Components/MediaCard/MediaCard';

// Style
import styles from './Popular.module.scss';

const Popular = async ({ locale }) => {
  const { results } = await getMovieByPath('/movie/popular', [], locale);

  const popularMovies = await addGenresToMedias(results, locale, 6);

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
