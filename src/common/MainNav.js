import React, { useState, useEffect } from 'react'; // Agrega 'useEffect' aquí
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/img/logo.jpg';
import '../css/mainnav.css';

function MainNav() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    // Agregar un log después de un segundo si el usuario está autenticado
    if (isLoggedIn) {
      setTimeout(() => {
        console.log('Datos del usuario:', user);
      }, 1000);
    }
  }, [isLoggedIn, user]);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className={`nav-link ${hoveredLink === 0 ? 'hovered' : ''}`}
              href="/nosotros"
              onMouseEnter={() => setHoveredLink(0)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{fontSize: "20px"}}
            >
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${hoveredLink === 1 ? 'hovered' : ''}`}
              href="/servicios"
              onMouseEnter={() => setHoveredLink(1)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{fontSize: "20px"}}
            >
              Servicios
            </a>
          </li>
        </ul>
        <a className="navbar-brand mx-auto" href="/">
          <img
            src={logo}
            alt="Logo de iTravel"
            className="img-fluid"
            style={{ maxWidth: '200px' }}
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className={`nav-link ${hoveredLink === 2 ? 'hovered' : ''}`}
              href="/terminos"
              onMouseEnter={() => setHoveredLink(2)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{fontSize: "20px"}}
            >
              Términos
            </a>
          </li>
          {isLoggedIn ? (
            // Si el usuario está autenticado, muestra el nombre del usuario
            <li className="nav-item">
              <span className={`nav-link ${hoveredLink === 4 ? 'hovered' : ''}`} style={{ fontSize: "20px" }}>
                {user.nombrecompleto}
              </span>
            </li>
          ) : (
            // Si el usuario no está autenticado, muestra el enlace de inicio de sesión
            <li className="nav-item">
              <a
                className={`nav-link ${hoveredLink === 4 ? 'hovered' : ''}`}
                href="/login"
                onMouseEnter={() => setHoveredLink(4)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ fontSize: "20px" }}
              >
                Iniciar Sesión
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;