import React from 'react';
import "../css/nosotros.css"
import uno from "../assets/img/uno.jpg"
import dos from "../assets/img/dos.jpg"
import tres from "../assets/img/tres.jpg"
import cuatro from "../assets/img/cuatro.jpg"
import cinco from "../assets/img/cinco.jpg"
import seis from "../assets/img/seis.jpg"
import ilustracion from "../assets/img/ilustracion.svg"
import ilustracion1 from "../assets/img/ilustracion1.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus,faTicketAlt } from '@fortawesome/free-solid-svg-icons';



function Nosotros() {
    return (
        <div>
      <header className="hero">
        <div className="textos-hero">
          <h1>Bienvenido a Itravel</h1>
          <p>Transparencia y calidad solo para ti</p>
          <a href="#contacto">Contactanos</a>
        </div>
        <div id="visita" className="svg-hero" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'rgb(255, 255, 255)' }}></path>
          </svg>
        </div>
      </header>

      <section className="wave-contenedor website">
        <img src={ilustracion1} alt="ilustracion1" />
        <div className="contenedor-textos-main">
          <h2 className="titulo left">Explora Nuestro Mundo de Destinos</h2>
          <p className="parrafo">En el mundo de los viajes interprovinciales, somos tu mejor opción. Te llevamos a descubrir destinos innovadores y experiencias únicas. En nuestra plataforma, encontrarás beneficios exclusivos y privados que harán de tus viajes una experiencia inigualable. ¡Embárcate en la aventura y visita nuestra página para explorar todo lo que tenemos para ofrecer!</p>
          <a href="/" className="cta">Descubre Más</a>

        </div>
      </section>

      <section className="info">
        <div className="contenedor">
        <h2 className="titulo">Descubre Nuestra Experiencia Única en Viajes</h2>
        <p className="parrafo">En nuestro servicio de venta de pasajes interprovinciales, te ofrecemos mucho más que simples boletos. Nos dedicamos a proporcionarte experiencias de calidad, conectándote con las mejores agencias de viajes. Explora destinos asombrosos, disfruta de un servicio excepcional y mantén beneficios exclusivos al unirte a nuestra comunidad. Únete a nosotros y haz de cada viaje una aventura inolvidable.
        </p>
        </div>
      </section>

      <section className="contenedor">
        <h2 className="titulo"></h2>
        <div className="content-cards">
          <article className="cards">
            <i><FontAwesomeIcon icon={faBus} /></i>
            <h3>Venta de Pasajes</h3>
            <p>Compra tus pasajes interprovinciales con nosotros y disfruta de un viaje cómodo y seguro.</p>
            <a href="#visita" className="cta">Ver más</a>
          </article>
          <article className="cards">
            <i><FontAwesomeIcon icon={faTicketAlt} /></i>
            <h3>Ofertas Especiales</h3>
            <p>Descubre nuestras ofertas especiales en pasajes. ¡No te pierdas los descuentos exclusivos!</p>
            <a href="#visita" className="cta">Ver más</a>
          </article>
        </div>
      </section>

      <section className="galeria">
        <div className="contenedor">
          <h2 className="titulo"><strong>Nos Expandimos</strong></h2>
          <h3 style={{ fontWeight: 300, fontSize: '28px', textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>Tenemos distintos destinos en provincias importantes para el turismo</h3>
          <article className="galeria-cont">
            <img src={uno} alt="uno" />
            <img src={dos} alt="dos" />
            <img src={tres} alt="tres" />
            <img src={cuatro} alt="cuatro" />
            <img src={cinco} alt="cinco" />
            <img src={seis} alt="seis" />
          </article>
        </div>
      </section>

      <section className="info-last">
        <div className="contenedor last-section">
          <div className="contenedor-textos-main">
          <h2 className="titulo left">Descubre Tu Próxima Aventura</h2>
          <p className="parrafo">
            "Explora más allá de lo ordinario. Encuentra las mejores opciones de viaje con nosotros, donde cada boleto es el pasaporte a nuevas experiencias".
            En nuestra empresa de pasajes interprovinciales, creemos en hacer que tus viajes sean inolvidables. No solo vendemos boletos, ofrecemos acceso a emocionantes aventuras a través de diversas agencias, sin cargos adicionales. Tu próximo destino está a un boleto de distancia.
          </p>
          </div>
          <img src={ilustracion} alt="ilustracion" />
        </div>
        <div className="svg-wave" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#353333' }}></path>
          </svg>
        </div>
      </section>

      <footer className="footer" id="contacto">
        <div className="contenedor">
          <h2 className="titulo">Contactanos</h2>
          <form action="" className="form">
            <input className="input" type="text" name="" id="" placeholder="Nombre" />
            <input className="input" type="email" name="" id="" placeholder="Email" />
            <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <input className="input" type="submit" value="Enviar" />
          </form>
        </div>
      </footer>
    </div>
    );
}

export default Nosotros;
