import 'server-only';

export const getMovieByPath = (path, language = 'fr-FR') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);

  url.searchParams.append('apy_key', process.env.TMDB_API_KEY);
  url.searchParams.append('language', language);

  return fetch(url).then((response) => response.json());
};
