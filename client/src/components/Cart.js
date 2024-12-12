import React, { useState, useEffect } from "react";
import { useCart } from "../providers/CartProvider";



const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const [pokemonData, setPokemonData] = useState([]);

    // Calcular el total del carrito
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        const fetchPokemonData = async () => {
            const data = await Promise.all(
                cart.map(async (item) => {
                    const response = await fetch(item.url);
                    const pokemon = await response.json();
                    const pokemonImage = pokemon.sprites?.front_default; // Obtiene la imagen del Pokémon
                    return {
                        ...item,
                        image: pokemonImage,
                    };
                })
            );
            setPokemonData(data);  // Actualiza el estado con los datos completos
        };

        fetchPokemonData();
    }, [cart]);  // Vuelve a ejecutar cuando el carrito cambia

    return (
        <div className="cart-page">
        <div className="cart">
            <h2>Carrito</h2>
            {pokemonData.length === 0 ? (
                <p>
                    El carrito está vacío
                </p>
            ) : (
                   
                        <div className="cart-items">
                {pokemonData.map((item) => (
                    <div
                        key={item.id}
                        className="cart-item">
                        <img
                            src={item.image || "https://via.placeholder.com/50"}  // Si no hay imagen, usa un marcador de posición
                            alt={item.name || "Sin nombre"}
                            width="50"
                            height="50"

                        />
                        <p >
                            {item.name} (x{item.quantity})
                        </p>
                        <p>Price: ${item.price * item.quantity}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}

                        >
                            Eliminar
                        </button>
                    </div>
                    ))}
                    </div>

            )}
        </div>
            {pokemonData.length > 0 && (
                <div className="cart-total">
                    <h3>Total: {calculateTotal()} $</h3>
                </div>
            )}
        </div>
       
    );
};

export default Cart;


