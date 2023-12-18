import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/compra.css';

function DetallesCompra() {
    const { nombre, dni, asiento, origen, nombreTerminalInicio, destino, nombreTerminalFinal, duracionViaje,precio, horaInicio, horaSalida, nombreEmpresa } = useParams();
  // Agrega un log para verificar los datos recibidos
  console.log('Detalles de la compra:', { nombre, dni, asiento });

  return (
    <>
    <div id="compra" style={{ textAlign: 'center', paddingTop: '34vh', paddingBottom: '100px', alignItems: 'flex-end' }}>
        <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '65px' }}>¡Compra Exitosa!</h1>
        <p style={{ color: '#ffffff', fontSize: '30px' }}>¡Te damos la bienvenida a tu próximo viaje de aventuras!</p>
    </div><br></br>


    <div className="container" style={{ display: 'flex', justifyContent: 'center', height: '61vh'}}>
        <div style={{ width: '400px', border: '2px solid black', paddingBottom: '0px', textAlign: 'center'}}>
            <h2 style={{marginTop: '10px', fontSize: '36px', fontWeight: 'bold'}}>Detalles de la Compra</h2><hr></hr>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>DNI:</strong> {dni}</p><hr></hr>
            <p><strong>Asiento:</strong> {asiento}</p>
            <p><strong>Origen:</strong> {origen} - {nombreTerminalInicio}</p>
            <p><strong>Destino:</strong> {destino} - {nombreTerminalFinal}</p><hr></hr>
            <p><strong>Duración del viaje:</strong> {duracionViaje}</p>
            <p><strong>Hora de Salida:</strong> {horaInicio}</p><hr></hr>
            <p><strong>Hora de Llegada:</strong> {horaSalida}</p>
            <p><strong>Nombre de la empresa:</strong> {nombreEmpresa}</p>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', marginTop: '20px auto', width: '100%' }}>
                <h3><strong>Precio:</strong> ${precio}</h3>
            </div>
        </div>
    </div>

    </>
    
  );
}

export default DetallesCompra;
