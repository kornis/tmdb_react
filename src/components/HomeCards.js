import React from 'react';
import { Link } from 'react-router-dom';
 
function HomeCards(props){
    return(
        
            <div className="card_category">
                <Link to={'/movie-detail/' + props.data.id }>
                <div>
                <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ props.data.poster_path} alt="" />
             </div>
             <div className="card_cat_bottom">
                <h5>{props.data.title}</h5>
                <span>{props.data.release_date}</span>
            </div>
            </Link>
        </div>
        
    )
}

export default HomeCards;