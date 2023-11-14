import React from 'react';
import card1 from '../assets/img/cards/card1.jpg';
import card2 from '../assets/img/cards/card2.jpg';
import card3 from '../assets/img/cards/card3.jpg';
import card4 from '../assets/img/cards/card4.jpg';
import card5 from '../assets/img/cards/card5.jpg';
import card6 from '../assets/img/cards/card6.jpg';
import './cards.css';
function Cards() {
  return (
    <div className="container">
      <div>
        <br></br>
        <h1 style={{fontWeight:"bold"}}>A viajar seguro!</h1>
      </div>
      <h5 style={{ textAlign: 'center' }}>Preocupados por nuestros pasajeros y colaboradores en brindarles la confianza y garantizarles que estamos cumpliendo con los más altos estándares de calidad en seguridad vial y sanitaria.</h5>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src={card1} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Pasaje a Cusco</h3>
              <p className="card-text">Descubre la maravilla de Cusco. Compra tu pasaje ahora y disfruta de las vistas espectaculares y la rica historia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={card2} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Ten Un viaje seguro</h3>
              <p className="card-text">Cumplimos con los más altos estándares de calidad en seguridad vial y sanitaria para brindarte la confianza de viajar seguro.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={card3} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Reserva con Facilidad</h3>
              <p className="card-text">Con nuestra política de cambios y cancelaciones, planificar tu viaje es más sencillo. Adapta tus planes según tus necesidades.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src={card4} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Destino Exótico</h3>
              <p className="card-text">Explora un destino exótico. Compra tu pasaje ahora y descubre nuevas culturas, paisajes impresionantes y experiencias inolvidables.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={card5} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Ofertas Para todos</h3>
              <p className="card-text">Explora increíbles ofertas para todos los viajeros. Ya sea aventuras o momentos relajantes, tenemos promociones que se adaptan a tus preferencias.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={card6} class="card-img-top" style={{ width: 'auto', height: '230px' }}></img>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h3 className="card-title" style={{fontWeight:"bold"}}>Asistencia 24/7</h3>
              <p className="card-text">Viaja con tranquilidad. Ofrecemos asistencia las 24 horas del día, los 7 días de la semana. Tu seguridad y comodidad son nuestra prioridad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;
