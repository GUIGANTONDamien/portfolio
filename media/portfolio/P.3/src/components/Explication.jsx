import React from 'react';
import './explication.css';

function Explication() {
  return (
    <div className="boxcontainer">
      <div className="boxmargin">
        <h1>1</h1>
        <div className="container">
          <h2>Télécharger l’application </h2>
          <p> Créer gratuitement votre compte</p>
        </div>
      </div>
      <div className="boxmargin">
        <h1>2</h1>
        <div className="container">
          <h2>Faites votre choix </h2>
          <p> Localisez les voitures disponibles</p>
        </div>
      </div>
      <div className="boxmargin">
        <h1>3</h1>
        <div className="container">
          <h2>Roulez</h2>
          <p> Votre smartphone est votre clé de voiture</p>
        </div>
      </div>
    </div>
  );
}

export default Explication;
