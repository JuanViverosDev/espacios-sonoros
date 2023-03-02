import React from "react";
import calimenu from "../../resources/cali-menu.jpg";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen max-h-screen p-28">
        <div className="flex ">
          <div className="text-white font-bold text-4xl pl-3 bg-yellow-400 p-4 rounded-2xl shadow-xl shadow-yellow-400 cursor-default">
            <h5 className="p-4 bg-orange-500 rounded-lg">Espacios Sonoros</h5>
          </div>
        </div>
        <div className="flex justify-between items-center cursor-default">
          <h1 className="text-white font-black text-9xl">
            Santiago <br /> de <span className="text-yellow-400">Cali</span>
          </h1>
          <div className="cursor-pointer">
            <Link to="/sites">
              <PlayCircleIcon className="text-orange-500 h-40 w-40 rounded-full bg-yellow-400 shadow-yellow-400 shadow-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <img
        src={calimenu}
        alt="Cali fondo"
        className="absolute -z-10 -top-52 opacity-90"
      />
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-80 -right-96"
        height=""
      >
        <path
          fill="#F1C21B"
          d="M48.1,-54.2C57.1,-39.1,55.5,-19.5,50.4,-5.1C45.3,9.3,36.7,18.7,27.7,34.7C18.7,50.7,9.3,73.4,1.4,72C-6.6,70.7,-13.2,45.3,-26.5,29.2C-39.8,13.2,-59.8,6.6,-67.3,-7.5C-74.8,-21.6,-69.8,-43.2,-56.5,-58.3C-43.2,-73.4,-21.6,-82,-1,-81C19.5,-80,39.1,-69.3,48.1,-54.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-2/3 -left-96 -z-10"
        height=""
      >
        <path
          fill="#F1C21B"
          d="M48.1,-54.2C57.1,-39.1,55.5,-19.5,50.4,-5.1C45.3,9.3,36.7,18.7,27.7,34.7C18.7,50.7,9.3,73.4,1.4,72C-6.6,70.7,-13.2,45.3,-26.5,29.2C-39.8,13.2,-59.8,6.6,-67.3,-7.5C-74.8,-21.6,-69.8,-43.2,-56.5,-58.3C-43.2,-73.4,-21.6,-82,-1,-81C19.5,-80,39.1,-69.3,48.1,-54.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-96 -left-96 -z-10"
        height=""
      >
        <path
          fill="#F97316"
          d="M42.1,-29.5C56.5,-15.6,71.4,2,70.6,20.4C69.9,38.9,53.5,58,36.1,61.2C18.6,64.4,0,51.6,-16.3,41C-32.5,30.4,-46.4,22.1,-53.3,7.6C-60.2,-6.8,-60.2,-27.4,-50.1,-40.3C-40.1,-53.2,-20,-58.5,-3.1,-56.1C13.9,-53.6,27.8,-43.4,42.1,-29.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-2/3 -right-96 -z-10"
        height=""
      >
        <path
          fill="#F97316"
          d="M42.1,-29.5C56.5,-15.6,71.4,2,70.6,20.4C69.9,38.9,53.5,58,36.1,61.2C18.6,64.4,0,51.6,-16.3,41C-32.5,30.4,-46.4,22.1,-53.3,7.6C-60.2,-6.8,-60.2,-27.4,-50.1,-40.3C-40.1,-53.2,-20,-58.5,-3.1,-56.1C13.9,-53.6,27.8,-43.4,42.1,-29.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};

export default Home;
