import React from 'react';

function HomeCards(props){
    return(
        
            <div className="card_category">
                <div>
                <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ props.data.poster_path} alt="" />
             </div>
             <div className="card_cat_bottom">
                <h5>{props.data.title}</h5>
                <span>{props.data.release_date}</span>
            </div>
        </div>
        
    )
}

export default HomeCards;