import React from "react";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();  // Llama a la función logout del contexto
        navigate("/");  // Redirige a la página de login después de cerrar sesión
    };

    return (
        <div className="user-profile">
            {!user.isAuthenticated ? (
                <p>Por favor, inicia sesión.</p>
            ) : (
                <div>
                    <h2>Bienvenido, {user.username}!</h2>
                    <img src="/images/descarga.jpeg" alt="Imagen de fondo" />
                        <button onClick={handleLogout}>Cerrar sesión</button>
                       
                </div>
            )}
        </div>
    );
    
}