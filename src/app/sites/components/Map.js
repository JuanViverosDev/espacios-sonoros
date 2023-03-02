import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { sites } from "../mocks/sitesInfo";
const Map = () => {
  const navigate = useNavigate();
  const position = [3.3205152, -76.5151578];

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
                <div className="cursor-pointer ml-10 hover:scale-110 transform transition duration-500 ease-in-out">
                  <Link to={`/sites/${site.url}`}>
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
