import React from 'react';
import HomeCards from './HomeCards';

function HomeCategory(props){
    return(
        <article className="article_category">
                    <div>
                        <h3>{props.data.title}</h3>
                        <select>
                            <option>En streaming</option>
                            <option>En televisión</option>
                            <option>En alquiler</option>
                            <option>En cines</option>
                        </select>
                    </div>
                    <div className="category_article">
                    { props.data.data.results.map(movie => {
                    return (<HomeCards data={ movie } key={movie.id}/>);
                })}
                </div>
                </article>
    )
}

export default HomeCategory;