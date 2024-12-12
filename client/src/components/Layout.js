import React from "react";
import { Outlet  } from "react-router-dom";
import NavBar from "../pages/NavBar"; 


const Layout = () => {
    return (
        <div>
            <NavBar />  {/* Barra de navegación siempre visible */}
            <div>
                <Outlet />  {/* Aquí se renderizarán las páginas dependiendo de la ruta */}
            </div>
        </div>
    );
};

export default Layout;