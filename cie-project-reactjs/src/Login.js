// En src/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//se establecen dos varibales de estado que rastrean los valores escritos en usuario y contraseña
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías agregar lógica para autenticar al usuario, se hace la conexion con el servidor (Backend) para la autenticacion
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;


