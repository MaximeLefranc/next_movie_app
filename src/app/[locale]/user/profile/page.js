import React from 'react';

import LogoutBtn from '@/Components/LogoutBtn/LogoutBtn';

import { getServerSession } from 'next-auth';

import prisma from '@/utils/prisma';
import { getHydratedMovies } from '@/utils/movieClient';

import styles from './page.module.scss';
import MediaCard from '@/Components/MediaCard/MediaCard';
import { addGenresToMedias } from '@/utils/addGenresToMedias';

const ProfilePage = async ({ params: { locale } }) => {
  const { user: userSession } = await getServerSession();

  const { movies: moviesId } = await prisma.user.findFirst({
    where: {
      email: userSession.email,
    },
    include: {
      movies: true,
    },
  });

  const movies = await getHydratedMovies(
    moviesId.map((movie) => movie.movieId),
    locale
  );

  console.log(movies);

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <h1>Liste des films aimés</h1>
        <LogoutBtn />
      </div>
      <div className={styles.list}>
        {movies
          .map((movie) => ({ ...movie, genres: movie.genres.slice(0, 2) }))
          .map((movie) => (
            <MediaCard media={movie} locale={locale} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default ProfilePage;
