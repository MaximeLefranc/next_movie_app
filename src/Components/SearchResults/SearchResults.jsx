import { getMovieByPath } from '@/utils/movieClient';
import styles from './SearchResults.module.scss';
import MediaCard from '../MediaCard/MediaCard';

const SearchResults = async ({ searchParams, genreID }) => {
  const { results } = await getMovieByPath('/discover/movie', [
    { key: 'sort_by', value: searchParams.sort_by },
    {
      key: 'primary_release_date.gte',
      value: searchParams.primary_release_date_gte,
    },
    {
      key: 'primary_release_date.lte',
      value: searchParams.primary_release_date_lte,
    },
    { key: 'with_genres', value: genreID },
  ]);

  //! Mise en cache de cette requête par next !!!!

  return (
    <div className={styles.results}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
    </div>
  );
};

export default SearchResults;
