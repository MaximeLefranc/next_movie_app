import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import MovieSearch from '../MovieSearch/MovieSearch';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = ({ locale }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href={`/${locale}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch locale={locale} />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
