import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const position = [3.3205152, -76.5151578];
  const sites = [
    {
      id: 1,
      name: "Parque del perro",
      description:
        "Área boscosa pequeña con restaurantes, bares y una emblemática escultura de perro que se ilumina en la noche.",
      lat: 3.4358476,
      lng: -76.5477402,
      url: "parque-del-perro",
    },
    {
      id: 2,
      name: "Pance",
      description:
        "Pance es un corregimiento en el sur del municipio colombiano de Cali, su área se extiende desde el Valle del río Cauca hasta el parque nacional natural los Farallones de Cali.",
      lat: 3.3492978,
      lng: -76.5736431,
      url: "pance",
    },
    {
      id: 3,
      name: "Plazoleta Jairo Varela",
      description:
        "La Plazoleta Jairo Varela está situada en el centro histórico de Cali, cerca de la iglesia de San Francisco y la iglesia de La Merced. Es un lugar de reunión popular tanto para los lugareños como para los turistas, y se utiliza a menudo como sede de eventos culturales y conciertos.",
      lat: 3.4550312,
      lng: -76.5370291,
      url: "plazoleta-jairo-varela",
    },
    {
      id: 4,
      name: "La Ermita",
      description:
        "Ermita es un barrio ubicado en la ciudad de Cali, Colombia. Es conocido por sus coloridas casas coloniales y su ambiente bohemio y artístico. El barrio cuenta con numerosos restaurantes, bares y galerías de arte, y es un destino popular para los turistas y los lugareños que buscan una experiencia cultural única.",
      lat: 3.4546141,
      lng: -76.5349964,
      url: "la-ermita",
    },
    {
      id: 5,
      name: "San Antonio",
      description:
        "San Antonio es un conocido barrio del occidente de la ciudad colombiana de Cali. San Antonio es famoso y reconocido como un barrio tradicional, por su arquitectura colonial y su historia.",
      lat: 3.4477814,
      lng: -76.5425425,
      url: "san-antonio",
    },
  ];

  const MusicalNoteIcon = new L.Icon({
    iconUrl: require("./assets/musica.gif"),
    iconRetinaUrl: require("./assets/musica.gif"),
    iconSize: new L.Point(30, 40),
  });

  return (
    <>
      <MapContainer center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sites.map((site) => (
          <Marker
            key={site.id}
            position={[site.lat, site.lng]}
            icon={MusicalNoteIcon}
          >
            <Popup>
              <div className="text-white font-bold text-2xl text-center bg-yellow-400 p-3 rounded-2xl cursor-default">
                <h5 className="p-4 bg-orange-500 rounded-lg">{site.name}</h5>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Descripción:</span> <br />
                    {site.description}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <Link to="/sites">
                    <PlayCircleIcon className="text-yellow-400 h-20 w-20 rounded-full bg-orange-500 shadow-2xl" />
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
