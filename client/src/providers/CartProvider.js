import { createContext, useState, useContext, useEffect } from "react";


// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
    // Inicializar el carrito con datos del localStorage 
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar el carrito en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
