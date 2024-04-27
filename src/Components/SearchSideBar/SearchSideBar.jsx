'use client';
import { useSelectedLayoutSegment, useParams, notFound } from 'next/navigation';
import Form from './Form/Form';

import styles from './SearchSideBar.module.scss';

const SearchSideBar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      return 'Films';
    }
    const genre = genres.find((genre) => genre.id === Number(id));

    if (!genre) {
      return notFound();
    }

    return genre.name;
  };
  const title = getSideBarTitle();

  return (
    <div className={styles.sidebar}>
      <h1>Tous les &quot;{title}&quot;</h1>
      <Form />
    </div>
  );
};

export default SearchSideBar;
