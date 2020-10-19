import React from 'react';
import MovieItem from './MovieItem';

class MoviesList extends React.Component{
    state = {
        movies: null,
        loading: true,
    }
    fetchData = async() =>{
        const url = `https://api.themoviedb.org/3/search/movie?query=${this.props.search}&api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US&page=1&include_adult=false`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
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