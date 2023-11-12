import React from 'react';

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pasaje a Cusco</h5>
              <p className="card-text">Descubre la maravilla de Cusco. Compra tu pasaje ahora y disfruta de las vistas espectaculares y la rica historia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Promoción Especial</h5>
              <p className="card-text">¡Aprovecha nuestra promoción especial! Compra tu pasaje ahora y recibe descuentos exclusivos en hoteles y actividades turísticas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Servicio VIP</h5>
              <p className="card-text">Viaja con estilo con nuestro servicio VIP. Disfruta de asientos cómodos, entretenimiento a bordo y atención personalizada durante tu viaje.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Destino Exótico</h5>
              <p className="card-text">Explora un destino exótico. Compra tu pasaje ahora y descubre nuevas culturas, paisajes impresionantes y experiencias inolvidables.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Oferta Relámpago</h5>
              <p className="card-text">No te pierdas nuestra oferta relámpago. Compra tu pasaje en las próximas 24 horas y recibe un descuento adicional en tu viaje interprovincial.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Asistencia 24/7</h5>
              <p className="card-text">Viaja con tranquilidad. Ofrecemos asistencia las 24 horas del día, los 7 días de la semana. Tu seguridad y comodidad son nuestra prioridad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
