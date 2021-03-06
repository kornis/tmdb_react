import React from 'react';
import '../components/home.css';
import '../components/card_category.css';
import { Redirect } from 'react-router-dom';
import HomeCards from '../components/HomeCards';
import HomeCategory from '../components/HomeCategory';


class Home extends React.Component{
    state = {
        info: {
            popular: {
                title: "Lo mas popular",
                data: null
            },
            free_movie: {
                title: "Ver gratis",
                data: null
            },
            trending: {
                title: "Tendencias",
                data: null
            },
           },
        error: null,
        loading: true,
        redirect: null,
        search: null,
        }

    handleInputSearch = (e) => {
        e.preventDefault();
        let search = e.target[0].value;
        this.setState({
            ...this.state,
            redirect: '/movies-list/'+search 
        })
    }    

    fetchInfo = async () => {
        let response = await fetch(' https://api.themoviedb.org/3/movie/popular?api_key=a6f0d3082cd52617711adb2c75c57921&language=en-US&page=1');
        let data = await response.json();
        await this.setState({
            ...this.state,
            info: {
                popular: {
                    data
                }
            },
            loading: false
        });
        console.log(this.state.info.popular.data.results);
    }

    componentDidMount(){
       this.fetchInfo();
       }

render(){
    if(this.state.redirect){
        return <Redirect to={this.state.redirect} />
    }
    return(
        <>
        <section className="banner_home">
        <article> 
                <h1>Bienvenidos.</h1>
                <p><strong>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</strong></p>
                <div className="home_search">
                    <form onSubmit={ this.handleInputSearch }>
                    <input type="text" />
                    <button><strong>Search</strong></button>
                    </form>
                </div>
            </article>
        </section>

        <main>
            <section>

                {this.state.loading ?  null : <HomeCategory data={ this.state.info.popular } />}
    
            </section>

        <section>
            <article className="join_now">
            <div>
                <h3>Únete hoy</h3>
                <p>
                Get access to maintain your own <span className="gray_text">custom personal lists</span>, <span className="gray_text">track what you've seen</span> and search and filter for <span className="gray_text">what to watch next</span>—regardless if it's in theatres, on TV or available on popular streaming services like QubitTV, Kocowa, DIRECTV GO y DOCSVILLE.
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