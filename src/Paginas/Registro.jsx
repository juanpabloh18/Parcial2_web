import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Registro() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistro = () => {
        event.preventDefault();
        const newUser = {
            username,
            password,
        };
        if(!username || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: 'Por favor, complete todos los campos.',
            });
            return;
        }
        
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(u => u.username === username);
        if (user) {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: 'El usuario ya existe. Por favor, elija otro nombre de usuario.',
            });
        } else {
            const updatedUsers = [...storedUsers, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            navigate("/");
        }
    };
    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
          <h1 className="display-1 fw-bold mb-4">Registro</h1>
          <form onSubmit={handleRegistro} className="w-100">
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
                  Crear Usuario
              </button>
          </form>
          <div className="w-100 mt-3">
            <div className="d-grid gap-2">
              <button 
                  className="btn btn-secondary" 
                  type="button"
                  onClick={handleLogin}
              >
                  Volver
              </button>
            </div>
          </div>
        </div>
    );
}