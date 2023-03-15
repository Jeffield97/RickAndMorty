import React, { useEffect, useState } from "react";
import "./CardCharacter.css";
const CardCharacter = ({ urlCharacter }) => {
  const [character, setCharacter] = useState(null);

  const getInfoCharacter = async () => {
    try {
      const res = await fetch(urlCharacter);
      const character = await res.json();
      setCharacter(character);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getInfoCharacter();
  }, []);
  return (
    // <p>{urlCharacter}</p>
    <>
      {character && (
        <div
          className={`card lg:w-1/5 sm:w-6/12 bg-base-200 p-0 my-3 shadow-inner shadow-slate-700 border border-slate-700 ${
            character?.status === "Alive"
              ? `hover:border-green-500 hover:border-4`
              : `hover:border-red-500 hover:border-4`
          } hover:cursor-pointer overflow-hidden`}
        >
          <figure className="mt-10">
            <img
              className="rounded-full w-3/6 shadow-md"
              src={character.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{character.name}</h2>
            <hr />
            <div className="text-left">
              <h5 className="font-light text-sm ">Raza</h5>
              <h4 className="font-semibold text-slate-300">
                {character.species}
              </h4>
            </div>
            <div className="text-left">
              <h5 className="font-light text-sm">Origen</h5>
              <h4 className="font-semibold text-slate-300">
                {character.origin.name}
              </h4>
            </div>
            <div className="text-left">
              <h5 className="font-light text-sm">Aparición de episiodios</h5>
              <h4 className="font-semibold text-slate-300">
                {character.episode.length}
              </h4>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span> {character.status}</span>
              {""}
              <div
                className={`w-3 h-3 ${
                  character.status == "Alive" ? "bg-green-400" : "bg-red-400"
                } rounded-full`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardCharacter;
