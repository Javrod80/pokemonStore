import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
                <li>
                    <Link to="/pokemons">Pokemons</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
}