import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetailPage from './pages/MovieDetail';
import MoviesList from './pages/MoviesList';
import Layout from './components/Layout';
import Home from './pages/Home';
import './components/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/movies-list/:search" component={MoviesList} />
            <Route exact path="/movie-detail/:movieId" component={MovieDetailPage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
