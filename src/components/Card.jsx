import { useEffect } from "react";
import { useState } from "react";

export default function Card({url}){
    let [pokemon,getPokemon]= useState(null);
    useEffect(()=>{
        fetch (url)
        .then(resp=>resp.json())
        .then(data=>getPokemon(data))
    })
    return(
        <div className="card">
            {pokemon !== null &&(
                <>
                <p className="name">{pokemon.name}</p>
                <div className="image">
                    <img src={pokemon.sprites['front_default']} alt=""/>
                </div>
                <p className="type">Type:{pokemon.types[0].type.name}</p>
                </>
            )}
        </div>
    )
}