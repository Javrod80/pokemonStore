import React from "react";
import { useCart } from "./CartProvider";

export default function PokemonCard({ pokemon }) {
    const { addToCart } = useCart();

    // Obtener ID del Pokémon desde la URL
    console.log(pokemon.url);
    const id = pokemon.url.split("/")[6];
    console.log(id);




    return (

        <div className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork//${id}.png`} alt={pokemon.name} width="100" />
            <button onClick={() => addToCart({ ...pokemon, id })}>Agregar al carrito</button>
        </div>

    );
}