import React from "react";
import { useState, useEffect } from "react"
import CardPopup from "./CardPopup";

var typeColors = {
    'normal' : '#A8A77A',
    'fire' : '#EE8130',
    'water' : '#6390F0',
    'electric' : '#F7D02C',
    'grass' : '#7AC74C',
    'ice' : '#96D9D6',
    'fighting' : '#C22E28',
    'poison' : '#A33EA1',
    'ground' : '#E2BF65',
    'flying' : '#A98FF3',
    'psychic' : '#F95587',
    'bug' : '#A6B91A',
    'rock' : '#B6A136',
    'ghost' : '#735797',
    'dragon' : '#6F35FC',
    'dark' : '#705746',
    'steel' : '#B7B7CE',
    'fairy' : '#D685AD',
};


const Card = ({pokemon}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const test = () => {
        console.log(isPopupOpen)
        setIsPopupOpen(false)
        console.log(isPopupOpen)
        console.log("It worked")
    }

    useEffect(() => {
        console.log("status changed!")
    }, [isPopupOpen]);

    let colorA = "#FF0000";
    let colorB = "#0000FF";

    if (pokemon.types.length === 2) {
        colorA = typeColors[pokemon.types[0].type.name];
        colorB = typeColors[pokemon.types[1].type.name];
    } else {
        colorA = typeColors[pokemon.types[0].type.name];
        colorB = "rgba(0,0,0,0)"
    }
    
    return (
        <div className="bg-black h-80 w-60 rounded-md drop-shadow-xl p-2 m-5" style={{background:`linear-gradient(150deg, ${colorA} 0%, ${colorB} 100%)`}}>
            <h2 className="text-3xl text-white capitalize font-bold drop-shadow">{pokemon.name}</h2>
            
                {pokemon.types.map(p => (
                    <p className="text-white drop-shadow capitalize" key={p.type.name}>{p.type.name}</p>
                ))}
            <button onClick={() => setIsPopupOpen(true)} className="bg-black">Open</button>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="absolute w-full -bottom-10 -right-10 rendering-pixelated"/>
            <CardPopup open={isPopupOpen} close={() => test()} />
        </div>
    )
}

export default Card

// making the entire card div clickable made all the children clickable thus executing the function setting the state to true again.
// temporary fixed by having another button for opening the popup
// todo: finding a way to make antire div clickable without setting the state to true over and over again