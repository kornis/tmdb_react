import React from 'react';


function Header(){
    return(
        <>
        <header>
            <div>
                <img src='/bars-solid.svg' alt='bars' />            
            </div>
            <div>
            <span>Movie_Search</span>
            </div>
            <div>
                <ul>
                    <li>Login</li>
                    <img src='/search-solid.svg' alt='search' />
                </ul>
            </div> 
        </header>
        <div className='subMenu'>
                <ul>
                    <li>Vista General</li>
                    <li>Multimedia</li>
                    <li>Fandome</li>
                </ul>
            </div>
        </>
    )
};

export default Header;