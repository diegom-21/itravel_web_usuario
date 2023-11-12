import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/Inicio';
import MainNav from './common/MainNav.js';
import MainFooter from './common/MainFooter.js';
import Nosotros from './pages/Nosotros.js';
function App(){
    return(
        <BrowserRouter>
          {!['/login', '/registrar'].includes(window.location.pathname) && <MainNav />}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Register />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
          {!['/login', '/registrar'].includes(window.location.pathname) && <MainFooter />}
        </BrowserRouter>

    )
}

export default App;