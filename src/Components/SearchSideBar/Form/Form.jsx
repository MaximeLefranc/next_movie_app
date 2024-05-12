'use client';

import { useRouter, usePathname } from 'next/navigation';

import styles from './Form.module.scss';

const Form = ({ locale }) => {
  const router = useRouter();
  const pathName = usePathname();

  const date = new Date().toISOString().substring(0, 10);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const searchParams = new URLSearchParams();

    searchParams.append('sort_by', form.get('sort'));
    searchParams.append('primary_release_date_gte', form.get('fromDate'));
    searchParams.append('primary_release_date_lte', form.get('toDate'));

    router.push(`${pathName}?${searchParams.toString()}`);
  };

  const dictionary = {
    en: {
      filter: 'Filter',
      releaseDate: 'Release date',
      from: 'From',
      to: 'to',
      filterBy: 'Filter by',
      popularity: 'Popularity',
      note: 'Note',
      numberOfNotes: 'Number of notes',
      search: 'Search',
    },
    es: {
      filter: 'Filter',
      releaseDate: 'Fecha de publicación',
      from: 'Del',
      to: 'al',
      filterBy: 'Filtrar por',
      popularity: 'Popularidad',
      note: 'Nota',
      numberOfNotes: 'Cantidad de notas',
      search: 'Buscar',
    },
    fr: {
      filter: 'Filter',
      releaseDate: 'Date de sortie',
      from: 'Du',
      to: 'au',
      filterBy: 'Trier par',
      popularity: 'Popularité',
      note: 'Note',
      numberOfNotes: 'Nombre de notes',
      search: 'Rechercher',
    },
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>{dictionary[locale].filter}</h2>
      <div className={styles.date}>
        <h3>{dictionary[locale].releaseDate}</h3>
        <div>
          <p>{dictionary[locale].from}</p>
          <input type="date" name="fromDate" max={date} />
        </div>
        <div>
          <p>{dictionary[locale].to}</p>
          <input type="date" name="toDate" defaultValue={date} max={date} />
        </div>
      </div>
      <div>
        <h3>{dictionary[locale].filterBy}</h3>
        <select name="sort">
          <option value="popularity.desc">
            {dictionary[locale].popularity}
          </option>
          <option value="vote_average.desc">{dictionary[locale].note}</option>
          <option value="code_count.desc">
            {dictionary[locale].numberOfNotes}
          </option>
        </select>
      </div>
      <input type="submit" value={dictionary[locale].search} />
    </form>
  );
};

export default Form;
