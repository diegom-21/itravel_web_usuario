import contactanos from "../assets/img/contactanos.png"
import calidad from "../assets/img/calidad.png"
import viaje from "../assets/img/viaje.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Lastblock(){
  return (
    <div className="container">
      <div className="row featurette" style={{ marginTop: "40px" }}>
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Contactanos. <span className="text-body-secondary">Estamos aquí para ayudarte.</span></h2>
          <p className="lead">¡Haznos saber tus preguntas, inquietudes o comentarios! Estamos comprometidos a brindarte el mejor servicio y asistencia.</p>
          <ul className="list-unstyled">
        <li>
          <FontAwesomeIcon icon={faPhone} className="me-3" />
        Teléfono: 987654321
        </li>
        <br></br>
        <li>
          <FontAwesomeIcon icon={faBuilding} className="me-3" />
          Dirección:  Av. Las Palmeras, Los Olivos 15304, Aija 4900
        </li>
        <br></br>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="me-3" />
          Correo Electrónico: antencionAlCliente@itravel.com.pe
        </li>
      </ul>
        </div>
        <div className="col-md-5">
          <img src={contactanos} alt="Contactanos" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Nuestro Compromiso. <span className="text-body-secondary">Con la calidad que mereces.</span></h2>
          <p className="lead">Nos comprometemos a ofrecerte contenido relevante y de calidad. Descubre cómo trabajamos para brindarte la mejor experiencia posible.</p>
          
        </div>
        <div className="col-md-5 order-md-1">
          <img src={calidad} alt="Nuestro Compromiso" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Descubre lo Inesperado. <span className="text-body-secondary">Tu viaje hacia lo desconocido comienza aquí.</span></h2>
          <p className="lead">Explora nuevas perspectivas, aprendizajes y desafíos. Te invitamos a descubrir lo inesperado en cada rincón de nuestro espacio digital.</p>
        </div>
        <div className="col-md-5">
          <img src={viaje} alt="Descubre lo Inesperado" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
};

export default Lastblock;
