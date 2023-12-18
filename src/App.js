import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.js';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/Inicio';
import MainNav from './common/MainNav.js';
import MainFooter from './common/MainFooter.js';
import Nosotros from './pages/Nosotros.js';
import Terminos from './pages/Terminos.js';
import Servicios from './pages/Servicios.js';
import RutasDisponibles from './pages/RutasDisponibles.js';
import DetalleRuta from './pages/DetalleRuta.js';
import DetallesCompra from './pages/DetallesCompra.js';

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        {!['/login', '/registrar'].includes(window.location.pathname) && <MainNav />}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/rutasDisponibles" element={<RutasDisponibles />} />
          <Route path="/detalleRuta/:rutaId" element={<DetalleRuta />} />
          <Route
          path="/detallesCompra/:nombre/:dni/:asiento/:origen/:nombreTerminalInicio/:destino/:nombreTerminalFinal/:duracionViaje/:horaInicio/:horaSalida/:precio/:nombreEmpresa"
          element={<DetallesCompra />}/>
        </Routes>
        {!['/login', '/registrar'].includes(window.location.pathname) && <MainFooter />}
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App;
