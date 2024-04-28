import SearchResults from '@/Components/SearchResults/SearchResults';
import React from 'react';

const GenrePage = ({ params, searchParams }) => {
  return <SearchResults searchParams={searchParams} genreId={params.id} />;
};

export default GenrePage;
