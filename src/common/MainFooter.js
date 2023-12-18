import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../css/footer.css";

function MainFooter() {
  return (
    <div className="footer-basic mt-5">
      <footer>
        <div className="enlaces" style={{ height: '0px' }}>
          <ul id="listaen">
            <li><a href="https://www.facebook.com/" className="facebook" ><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/home?lang=es" className="twiter" ><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.youtube.com/"  className="youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://www.instagram.com/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="/">Home</a></li>
            <li className="list-inline-item"><a href="/servicios">Servicios</a></li>
            <li className="list-inline-item"><a href="/nosotros">Nosotros</a></li>
            <li className="list-inline-item"><a href="/terminos">Politicas y Terminos</a></li>
          </ul>
        </div>
        <p className="copyright">©Copyright Tecsup Itravel - Grupo 4 C24B </p>
      </footer>
    </div>
  );
}

export default MainFooter;
