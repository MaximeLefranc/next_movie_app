import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <p>MyMovieApp</p>
      </div>
      <div>
        <nav>
          <ul>
            <li>Séries</li>
            <li>Films</li>
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
