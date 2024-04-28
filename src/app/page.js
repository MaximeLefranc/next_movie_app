import Popular from '@/Components/Popular/Popular';
import styles from './page.module.css';
import Genres from '@/Components/Genres/Genres';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
