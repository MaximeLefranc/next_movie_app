import SearchResults from '@/Components/SearchResults/SearchResults';
import React from 'react';

const MoviesPage = ({ searchParams, params: { locale } }) => {
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
