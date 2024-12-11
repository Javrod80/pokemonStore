import { useState, useEffect } from "react";


const useFetch = () => {

    const [searchData, setSearchData] = useState([]);
    const [pokemon, setPokemon] = useState("pikachu");
    const [error, setError] = useState(null);

    // Recoge la info del pokemon (predeterminado está "Pikachu")
    useEffect(() => {
        console.log("Fetching data for:", pokemon);
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setSearchData([res]);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        }
    }, [pokemon]);

    return [setPokemon, searchData, error];
};

export default useFetch;