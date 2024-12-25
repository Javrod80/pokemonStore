import React, { useState } from 'react';
import { useUser } from '../providers/UserProvider';  
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();  // Hook para redirigir
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUser();  // Llama a la función login del contexto

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica si el login es exitoso mediante la función login del contexto
        const success = login(username, password); 

        if (success) {
            navigate('/home');  // Redirige a Home después del login exitoso
        };
        
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            
        </div>
    );
};

export default Login;