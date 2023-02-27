import React from "react";
import calimenu from "../../resources/cali-menu.jpg";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen max-h-screen p-28">
        <h5 className="text-white font-bold text-4xl pl-3">Espacios Sonoros</h5>
        <div className="flex justify-between items-center">
          <h1 className="text-white font-black text-9xl">
            Santiago <br /> de Cali
          </h1>
          <div className="cursor-pointer">
            <PlayCircleIcon className="text-white h-40 w-40" />
          </div>
        </div>
      </div>
      <img src={calimenu} alt="Cali fondo" className="absolute -z-10 -top-52" />
    </>
  );
};

export default Home;
