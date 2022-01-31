import React from 'react';

function Contact() {
    return (
        <div id="contact" className="contact">
            <form className="form-wrapper" action="https://formsubmit.co/emeliie094@hotmail.com" method="POST">
                <h2>Kontakta mig</h2>
                <p>Fyll i formuläret nedan för att komma i kontakt med mig</p>
                <label for="name"> Namn:</label>
                <input id="name" placeholder="name" required />
                <label for="email"> E-mailadress:</label>
                <input id="email" type="email" placeholder="e-mail" required />
                <label for="phonenumber"> Telefonnummer:</label>
                <input id="phonenumber" placeholder="phonenumber" />
                <label for="message"> Meddelande</label>
                <textarea id="message" placeholder="Message here..." />
                <button className="send-button">Skicka</button>
            </form>
        </div>
    );
}

export default Contact;
