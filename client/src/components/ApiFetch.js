import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PokemonCard from "./PokemonCard";



const ApiFetch = () => {

    const [setPokemon, searchData] = useFetch();
    const [allPokemon, setAllPokemon] = useState([]);

    // Está predeterminado Pikachu.
    useEffect(() => {
        setPokemon("pikachu");
    }, []);

    // Para recoger todos los pokemons y crear sus botones
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1134`)
            .then((res) => res.json())
            .then((res) => {
                const pokemons = res.results.map((r) => ({
                    name: r.name,
                    url: r.url,
                }));
                //Ordenar los pokemons alfabeticamente
                setAllPokemon(pokemons.sort((a, b) => a.name.localeCompare(b.name)));
            })
            .catch((error) => {
                console.error("Error al obtener los Pokémon:", error);
                setAllPokemon([]);
            });
    }, []);



    return (
        <div>
            <div className="pokemon-container-search">
                {/* Input para buscar un Pokémon específico */}
                <input type="text" name="pokemon" placeholder="Buscar Pokémon" onChange={(e) => setPokemon(e.target.value)} />
                {/* Mostrar información del Pokémon buscado */}
            </div>
            {searchData
                ? searchData.map((poke, i) => {
                    return (
                        <div key={i} className="pikachu-display">
                            <h1>  {poke.name}</h1>
                            <img src={poke.sprites?.other?.home?.front_default} alt=""></img>
                        </div>
                    );
                })
                : (
                    <div className="pikachu-display">
                        {/* Mostrar Pikachu por defecto cuando no hay datos de búsqueda */}
                        <h1>Pikachu</h1>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                            alt="Pikachu"
                        />
                    </div>
                )}
            <div id="div-buttons-pokemon">
                {allPokemon.length > 0 ? (
                    allPokemon.map((pokemon, i) => (
                        <PokemonCard key={i} pokemon={pokemon} />
                    ))
                ) : (
                    <p>Cargando Pokémon...</p>
                )}
            </div>
        </div>
    );

}

export default ApiFetch;


