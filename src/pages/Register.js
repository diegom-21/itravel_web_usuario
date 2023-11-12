import React from 'react';
import '../css/login.css';
export function Register() {
  return (
    <div>
      <section id='sectionlogin' style={{ display: 'flex', alignItems: 'center', height: '50vh' }}>
        <div className="formbox">
          <form action="" method="post" className="mt-3">
            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px'}} >Registrate</h1>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" id="email" name="email" required />
              <label>Correo</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="text" id="password" name="password" required />
              <label>Contraseña</label>
            </div>
            <div>
              <button style={{borderRadius: '40px'}}>Guardar</button>
            </div>
            <div className="cancelar">
              <h5><a href="/login">Cancelar</a></h5>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
