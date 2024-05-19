import React from 'react';

// Next
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';

// Components
import MovieSearch from '../MovieSearch/MovieSearch';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import LogoutLink from '../LogoutLink/LogoutLink';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Utils
import { getDictionary } from '@/utils/dictionaries';

import styles from './Header.module.scss';

export const dymanic = 'force-static';

const Header = async ({ locale }) => {
  const isConnected = cookies().get('next-auth.session-token', '');
  const i18n = await getDictionary(locale);

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
              <Link href={`/${locale}/series`}>{i18n.navBar.series}</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>{i18n.navBar.movies}</Link>
            </li>
            {isConnected ? (
              <>
                <LogoutLink logoutLabel={i18n.navBar.logout} locale={locale} />
                <li>
                  <Link href={`/${locale}/user/profile`}>
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href={`/${locale}/signup`}>{i18n.navBar.register}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/user/profile`}>
                    {i18n.navBar.login}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <MovieSearch locale={locale} />
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
