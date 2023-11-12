import React from 'react';
import logo from '../assets/img/logo.jpg';
import '../css/login.css';
export function Login() {
  // LOGICA
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
          <form action="" method="post" className="mt-4">
            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px'}}>iTravel</h1>
            <div className="inputbox">
              <input type="email" id="email" required />
              <label htmlFor="email">Email:</label>
            </div>
            <div className="inputbox">
              <input type="password" id="password" required />
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <button style={{borderRadius: '40px'}}>Iniciar sesión</button>
            </div>
            <div className="register">
              <h5>No tienes cuenta? <a href="/registrar">Registrate</a></h5>
            </div>
          </form>
        </div>
      </section>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default Login;
