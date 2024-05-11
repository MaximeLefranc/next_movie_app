import SearchResults from '@/Components/SearchResults/SearchResults';
import React from 'react';

const GenrePage = ({ params: { id, locale }, searchParams }) => {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenrePage;
