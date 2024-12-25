import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";


// Crea el contexto
const UserContext = createContext();
// Proveedor del contexto
export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "", isAuthenticated: false  });

    const updateUser = (updates) => {
        setUser((prevUser) => ({ ...prevUser, ...updates }));
    };
    // Función para simular el login
    const login = (username, password) => {
        
        if (username === "Javier" && password === "pikachu") {
            setUser({  isAuthenticated: true , username });
            return true;
        } else {
            toast.error('Credenciales incorrectas', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            className: 'custom-toast',
                            bodyClassName: 'custom-toast-body',
            });
            return false; 
        }
    };
    // Función para cerrar sesión
    const logout = () => {
        setUser({ name: "" ,isAuthenticated: false });
    };
    return (
        <UserContext.Provider value={{ user, updateUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);