import React from 'react';
import header from '../images/header.jpg'
import { Link } from 'react-scroll'

function Home() {
    return (
        <div className="hero" id="home">
            <header>
                <img src={header} className="App-logo" alt="logo" />
                <section className="header-section">
                    <div className="vl"></div>
                    <p><i>I strive to make the web a beautiful and accessible place.</i></p>
                    <h1>Emelie Nilsson</h1>
                    <p>Frontend developer</p>
                    <div className="vl"></div>

                    <Link to="about" className="header-button">Visa mer</Link>

                </section>
            </header>

        </div>)
}

export default Home;
