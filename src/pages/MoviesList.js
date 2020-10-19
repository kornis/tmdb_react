import React from 'react';
import MoviesList from '../components/MoviesList';


function MoviesListPage(props) {
  return (
    <div className="App">
        <MoviesList search={props.match.params.search}  />
    </div>
  );
}

export default MoviesListPage;