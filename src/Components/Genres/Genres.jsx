import React from 'react';

import Link from 'next/link';

import { getMovieByPath } from '@/utils/movieClient';
import { getDictionary } from '@/utils/dictionaries';

import styles from './Genres.module.scss';

const Genres = async ({ locale }) => {
  const { genres } = await getMovieByPath('/genre/movie/list', [], locale);
  const i18n = await getDictionary(locale);
  return (
    <div>
      <h2>{i18n.genre.title}</h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`${locale}/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
