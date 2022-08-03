import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
export default function List(){
    let[allPokemons,setallPokemons] = useState([]);
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then(resp=>resp.json())
        .then(data=> setallPokemons(data.results));
    },[])
    return(
        <div className="list-container">
            <h2>All Pokemons</h2>
            <div className="list">
                {allPokemons.map(pokemon=><Card url={pokemon.url}/>)}
            </div>
        </div>
    )
}