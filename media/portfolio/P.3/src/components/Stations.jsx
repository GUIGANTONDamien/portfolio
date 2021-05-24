import React from 'react';

function Stations(props) {
  const { nom, adresse, tel } = props;

  return (
    <div>
      <p>Nom : {nom}</p>
      <p>Adresse : {adresse}</p>
      <p>Numéro de téléphone : {tel} </p>
    </div>
  );
}

export default Stations;
