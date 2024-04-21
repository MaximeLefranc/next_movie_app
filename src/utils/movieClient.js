import 'server-only';

export const getMovieByPath = (path, params = [], language = 'fr-FR') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);

  url.searchParams.append('language', language);

  params.forEach((param) => {
    url.searchParams.append(param.key, param.value);
  });

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_JWT_TOKEN}`,
    },
  }).then((response) => response.json());
};
