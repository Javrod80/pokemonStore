import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PokemonCard from "./PokemonCard";
import { useCart } from "../providers/CartProvider";



const ApiFetch = () => {

    const [setPokemon, searchData] = useFetch();
    const [allPokemon, setAllPokemon] = useState([]);
    const { addToCart } = useCart();
    
    // Función para generar un precio aleatorio
    const generateRandomPrice = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;

    // Obtener precios desde localStorage 
    const getStoredPrices = () => JSON.parse(localStorage.getItem("pokemonPrices")) || {};
    // Guardar precios actualizados en localStorage
    const savePricesToStorage = (prices) => {
        localStorage.setItem("pokemonPrices", JSON.stringify(prices));
    };
    // Estado para almacenar los precios
    const [prices, setPrices] = useState(getStoredPrices);

    // Para recoger todos los pokemons y crear sus botones
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1134`)
            .then((res) => res.json())
            .then((res) => {
                const pokemons = res.results.map((r) => ({
                    name: r.name,
                    url: r.url,
                    
                }));
                // Generar precios únicos para cada Pokémon
                const newPrices = {...prices};
                pokemons.forEach((pokemon) => {
                    if (!prices[pokemon.name]) {
                        newPrices[pokemon.name] = generateRandomPrice();
                    }
                });
                // Actualizar precios
                setPrices(newPrices);
                savePricesToStorage(newPrices);
                //Ordenar los pokemons alfabeticamente
                setAllPokemon(pokemons.sort((a, b) => a.name.localeCompare(b.name)));
            })
            .catch((error) => {
                console.error("Error al obtener los Pokémon:", error);
                setAllPokemon([]);
            });
    }, []);
    // Está predeterminado Pikachu.
    useEffect(() => {
        setPokemon("pikachu");
    }, []);

    return (
        <div>
            <div className="pokemon-container-search">
                <p>Busca tu Pokemon haber si lo tenemos....</p>
                {/* Input para buscar un Pokémon específico */}
                <input type="text" name="pokemon" placeholder="Buscar Pokémon" onChange={(e) => setPokemon(e.target.value)} />
                {/* Mostrar información del Pokémon buscado */}
            </div>
            {searchData
                ? searchData.map((poke, i) => {
                        const pokemon = allPokemon.find((p) => p.name === poke.name);
                         const pokemonPrice = prices[poke.name];

                    return (
                        <div key={i} className="pikachu-display">

                            <h1>  {poke.name}</h1>
                            <img src={poke.sprites?.other?.home?.front_default} alt=""></img>
                            <p>Price: ${pokemonPrice || "Loading..."}</p>
                            <button
                                onClick={() =>
                                    addToCart({
                                        ...pokemon,
                                        price: pokemonPrice,
                                        id: poke.id || pokemon?.url.split("/")[6],
                                    })
                                }
                            >
                                Agregar al carrito
                            </button>

 
    
        
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
                        <PokemonCard
                            key={i}
                            pokemon={{
                                ...pokemon,
                                price: prices[pokemon.name], // Pasar el precio desde el estado "prices"
                            }}
                        />
                    ))
                ) : (
                    <p>Cargando Pokémon...</p>
                )}
            </div>
        </div >
    );

}

export default ApiFetch;


