import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para navegación

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        setError(''); // Resetea el estado de error

        try {
            // Envía la solicitud de inicio de sesión al backend
            const response = await axios.post('http://localhost:3000/usuario/login', {
                email,
                password,
            });

            // Guarda el token en localStorage
            localStorage.setItem('token', response.data.token);

            // Mensaje de éxito (o redirección)
            alert('Inicio de sesión exitoso');
            navigate('/'); // Redirige al menú de inicio
        } catch (err) {
            // Manejo de errores
            const errorMsg = err.response?.data?.msg || 'Error al iniciar sesión';
            setError(errorMsg);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Iniciar Sesión
                </button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
};

export default Login;
