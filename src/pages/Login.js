import React, { useState } from 'react';
import logo from '../assets/img/logo.jpg';
import '../css/login.css';
import { useAuth } from '../contexts/AuthContext'; 

export function Login() {
  const { setIsLoggedIn, setUser } = useAuth();
  const [nombrecompleto, setNombrecompleto] = useState('');
  const [dni, setdni] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8090/itravel/usuarios/autenticarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombrecompleto,
          dni,
        }),
      });
  
      if (response.ok) {
        const userData = await response.json(); // Obtén los datos del usuario
        setIsLoggedIn(true);
        setUser(userData); // Almacena los datos del usuario en el contexto
        localStorage.setItem('usuario', nombrecompleto);
        window.location.href = '/';
      } else {
        console.log('Autenticación fallida. Mensaje del servidor:', await response.text());
      }
    } catch (error) {
      console.error('Error al autenticar:', error);
    }
  };

  

  return (
    <div>
      <section id='sectionlogin' style={{ display: 'flex', alignItems: 'center', height: '50vh' }}>
        <div className="col-md-6">
          <div className="mb-5">
            <a href="/"><img src={logo} alt="Logo de iTravel" className="img-fluid" style={{ maxWidth: '200px' }} /></a>
          </div>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px', marginTop: '120px' }}>¡Bienvenido a iTravel!</h2>
          <p style={{ color: 'white', fontSize: '25px', marginTop: '20px' }} className="lead">Tu plataforma de pasajes interprovinciales.</p>
          <p style={{ color: 'white', fontSize: '25px', marginTop: '20px' }}>Descubre y reserva pasajes de Buses para viajes interprovinciales con facilidad. ¡Comienza tu viaje hoy mismo!</p>
        </div>

        <div className="formbox">
          <form action="" method="" className="mt-4">
            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px'}}>iTravel</h1>
            <div className="inputbox">
              <input
                type="text"
                id="nombrecompleto"
                required
                value={nombrecompleto}
                onChange={(e) => setNombrecompleto(e.target.value)}
              />
              <label htmlFor="nombrecompleto">Nombre:</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                id="dni"
                required
                value={dni}
                onChange={(e) => setdni(e.target.value)}
              />
              <label htmlFor="dni">DNI:</label>
            </div>
            <div>
              <button
                style={{borderRadius: '40px'}}
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}



export default Login;