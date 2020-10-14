import React from 'react';
import './starringCard.css';

function StarringCard(props){
    return(
        <div className="card_list">
        {props.credits.cast.map(char => {
           return (
                (
                <div className='card'>
                
                    <img src={'https://image.tmdb.org/t/p/w138_and_h175_face' + char.profile_path} alt='' />
             
                    <h5>{char.name}</h5>
                    <p>{char.character}</p>
                
            </div>)
            ) 
        })}
        </div>
        )
    }
    
    export default StarringCard;