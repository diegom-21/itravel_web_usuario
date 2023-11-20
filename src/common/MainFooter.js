import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../css/footer.css";

function MainFooter() {
  return (
    <div className="footer-basic mt-5">
      <footer>
        <div className="enlaces" style={{ height: '0px' }}>
          <ul id="listaen">
            <li><a href="https://www.facebook.com/" className="facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/home?lang=es" className="twiter" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.youtube.com/" target="_blank" className="youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="/">Home</a></li>
            <li className="list-inline-item"><a href="/servicios">Servicios</a></li>
            <li className="list-inline-item"><a href="/nosotros">Nosotros</a></li>
            <li className="list-inline-item"><a href="/terminos">Politicas y Terminos</a></li>
            <li className="list-inline-item"><a href="#">Equipo de Desarrollo</a></li>
          </ul>
        </div>
        <p className="copyright">©Copyright Tecsup - Grupo 4 C24B </p>
      </footer>
    </div>
  );
}

export default MainFooter;
