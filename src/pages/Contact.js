import React from 'react';

function Contact() {
    return (
        <div id="contact" className="contact">
            <form className="form-wrapper" action="https://formsubmit.co/emeliie094@hotmail.com" method="POST">
                <h2>Kontakta mig</h2>
                <p>Fyll i formuläret nedan för att komma i kontakt med mig</p>
                <label for="name"> Namn:</label>
                <input id="name" name="name" type="text" placeholder="name" required />
                <label for="email"> E-mailadress:</label>
                <input id="email" name="email" type="email" placeholder="e-mail" required />
                <label for="phonenumber"> Telefonnummer:</label>
                <input id="phonenumber" name="phonenumber" type="phonenumber" placeholder="phonenumber" />
                <label for="message"> Meddelande</label>
                <textarea id="message" name="mesage" type="text" placeholder="Message here..." />
                <button type="submit" className="send-button">Skicka</button>
            </form>

        </div>
    );
}

export default Contact;
