import circle1 from '../assets/img/circle1.png'
import circle2 from '../assets/img/circle2.png'
import circle3 from '../assets/img/circle3.png'
function TuComponente() {
  return (
    <section className="info" style={{ marginTop: "40px" }}>
        <div className="contenedor">
            <h2 className="titulo">¿Por qué Elegirnos?</h2>
            <div className="row mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="col-lg-3 mb-6" style={{ textAlign: 'center' }}>
                    <img src={circle1} alt=""  width="150" height="150" />
                    <h3 className="fw-normal">Muchos Destinos</h3>
                    <p>Descubre mundos nuevos con nuestra amplia variedad de destinos. Desde ciudades vibrantes hasta paisajes pintorescos, ofrecemos la experiencia perfecta para cada viajero.</p>
                </div>

                <div className="col-lg-3 mb-6" style={{ textAlign: 'center' }}>
                    <img src={circle2} alt=""  width="150" height="150" />
                    <h3 className="fw-normal">Flota Moderna</h3>
                    <p>Viaja con estilo y comodidad en nuestra flota de última generación. Asientos espaciosos, comodidades modernas y un viaje seguro te esperan en cada trayecto.</p>
                </div>
                
                <div className="col-lg-3 mb-6" style={{ textAlign: 'center' }}>
                    <img src={circle3} alt=""  width="150" height="150" />
                    <h3 className="fw-normal">Control GPS</h3>
                    <p>Con nuestro sistema de Control GPS, garantizamos rutas eficientes y seguras. Mantente informado sobre la ubicación de tu viaje en tiempo real.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TuComponente;
