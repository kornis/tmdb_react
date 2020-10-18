import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

function Footer(){
    return(
        <footer>
            <nav>
                <div>
                <Link to=''><button>UNIRSE A LA COMUNIDAD</button></Link>
                </div>
                <div>
                    <h3>LO BÁSICO</h3>
                    <ul>
                        <li>Sobre TMDb</li>
                        <li>Contacto</li>
                        <li>Foros de ayuda</li>
                        <li>API</li>
                        <li>Estado del sistema</li>
                    </ul>
                </div>
                <div>
                    <h3>PARTICIPA</h3>
                    <ul>
                        <li>Guía de aportaciones</li>
                        <li>Aplicaciones de terceros</li>
                        <li>Añadir nueva película</li>
                        <li>Añadir nuevo programa de tv</li>
                    </ul>
                </div>

                <div>
                    <h3>COMUNIDAD</h3>
                    <ul>
                        <li>Directrices</li>
                        <li>Discusiones</li>
                        <li>Tabla de clasificación</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                <div>
                    <h3>LEGAL</h3>
                    <ul>
                        <li>Terminos de uso</li>
                        <li>Términos de uso de la API</li>
                        <li>Política de privacidad</li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;