import React from 'react';
import MovieDetail from '../components/MovieDetail';
import '../components/movieDetail.css';

class MovieDetailPage extends React.Component{
    state = {
        loading: true,
        movieData: null,
        credits: null,
        error: null
    }
    componentDidMount(){
        this.fetchMovieData();
    }

    fetchMovieData = async () =>{
       const response = await fetch('https://api.themoviedb.org/3/movie/1374?api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US');
       const data = await response.json();
       const response2 = await fetch('https://api.themoviedb.org/3/movie/1374/credits?api_key=a6f0d3082cd52617711adb2c75c57921');
       const credits = await response2.json();
       console.log(data);
       this.setState({
           movieData: data,
           credits,
           loading: false
       });
    }
    render(){
    return(
     this.state.loading ? <p>Loading...</p> : <MovieDetail movieData={ this.state.movieData } credits={ this.state.credits } /> 
    )
    }
}

export default MovieDetailPage;