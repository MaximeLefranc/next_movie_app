import React, { Suspense } from 'react';

import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';

import MovieDetails from '@/Components/MovieDetails/MovieDetails';
import SimilarMovies from '@/Components/SimilarMovies/SimilarMovies';

export const dymanic = 'force-static';
export const revalidate = 3600;

const MoviePage = async ({ params: { id, locale } }) => {
  const movie = await getMovieByPath(`/movie/${id}`, [], locale);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} locale={locale} />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default MoviePage;