'use client';

import { useRouter, usePathname } from 'next/navigation';

import styles from './Form.module.scss';

const Form = () => {
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

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Filter</h2>
      <div className={styles.date}>
        <h3>Date de sortie</h3>
        <div>
          <p>Du</p>
          <input type="date" name="fromDate" max={date} />
        </div>
        <div>
          <p>au</p>
          <input type="date" name="toDate" defaultValue={date} max={date} />
        </div>
      </div>
      <div>
        <h3>Trier par</h3>
        <select name="sort">
          <option value="popularity.desc">Popularité</option>
          <option value="vote_average.desc">Note</option>
          <option value="code_count.desc">Nombre de notes</option>
        </select>
      </div>
      <input type="submit" value="Rechercher" />
    </form>
  );
};

export default Form;
