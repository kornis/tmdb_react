import React from 'react';

import StarringCard from './StarringCard';

function MovieDetail(props){
        return( 
            <>
            <div className="data_container">
                <div id='images'>
                    <img src={'https://image.tmdb.org/t/p/original' + props.movieData.poster_path} alt='' />
                </div>
                <div id="info_container">
                    <p><strong>{props.movieData.title}</strong>({ props.movieData.release_date})</p>
                    <span>{props.movieData.vote_average}</span> <span>Puntuación del usuario</span>
                </div>
                <div id="genre_div">
                    { props.movieData.release_date + ' * ' + props.movieData.runtime } 
                    <p>Drama</p>
                </div>
                <div id='info_movie'>
                    <p>Descripcion oracion</p>
                    <h3>Vista General</h3>
                    <p>Resumen de la historia lorem ipsum</p>
                    <span>Starring by</span>
                    <span>Director, Actor</span>
                </div>

                <div id='starring_section'>
                    <h3>Actores principales</h3>
                    
                    <StarringCard credits={ props.credits }/>
                </div>
            </div>
            </>
        )
    }


export default MovieDetail;