import React from 'react';
import './movieDetail.css';

function MovieDetail(props){
        return(
            <>
            <div className='subMenu'>
                <ul>
                    <li>Vista General</li>
                    <li>Multimedia</li>
                    <li>Fandome</li>
                </ul>
            </div>
            <div className="container">
                <div id='images'>
                    <img src='' alt='' />
                    <img src={'https://image.tmdb.org/t/p/original' + props.movieData.poster_path} alt='' />
                </div>
                <div>
                    <p><strong>{props.movieData.title}</strong>({ props.movieData.release_date})</p>
                    <span>{props.movieData.vote_average}</span> <span>Puntuación del usuario</span>
                </div>
                <div>
                    {props.movieData.release_date + ' - ' + props.movieData.runtime + ' - genero'  } 
                </div>
                <div>
                    <p>Descripcion oracion</p>
                    <h3>Vista General</h3>
                    <p>Resumen de la historia lorem ipsum</p>
                    <span>Starring by</span>
                    <span>Director, Actor</span>
                </div>

                <div>
                    <h3>Personajes principales</h3>
                    <div className='card'>
                        <div>
                            <img src='' alt='' />
                        </div>
                        <div>
                            <h4>Nombre y Apellido</h4>
                            <p>Nombre en la pelicula</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div>
                            <img src='' alt='' />
                        </div>
                        <div>
                            <h4>Nombre y Apellido</h4>
                            <p>Nombre en la pelicula</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div>
                            <img src='' alt='' />
                        </div>
                        <div>
                            <h4>Nombre y Apellido</h4>
                            <p>Nombre en la pelicula</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }


export default MovieDetail;