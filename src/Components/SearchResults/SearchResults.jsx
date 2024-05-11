import { getMovieByPath } from '@/utils/movieClient';
import styles from './SearchResults.module.scss';
import MediaCard from '../MediaCard/MediaCard';
import { addGenresToMedias } from '@/utils/addGenresToMedias';

const SearchResults = async ({ searchParams, genreId, locale }) => {
  const { results } = await getMovieByPath(
    '/discover/movie',
    [
      { key: 'sort_by', value: searchParams.sort_by },
      {
        key: 'primary_release_date.gte',
        value: searchParams.primary_release_date_gte,
      },
      {
        key: 'primary_release_date.lte',
        value: searchParams.primary_release_date_lte,
      },
      { key: 'with_genres', value: genreId },
    ],
    locale
  );

  const movies = await addGenresToMedias(results, locale);

  return (
    <div className={styles.results}>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
    </div>
  );
};

export default SearchResults;
