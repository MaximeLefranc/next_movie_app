import SearchResults from '@/Components/SearchResults/SearchResults';
import React from 'react';

const MoviesPage = ({ searchParams }) => {
  return <SearchResults searchParams={searchParams} />;
};

export default MoviesPage;
