import React from 'react';

const MoviePage = ({ params }) => {
  return (
    <div>
      <h1>Movie page with id : {params.id}</h1>
    </div>
  );
};

export default MoviePage;
