import React from 'react';
import './movie_item.css';
import { Link } from 'react-router-dom';
class MovieItem extends React.Component {
    render(){
        return(
            <div className="movie_item_data">
                <div>
                    <Link to='/movie-detail/:id'><img src={ "https://image.tmdb.org/t/p/original" + this.props.data.poster_path } alt="Poster Movie" /></Link>
                </div>
                <div>
                    <p><Link to='/movie-detail/:id'><strong>Title:</strong> {this.props.data.title}</Link></p>
                    <p><strong>Overview:</strong> {(this.props.data.overview).substring(0,100) + "..."}</p>
                    <p><strong>Year:</strong> {this.props.data.release_date}</p>
                    <p><strong>Rating:</strong>{this.props.data.vote_average}</p>
                </div>    
            
            </div>
            )
        }
    }
    
    export default MovieItem;