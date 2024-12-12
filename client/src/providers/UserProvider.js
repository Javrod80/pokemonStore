import { createContext, useState, useContext } from "react";


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
            alert("Credenciales incorrectas");
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