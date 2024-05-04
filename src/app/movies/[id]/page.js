import React from 'react';

import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';

import MovieDetails from '@/Components/MovieDetails/MovieDetails';

export const dymanic = 'force-static';
export const revalidate = 3600;

const MoviePage = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
