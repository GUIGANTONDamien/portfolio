import React from 'react';
import './footer.css';

const logo =
  'https://cdn.discordapp.com/attachments/828980599762321419/831816484673945600/Logo_Marguerite-removebg-preview.png';
const facebook =
  'https://cdn.discordapp.com/attachments/828980599762321419/832200236285820928/facebook-transparent-5a22b45ab05884.1144870015122238347223-removebg-preview1-removebg-preview.png';
const youtube =
  'https://cdn.discordapp.com/attachments/828980599762321419/832193031099908106/yt1.png';
const twitter =
  'https://cdn.discordapp.com/attachments/828980599762321419/832200239636152370/twitter-logo-png-5a355d8a863ba6.9233809415134467945498-removebg-preview1.png';
const tan = 'https://www.imarguerite.com/upload/images/partenaires/logoTAN.png';
const bicloo =
  'https://www.imarguerite.com/upload/images/partenaires/bicloo.png';
const nantes =
  'https://www.imarguerite.com/upload/images/partenaires/NantesMetropole.png';
const europcar =
  'https://www.imarguerite.com/upload/images/partenaires/EAlogo.png';

function FooterComponent() {
  return (
    <div>
      <footer>
        <div id="partDiv">
          <a
            href="https://www.tan.fr/fr/voiture/la-voiture-en-auto-partage"
            target="blank"
          >
            <img className="partenaire" alt="tan" src={tan} />
          </a>
          <a
            href="https://www.bicloo.nantesmetropole.fr/fr/home"
            target="blank"
          >
            <img className="partenaire" alt="bicloo" src={bicloo} />
          </a>
          <a href="https://metropole.nantes.fr/" target="blank">
            <img className="partenaire" alt="nantes" src={nantes} />
          </a>
          <a href="https://www.europcar.fr/fr-fr" target="blank">
            <img className="partenaire" alt="europcar" src={europcar} />
          </a>
        </div>
        <div id="flex">
          <div id="logoPic">
            <img id="logo" alt="logo" src={logo} />
          </div>
          <div id="droite">
            <div id="text">
              <h4 className="follow">Suivez nous sur :</h4>
            </div>
            <a
              className="right"
              href="https://fr-fr.facebook.com/margueritedenantes/"
              target="blank"
            >
              <img className="contentFooter" id="fb" alt="fb" src={facebook} />
            </a>
            <a
              className="right"
              href="https://www.youtube.com/user/MargueriteNantes"
              target="blank"
            >
              <img className="contentFooter" id="yt" alt="yt" src={youtube} />
            </a>
            <a
              className="right"
              href="https://twitter.com/marguerite_nte?lang=fr"
              target="blank"
            >
              <img className="contentFooter" id="tt" alt="tt" src={twitter} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default FooterComponent;
