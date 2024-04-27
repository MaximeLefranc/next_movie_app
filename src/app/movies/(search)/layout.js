import React from 'react';
import SearchSideBar from '@/Components/SearchSideBar/SearchSideBar.jsx';
import { getMovieByPath } from '@/utils/movieClient';

import styles from './layout.module.scss';

const MovieSearchLayout = async ({ children }) => {
  const { genres } = await getMovieByPath('/genre/movie/list');

  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
