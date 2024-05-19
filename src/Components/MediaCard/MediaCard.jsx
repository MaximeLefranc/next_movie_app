import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Like from './Like/Like';

import styles from './MediaCard.module.scss';

const MediaCard = ({ media, locale }) => {
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/movies/${media.id}`}>
        <div className={styles.image}>
          <Like mediaId={media.id} />
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average.toFixed(1)}</p>
          <div className={styles.genres}>
            {media.genres &&
              media.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
          </div>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString(locale)}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
