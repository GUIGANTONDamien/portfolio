import React, { useState } from 'react';
import './Reservation.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeKeeper from 'react-timekeeper';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import Map from './Map';

const fidelite =
  'https://media.discordapp.net/attachments/828980599762321419/832548533076754472/birthday-gifts.jpg';

function Reservation() {
  const [isShow, setIsShow] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [isShowMap, setIsShowMap] = useState(false);
  const [choiceDate, setChoiceDate] = useState(new Date());
  const [selectedStation, setSelectedStation] = useState(null);

  const [time, setTime] = useState('12:00pm');

  return (
    <div className="containerReservation">
      <main>
        <div className="direction-boutton">
          <button
            className="boutton calendar"
            type="button"
            onClick={() => setIsShow(!isShow)}
          >
            Date
          </button>
          {isShow ? (
            <Calendar onChange={setChoiceDate} value={choiceDate} />
          ) : (
            ''
          )}
          <button
            className="boutton"
            type="button"
            onClick={() => setIsShowTime(!isShowTime)}
          >
            Horaire
          </button>

          {isShowTime ? (
            <TimeKeeper
              time={time}
              onChange={(newTime) => setTime(newTime.formatted12)}
            />
          ) : (
            ''
          )}

          <button
            className="boutton"
            type="button"
            onClick={() => {
              setIsShowMap(!isShowMap);
            }}
          >
            Localisation
          </button>
        </div>
        {isShowMap ? <Map setSelectedStation={setSelectedStation} /> : ''}
        <div className="recapitulatif-container">
          <div className="recapitulatif">
            <p>
              <span className="title-recapitulatif">Récapitualtif : </span>
              {choiceDate.toLocaleDateString('FR-fr')} {time}{' '}
              {selectedStation ? selectedStation.nom : ''}
            </p>
          </div>
        </div>
        <div className="direction-boutton">
          <div className="tarif">
            <div className="liberty">
              <h1>Formule Liberté</h1>
              <p>
                <strong>0€/mois</strong> pour un usage ponctuel 10€/ heure 0,50€
                /km, carburant inclus
              </p>
            </div>
            <div className="eco">
              <h1>Formule Eco</h1>
              <p>
                <strong>12€/mois</strong> sans engagement 5 € / heure 0,30€
                carburant inclus
              </p>
            </div>
            <div>
              <Link to="/Login">
                <button className="reserver" type="button">
                  Reserver
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="fidelite" src={fidelite} alt="fidelite" />
        </div>
      </main>
    </div>
  );
}
export default Reservation;
