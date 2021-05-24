import React from 'react';
import './manual.css';
import Explication from './Explication';

function Manual() {
  return (
    <div>
      <Explication />

      <div className="carré-container">
        <div className="carré-container2">
          <h1>Guide du bon conducteur</h1>
          <p>I-La vitesse, tu limiteras</p>
          <p>II- L&apos; alcool / stupéfiants, tu bannieras</p>
          <p>III- Le téléphone, tu le poseras</p>
          <p>IV-Les mains sur le volant, tu garderas</p>
          <p>V-Les bonnes manières sur la route, tu auras</p>
          <p>VI- La distance de sécurité, tu garderas</p>
        </div>
      </div>
    </div>
  );
}

export default Manual;
