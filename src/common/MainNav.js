import logo from '../assets/img/logo.jpg';

function MainNav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Seguridad</a>
            </li>
          </ul>
          <a className="navbar-brand mx-auto" href="/"><img src={logo} alt="Logo de iTravel" className="img-fluid" style={{ maxWidth: '200px' }} /></a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/login">Iniciar Sesion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registrar">Registrar</a>
            </li>
          </ul>
        </div>
    </nav>
    );
  }
  
  export default MainNav;