import 'server-only';

export const getMovieByPath = (
  path,
  params = [],
  language = 'fr-FR',
  cache = 'force-cache'
) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);

  url.searchParams.append('language', language);

  params
    .filter((param) => param.value)
    .forEach((param) => {
      url.searchParams.append(param.key, param.value);
    });

  console.log(url);

  return fetch(url, {
    cache: cache,
    headers: {
      Authorization: `Bearer ${process.env.TMDB_JWT_TOKEN}`,
    },
  }).then((response) => response.json());
};
