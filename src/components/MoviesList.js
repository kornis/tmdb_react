import React from 'react';
import MovieItem from './MovieItem';

class MoviesList extends React.Component{
    state = {
        movies: null,
        loading: true,
    }

    fetchData = async() =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US&page=1")
        const data = await response.json();
        console.log(data.results);
        this.setState({movies:data, loading:false})
    }

    componentDidMount(){
        this.fetchData();
    }

render(){
    return(
        <>
       {this.state.loading ? <h3>fetching data...</h3> : this.state.movies.results.map(movie => {
                return <MovieItem key={movie.id} data={movie} />
            })}
        </>
    )
    }
}

export default MoviesList;