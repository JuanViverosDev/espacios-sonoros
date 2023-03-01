import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Sites = () => {
  const position = [3.4205152, -76.5151578];
  const sites = [
    {
      id: 1,
      name: "Parque del perro",
      description:
        "Área boscosa pequeña con restaurantes, bares y una emblemática escultura de perro que se ilumina en la noche.",
      lat: 3.4358476,
      lng: -76.5477402,
    },
    {
      id: 2,
      name: "Pance",
      description: "Parque de la música",
      lat: 3.3492978,
      lng: -76.5736431,
    },
    {
      id: 3,
      name: "Plazoleta Jairo Varela",
      description: "Parque de la música",
      lat: 3.4550312,
      lng: -76.5370291,
    },
    {
      id: 4,
      name: "La Ermita",
      description: "Parque de la música",
      lat: 3.4546141,
      lng: -76.5349964,
    },
    {
      id: 5,
      name: "San Antonio",
      description: "Parque de la música",
      lat: 3.4477814,
      lng: -76.5425425,
    },
  ];
  return (
    <div className="h-50">
      <MapContainer center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sites.map((site) => (
          <Marker key={site.id} position={[site.lat, site.lng]}>
            <Popup>{site.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Sites;