import React from 'react';
import MoviesList from '../components/MoviesList';
import Layout from '../components/Layout';
import '../components/App.css'

function MoviesListPage() {
  return (
    <div className="App">
      <Layout>
        <MoviesList />
      </Layout>
    </div>
  );
}

export default MoviesListPage;