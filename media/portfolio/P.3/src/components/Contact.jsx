/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div>
      <div id="letter">Vous avez des questions?</div>
      <section className="contact">
        <div className="bloc">
          <form id="contactForm">
            <label htmlFor="name">Votre nom et prénom:</label>
            <br />
            <input type="text" id="name" name="name" placeholder="NOM Prénom" />
            <br />
            <label htmlFor="email">Votre adresse mail:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@marguerite.com"
            />
            <br />
            <label htmlFor="message">Votre message:</label>
            <br />
            <textarea id="message" name="message" />
            <br />
            <input id="submit" type="submit" value="Envoyer" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
