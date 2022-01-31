import React from 'react';
import { Link } from 'react-scroll'

function About() {
    return (
        <div id="about" className="about">
            <h1>Hello, I'm Emelie</h1>
            <p>Jag är en junior frontendutvecklare med stort intresse för interaktionsdesign.
                I juli 2022 tar jag examen från yrkeshögskolan där jag under två år har utbildat min till frontendutvecklaare.
                Mina kunskaper inom frontendutveckling innefattar såklart HTML, CSS och JavaScript. Jag jobbar gärna i ReactJS men
                har även testat på Next.js tidigare. Jag lär mig mer än gärna något nytt spännande ramverk.
                Jag har grundläggande kunskaper i Node, postgreSQL, MongoDB och TypeScript.
                När det kommer till styling är jag väldigt förtjust i Sass och css modules men har även använt mig
                av styled components i tidigre prjekt. </p>
            {/* <div className="rhombes">
                <div className="rhomb1"></div>
                <div className="rhomb2"></div>
            </div> */}
            <div className="button-wrapper">
                <Link to="my-work" className="header-button">Se mina projekt</Link>
            </div>
        </div>
    );
}

export default About;
