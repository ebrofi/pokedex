import React from "react";
import { useState } from "react";
import CardPopup from "./CardPopup";

var typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

const Card = ({ pokemon }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    let colorA = "#FF0000";
    let colorB = "#0000FF";

    if (pokemon.types.length === 2) {
        colorA = typeColors[pokemon.types[0].type.name];
        colorB = typeColors[pokemon.types[1].type.name];
    } else {
        colorA = typeColors[pokemon.types[0].type.name];
        colorB = "rgba(255,255,255,1)";
    }

    return (
        <div
            onClick={(e) => {
                setIsPopupOpen(true);
            }}
            className="bg-black h-80 w-60 rounded-md drop-shadow-xl p-2 m-5"
            style={{
                background: `linear-gradient(150deg, ${colorA} 0%, ${colorB} 100%)`,
            }}
        >

            <h2 className="text-xl text-white capitalize font-bold drop-shadow float-right">
                {pokemon.id}
            </h2>
            <h2 className="text-3xl text-white capitalize font-bold drop-shadow">
                {pokemon.name}
            </h2>


            {pokemon.types.map((p) => {
                let bgColor = typeColors[p.type.name];
                return (
                    <p style={{ background: `${bgColor}` }} className="text-white text-md font-semibold drop-shadow-md w-[80px] p-1 rounded-md my-2 border-2 border-black/[0.15] capitalize" key={p.type.name}>{p.type.name}</p>
                )
            })}

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="absolute w-full -bottom-10 -right-10 rendering-pixelated"
            />
            <CardPopup
                typeColors={typeColors}
                pokemonData={pokemon}
                open={isPopupOpen}
                close={() => setIsPopupOpen(false)}
            />
        </div>
    );
};

export default Card;
