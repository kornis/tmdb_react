import React from 'react';
import '../components/home.css';
import '../components/card_category.css';
import HomeCards from '../components/HomeCards';

class Home extends React.Component{
    state = {
        info: {
            popular: null,
            free_movie: null,
            trending: null,
           },
        error: null,
        loading: true,
        }

    fetchInfo = async () => {
        let response = await fetch(' https://api.themoviedb.org/3/movie/popular?api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US&page=1');
        let data = await response.json();
        await this.setState({
            info: {
                popular: data,
            },
            loading: false
        });
        console.log("console 1")
        console.log(this.state.info.popular.results);
    }

    componentDidMount(){
       this.fetchInfo();
       console.log("did mount")
    }

render(){
    return(
        <>
        <section className="banner_home">
        <article> 
                <h1>Bienvenidos.</h1>
                <p><strong>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</strong></p>
                <div className="home_search">
                    <input type="text" />
                    <a href="/"><button><strong>Search</strong></button></a>
                </div>
            </article>
        </section>

        <main>
            <section>
                <article className="article_category">
                    <div>
                        <h3>Lo más popular</h3>
                        <select>
                            <option>En streaming</option>
                            <option>En televisión</option>
                            <option>En alquiler</option>
                            <option>En cines</option>
                        </select>
                    </div>
                    <div className="category_article">
                    {this.state.loading ? null : this.state.info.popular.results.map(movie => {
                    return (<HomeCards data={ movie } key={movie.id}/>);
                })}
                </div>
                </article>
            </section>

        <section>
            <article className="join_now">
            <div>
                <h3>Únete hoy</h3>
                <p>
                Get access to maintain your own <span class="gray_text">custom personal lists</span>, <span class="gray_text">track what you've seen</span> and search and filter for <span class="gray_text">what to watch next</span>—regardless if it's in theatres, on TV or available on popular streaming services like QubitTV, Kocowa, DIRECTV GO y DOCSVILLE.
                </p>
            </div>
            <div>
                <button>Regístrate</button>
            </div>
            <div>
                <ul>
                    <li>Disfruta de TMDb sin anuncios</li>
                    <li>Mantén una lista de seguimiento personal</li>
                    <li>Filtra por tus suscripciones a servicios de streaming y  encuentra algo que ver</li>
                    <li>Registra las películas y programas de televisión que has visto</li>
                    <li>Crea listas personalizadas</li>
                    <li>Aporta y mejora nuestra base de datos</li>
                </ul>
            </div>
            </article>
        </section>


        </main>
        </>
    )
}
}

export default Home;