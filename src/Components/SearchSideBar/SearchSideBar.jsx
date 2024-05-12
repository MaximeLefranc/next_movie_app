'use client';
import { useSelectedLayoutSegment, useParams, notFound } from 'next/navigation';
import Form from './Form/Form';

import styles from './SearchSideBar.module.scss';

const SearchSideBar = ({ genres, locale }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      if (locale === 'en') {
        return 'Movies';
      } else if (locale === 'es') {
        return 'Películas';
      }
      return 'Films';
    }
    const genre = genres.find((genre) => genre.id === Number(id));

    if (!genre) {
      return notFound();
    }

    return genre.name;
  };

  let title = `Tous les '${getSideBarTitle()}'`;

  if (locale === 'en') {
    title = `All '${getSideBarTitle()}'`;
  } else if (locale === 'es') {
    title = `Todas las '${getSideBarTitle()}'`;
  }

  return (
    <div className={styles.sidebar}>
      <h1>{title}</h1>
      <Form locale={locale} />
    </div>
  );
};

export default SearchSideBar;
