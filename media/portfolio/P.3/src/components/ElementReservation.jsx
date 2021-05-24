import './profil.css';

function ElementReservation(props) {
  // eslint-disable-next-line react/prop-types
  const { commandDate, price, reservDate, id, disableReservation } = props;

  function handleClick() {
    disableReservation(id);
  }

  return (
    <div className="white">
      <div id="inline">
        <h3>Commande effectuée le {commandDate}</h3>
        <div id="euros"> {price} €</div>
      </div>
      <div id="inline">
        <section id="reservation">
          <span>Réservation</span> pour le {reservDate}
        </section>
        <h3>
          <button id="button-cancel" type="button" onClick={handleClick}>
            Annuler
          </button>
        </h3>
      </div>
    </div>
  );
}

export default ElementReservation;
