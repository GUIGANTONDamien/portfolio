import React from 'react';
import './Inscription.css';
import './Inscription.scss';
import { Link } from 'react-router-dom';

function Inscription() {
  return (
    <div className="wrapper">
      <div id="center">
        <Link to="/Login">
          <img
            className="cross"
            alt="cross"
            src="https://cdn.discordapp.com/attachments/828980599762321419/834365801603268608/kisspng-computer-icons-christian-cross-icon-design-clip-ar-5afc2de4bc8555.6906750415264762607722-rem.png"
          />
        </Link>
        <div className="titre">
          <strong>
            Inscrivez-vous à <span>marguerite</span>
          </strong>
        </div>
        <div className="titre">
          <p>
            <em>C&apos; est simple et rapide...suivez le mouvement !</em>
          </p>
        </div>
        <div>
          <input
            id="toggle-on"
            className="toggle toggle-left"
            name="toggle"
            value="false"
            type="radio"
            checked
          />
          <label htmlFor="toggle-on" className="btn">
            Particulier{' '}
          </label>
          <input
            id="toggle-off"
            className="toggle toggle-right"
            name="toggle"
            value="true"
            type="radio"
          />
          <label htmlFor="toggle-off" className="btn">
            Entreprise{' '}
          </label>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              value="Male"
              id="inlineRadio1"
            />
          </div>
          <div className="form-check-label" htmlFor="inlineRadio1">
            Monsieur
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              value="Female"
              id="inlineRadio2"
            />
          </div>
          <div className="form-check-label" htmlFor="inlineRadio2">
            Madame
          </div>
        </div>
        <form name="login">
          <input id="form" name="lastname" type="lastname" placeholder="Nom" />
          <input
            id="form"
            name="firstname"
            type="firstname"
            placeholder="Prénom"
          />
          <input id="form" name="adress" type="adress" placeholder="Adresse" />
          <div className="codepostal-city">
            <input
              id="form-diff-citynumber"
              name="citynumber"
              type="citynumber"
              placeholder="Code postal"
            />
            <input
              id="form-diff-city"
              name="city"
              type="city"
              placeholder="Ville"
            />
          </div>
          <input id="form" name="country" type="country" placeholder="Pays" />
          <input id="form" name="email" type="email" placeholder="Email" />
          <input
            id="form"
            name="numberphone"
            type="numberphone"
            placeholder="Mobile"
          />
          <Link style={{ textDecoration: 'none' }} to="/Profil">
            <button className="button-valider" id="form" type="submit">
              <strong>Valider</strong>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
