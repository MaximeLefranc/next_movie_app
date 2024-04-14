import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="Rechercher un titre" />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
