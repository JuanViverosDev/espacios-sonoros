import React from "react";
import { useParams } from "react-router-dom";
import { sites } from "./mocks/sitesInfo";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import calimenu from "../../resources/cali-menu.gif";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const Site = () => {
  const { siteId } = useParams();
  const site = sites.find((site) => site.url === siteId);
  const [currentImg, setCurrentImg] = useState(0);

  const audio = new Audio(site?.audio);
  audio.play();
  audio.loop = true;

  return (
    <div>
      <Link
        className="text-yellow-400 absolute z-10 m-10 flex items-center cursor-pointer"
        to="/sites"
        onClick={() => audio.pause()}
      >
        <ArrowLeftCircleIcon className="h-10 w-10 " />
        <h1 className="ml-3 font-semibold text-xl">Mapa</h1>
      </Link>
      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-between h-screen max-h-screen p-20 col-span-2 pt-32">
          <div className="flex justify-between items-center cursor-default">
            <h1 className="text-white font-black text-9xl">{site.name}</h1>
          </div>
          <div className="flex justify-between items-center cursor-default">
            <p className="text-white font-semibold text-2xl">
              {site.description}
            </p>
          </div>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-yellow-400 to-orange-600 flex flex-col justify-end items-center">
          <img
            src={site.images[currentImg].url}
            className="h-screen object-cover"
          />
          <div className="justify-center absolute z-10 m-16">
            <div className="bg-yellow-400 p-5 rounded-xl">
              <Pagination
                count={site.images.length}
                page={currentImg + 1}
                onChange={(e, page) => setCurrentImg(page - 1)}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={calimenu}
        alt="Cali fondo"
        className="absolute -z-10 -top-52 opacity-20"
      />
    </div>
  );
};

export default Site;
