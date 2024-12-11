import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">Acerca de</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/pokemons">Pokemons</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
}