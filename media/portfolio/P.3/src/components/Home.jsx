import React from 'react';
import Explication from './Explication';
import './home.css';

const logoMarguerite =
  'https://media.discordapp.net/attachments/828980599762321419/839966386268667924/image_marguerite.jpg';
function Home() {
  return (
    <div>
      <div className="containerHome">
        <div className="postionImageText" />
        <img className="imageMarguerite" alt="tan" src={logoMarguerite} />
      </div>
      <div className="containerAdvantage">
        <div className="Advantage">
          <h1>
            Les avantages de l&apos;autopartage avec <span>Marguerite</span>
          </h1>
          <p>Disponible 24h/24h depuis votre smartphone</p>

          <hr />

          <p>Stationnement gratuit à Nantes</p>

          <hr />

          <p>Accès aux zone piétonnes et à trafic limité</p>

          <hr />

          <p>Première heure gratuite avec LiberTan</p>

          <hr />
          <p>Deux à trois fois moins chères qu&apos;une voiture</p>
        </div>
      </div>
      <Explication />
    </div>
  );
}

export default Home;
