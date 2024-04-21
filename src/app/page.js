import Popular from '@/Components/Popular/Popular';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
}
