import React from 'react';


const Hero = ({handleLogout}) => { 
    return(

        <section className='hero'>
            <nav>
                <button className='button' onClick={ handleLogout }>Log Out</button>
            </nav>
            <h2 className='text'>Welcome</h2>

        </section>
    )
}



export default Hero;