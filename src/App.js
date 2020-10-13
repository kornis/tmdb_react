import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetailPage from './pages/MovieDetail';
import MoviesList from './pages/MoviesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/movies-list" component={MoviesList} />
        <Route exact path="/movie-detail" component={MovieDetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
