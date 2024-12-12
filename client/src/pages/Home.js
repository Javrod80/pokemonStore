import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useUser} from "../providers/UserProvider" 

const Home = () => {
    const { user } = useUser(); // Accedemos al usuario desde el contexto
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate("/login"); // Si el usuario no está autenticado, lo redirigimos a Login
        }
    }, [user, navigate]);

    return (
        <div className="home-container">
            {user.isAuthenticated ? (
                <>
                    
                    <h2>Bienvenido, {user.username}!</h2>
                    
                    <img src="/images/images.jpeg" alt="Imagen de fondo" />
                </>
            ) : (
                <p>Redirigiendo a login...</p>
            )}
        </div>
    );
};
export default Home;