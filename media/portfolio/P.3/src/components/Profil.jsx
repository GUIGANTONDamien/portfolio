import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ElementReservation from './ElementReservation';
import './profil.css';
import ImageUser from '../assets/simone.jpg';

function Profil() {
  const [infoReservation, setInfoReservation] = useState([
    {
      commandDate: '07/05/2021',
      price: 5,
      reservDate: '07/05/2021',
      active: true,
      id: 1,
    },
    {
      commandDate: '05/01/2019',
      price: 15,
      reservDate: '15/01/2020',
      active: true,
      id: 2,
    },
    {
      commandDate: '12/05/2019',
      price: 20,
      reservDate: '25/05/2019',
      active: true,
      id: 3,
    },
  ]);
  function disableReservation(id) {
    const reservationFound = infoReservation.find(
      (reservation) => reservation.id === id
    );
    reservationFound.active = false;
    setInfoReservation([
      ...infoReservation.filter((r) => r.id !== id),
      reservationFound,
    ]);
  }
  return (
    <div>
      <div className="button-logout">
        <div className="simone">
          <img src={ImageUser} alt="simone" />
        </div>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/">
            <button type="button" id="connexion">
              Se déconnecter
            </button>
          </Link>
        </div>
      </div>
      <div id="simone">Simone De Beauvoir</div>
      <section id="wrapper">
        <h1>Historique de réservations</h1>
        {infoReservation
          .filter((info) => info.active === true)
          .map((reservation) => (
            <ElementReservation
              commandDate={reservation.commandDate}
              price={reservation.price}
              reservDate={reservation.reservDate}
              id={reservation.id}
              disableReservation={disableReservation}
            />
          ))}
      </section>

      <section id="wrapper">
        <h1 className="param">Paramètres</h1>
        <div className="param">Changer sa photo</div>
        <div className="param">Changer sa description</div>
        <div className="param" id="last-param">
          Changer le langage
        </div>
      </section>
    </div>
  );
}

export default Profil;
