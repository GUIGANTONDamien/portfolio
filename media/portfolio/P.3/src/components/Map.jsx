import './Map.css';
import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import logocar from '../images/image_icon_map_marker.png';
import logolocal from '../images/png-marker-noir-local-removebg-preview.png';

const marks = L.icon({
  iconUrl: logocar,

  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
const localMarks = L.icon({
  iconUrl: logolocal,

  iconSize: [70, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
function Map(props) {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-marguerite-nantes-metropole&rows=1000'
      )
      .then((response) => {
        console.log(response);
        setStations(response.data.records);
      });
  }, []);
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={localMarks}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div className="mainMap">
      <MapContainer center={[47.21746, -1.55764]} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((records) => {
          const { coordinates } = records.fields.geo_shape;
          return (
            <Marker
              key={records.recordid}
              position={[coordinates[1], coordinates[0]]}
              icon={marks}
            >
              <Popup>
                <div className="titregras">{records.fields.nom} </div>
                <div className="dispotext">
                  {records.fields.insee} <br />
                  {records.fields.adresse} <br />
                  {records.fields.ouverture} <br />
                  <br />
                </div>
                <div className="containerBouton">
                  <button
                    className="boutonChoisir"
                    type="button"
                    onClick={() => props.setSelectedStation(records.fields)}
                  >
                    Choisir
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
