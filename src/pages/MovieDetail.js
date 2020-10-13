import React from 'react';
import MovieDetail from '../components/MovieDetail';


class MovieDetailPage extends React.Component{
    state = {
        loading: true,
        movieData: null,
        error: null
    }
    componentDidMount(){
        this.fetchMovieData();
    }

    fetchMovieData = async () =>{
       const response = await fetch('https://api.themoviedb.org/3/movie/1374?api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US');
       const data = await response.json();
       console.log(data);
       this.setState({
           movieData: data,
           loading: false
       });
    }
    render(){
        if(this.state.loading){
            return "Loading..."
        }
    return(
        <MovieDetail movieData={ this.state.movieData } />
    )
    }
}

export default MovieDetailPage;