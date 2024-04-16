import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function Inicio() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  

    
    const handleRegistro = () => {
        navigate("/registro");
    };

    
    const handleIniciarSesion = () => {
        event.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(u => u.username === username && u.password === password);
        if (user) {
            navigate("/productos");
        } else {
            Swal.fire({
              icon: 'error',
              title: 'Error de autenticación',
              text: 'Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.',
            });
        }
    };

    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
          <h1 className="display-1 fw-bold mb-4">Iniciar Sesión</h1>
          <form onSubmit={handleIniciarSesion} className="w-100">
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <button 
                  type="submit" 
                  className="btn btn-primary w-100"
              >
                  Iniciar Sesión
              </button>
          </form>
          <div className="w-100 mt-3">
            <div className="d-grid gap-2">
              <button 
                  className="btn btn-secondary" 
                  type="button"
                  onClick={handleRegistro}
              >
                  Crear cuenta
              </button>
            </div>
          </div>
        </div>
    );
}