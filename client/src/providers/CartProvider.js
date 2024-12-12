import { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (pokemon) => {
        setCart((prevCart) => {
            // Verifica si el Pokémon ya está en el carrito por su id
            const existingPokemon = prevCart.find((item) => item.id === pokemon.id);
            if (existingPokemon) {
                // Si ya está, incrementa el contador
                return prevCart.map((item) =>
                    item.id === pokemon.id
                        ? { ...item, quantity: item.quantity + 1 }  // Aumenta el contador de cantidad
                        : item
                );
            } else {
                // Si no está, agrega el Pokémon con contador 1
                return [...prevCart, { ...pokemon, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        console.log("Eliminando Pokémon con id:", id);
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id)
            console.log("Carrito despúes de eliminar:", updatedCart)
            return updatedCart // Eliminar solo el Pokémon con ese id
        })
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
