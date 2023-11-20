import "../css/servicios.css"
import serv1 from "../assets/img/serv1.jpg"
import serv2 from "../assets/img/serv2.jpg"
import serv3 from "../assets/img/serv3.jpg"
function Servicios() {
    return (
        <>
        <div id="principal" style={{ textAlign: 'center', paddingTop: '34vh', paddingBottom: '100px', alignItems: 'flex-end', }}>
            <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '65px' }}>Servicios</h1>
            <p style={{ color: '#ffffff', fontSize: '30px' }}>Te ofrecemos distintos servicios pensando en ti</p>
        </div>

        <br></br>

        <div className="container">
            <div className="caja_card">

                <div className="seccion_card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="imageconten">
                                <img src={serv1} alt="Servicio Imagen" className="img-fluid" style={{marginRight: "0%"}} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contenidoserv">
                                <h4><strong>Descripción General</strong></h4>
                                <p>
                                Inicia tu experiencia con iTravel a través de nuestra variedad de servicios diseñados para proporcionarte comodidad y tranquilidad en tus viajes. Desde la venta de pasajes que te permite explorar destinos emocionantes hasta nuestras reservas flexibles que se adaptan a tus necesidades, y la asistencia 24/7 para garantizar tu seguridad y satisfacción en todo momento. Descubre cómo iTravel redefine la forma en que viajas, ofreciendo servicios destacados que hacen que cada viaje sea único y memorable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
    

                <div className="seccion_card2">
                    <div className="row" style={{marginLeft: "4%"}}>
                        <div className="col-md-4">
                            <div className="contenidoserv2">
                                <h4><strong>Agencias Asociadas</strong></h4>
                                <p>
                                Descubre las ventajas de elegir iTravel, tu portal de confianza que colabora con diversas agencias de viaje para ofrecerte una amplia gama de servicios. Nuestra red de asociados te brinda acceso a experiencias únicas y variadas. Desde destinos emocionantes hasta ofertas exclusivas, iTravel se asocia con las mejores agencias para garantizar que tu viaje sea inolvidable. Explora con confianza y elige iTravel para disfrutar de los beneficios de múltiples agencias en un solo lugar.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="imageconten2">
                                <img src={serv2} alt="Servicio Imagen" className="img-fluid" style={{marginRight: "0%"}} />
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="seccion_card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="imageconten">
                                <img src={serv3} alt="Servicio Imagen" className="img-fluid" style={{marginRight: "0%"}} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contenidoserv">
                                <h4><strong>Experiencia de Atención al Cliente</strong></h4>
                                <p>
                                En iTravel, tu satisfacción es nuestra prioridad. Nos dedicamos a ofrecerte una experiencia de atención al cliente excepcional. Nuestro equipo altamente capacitado está aquí para brindarte asistencia personalizada en cada paso de tu viaje. Desde la planificación hasta la llegada a tu destino, estamos comprometidos a proporcionarte un servicio de calidad y a resolver cualquier pregunta o inquietud que puedas tener. En iTravel, no solo vendemos pasajes, creamos experiencias inolvidables y estamos aquí para asegurarnos de que cada detalle de tu viaje sea perfecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

        </>
        
    );
  }
  
  export default Servicios;