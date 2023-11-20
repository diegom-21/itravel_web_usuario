
function Terminos() {
  return (
    <div className="container">
        <br />
        <h1 style={{fontSize: "62px", fontWeight: "bold"}}>Políticas y Términos</h1>
        {/* Card con Términos y Condiciones */}

        <div id='cardTerminos' className="card mt-4" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.3"}}>
            <div className="card-body">
                <h4 className="card-title bg-black text-white fw-bold">TÉRMINOS Y CONDICIONES DEL CONTRATO DE VIAJE</h4>
                La compra de pasajes mediante nuestra tienda virtual y aplicación móvil considera las siguientes condiciones para personas naturales y jurídicas:
                <ol className="card-text">
                    <li>Se podrá comprar utilizando cualquier método de pago autorizado a nivel nacional.</li>
                    <li>Los usuarios deben contar con un correo electrónico, el cual será confirmado mediante un enlace de validación, además de un número telefónico para establecer comunicación de ser necesario.</li>
                    <li>Las compras en línea sólo podrán realizarse para los destinos que se muestran en nuestra tienda virtual y con un día de anticipación como mínimo.</li>
                    <li>Las butacas seleccionadas desde nuestra tienda virtual en el proceso de compra son reservadas automáticamente y no podrán ser elegidas por otro cliente, por el tiempo de 10 minutos.</li>
                    <li>Posterior a la compra, el cliente recibirá un correo electrónico con el documento electrónico generado incluyendo los datos de la compra, el cual deberá ser impreso y presentado en el terminal para el embarque. EN CASO NO RECIBIRLO DEBERÁ COMUNICARSE AL TELÉFONO 987654321.</li>
                    <li>La compra debe ser realizada en nuevos soles.</li>
                    <li>Cuando se realiza una compra utilizando los medios de pago: SafetyPay y/o PagoEfectivo, el tiempo de reserva tiene una duración de dos 02 horas, si el cliente no ha pagado las reservas en dicho lapso, las butacas serán liberadas, pudiendo ser seleccionadas por otros clientes.</li>
                </ol>
            </div>
        </div>
        <br/>
        <br/>

        <div id='cardTerminos' className="card mt-4" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.3"}}>
            <div className="card-body">
                <h4 className="card-title bg-black text-white fw-bold">Políticas de Protección de datos</h4>
                En iTravel, la protección de tus datos personales es una prioridad fundamental. Nos comprometemos a garantizar la confidencialidad, integridad y seguridad de la información que nos confías. A continuación, presentamos nuestra política de protección de datos, la cual describe cómo recopilamos, utilizamos, divulgamos, transferimos y almacenamos tu información.
                <ol className="card-text">
                    <li>Recopilamos información personal de diversas formas, incluyendo cuando realizas una reserva, te registras en nuestro sitio, participas en promociones o encuestas, o interactúas con nosotros de cualquier otra manera. Los datos recopilados pueden incluir tu nombre, dirección, información de contacto, datos de pago y detalles del viaje.</li>

                    <li>Utilizamos tus datos para gestionar reservas, mejorar nuestros servicios, personalizar tu experiencia, enviar comunicaciones relevantes, y cumplir con requisitos legales. No compartimos tu información con terceros no afiliados sin tu consentimiento, excepto cuando sea necesario para proporcionarte servicios específicos o cumplir con obligaciones legales.</li>

                    <li>Implementamos medidas de seguridad adecuadas para proteger tus datos contra accesos no autorizados, divulgación, alteración y destrucción. Utilizamos protocolos seguros para la transmisión de datos y cifrado para proteger la información sensible.</li>

                    <li>Nuestra página web y aplicación móvil recopilan la dirección de correo electrónico y el identificador de Facebook con la única finalidad de enviarle sus facturas y notificaciones de compra. La aplicación móvil recoge información sobre errores con el propósito de rastrear y corregir problemas específicos en el dispositivo donde se producen, además de monitorear la tasa de errores relacionados con las diferentes versiones.</li>

                    <li>Los usuarios tienen el derecho de revisar o eliminar sus cuentas de acceso y/o datos recopilados que no estén vinculados a la facturación. También pueden solicitar un resumen de la información recopilada, así como su modificación o eliminación, mediante un correo electrónico enviado a contacto.ecommerce@oltursa.com.pe. Les pedimos incluir una copia de su documento de identidad para evitar el acceso no autorizado a sus datos personales.</li>

                    <li>Al confiar en iTravel, puedes estar seguro de que tu privacidad y seguridad son de suma importancia. Si tienes preguntas adicionales o necesitas más información, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. ¡Gracias por elegir iTravel para tus viajes interprovinciales!</li>
                </ol>
            </div>
        </div>


    </div>
  );
}

export default Terminos;
