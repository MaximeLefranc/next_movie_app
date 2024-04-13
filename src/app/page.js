import MediaCard from '@/Components/MediaCard/MediaCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard />
    </div>
  );
}
