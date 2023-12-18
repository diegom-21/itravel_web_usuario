import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "../css/detalleruta.css"


function DetalleRuta() {
  const { rutaId } = useParams();
  const [rutaDetalles, setRutaDetalles] = useState({});
  const [empresaDetalles, setEmpresaDetalles] = useState({});
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [asientoSeleccionado, setAsientoSeleccionado] = useState('');
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetalleRuta = async () => {
      try {
        const response = await fetch(`http://localhost:8090/itravel/rutas/getById/${rutaId}`);
        if (response.ok) {
          const data = await response.json();
          setRutaDetalles(data);

          const empresaResponse = await fetch(`http://localhost:8090/itravel/empresas/getById/${data.empresaid}`);
          if (empresaResponse.ok) {
            const empresaData = await empresaResponse.json();
            setEmpresaDetalles(empresaData);
          } else {
            console.error('Error al obtener detalles de la empresa');
          }
        } else {
          console.error('Error al obtener detalles de la ruta');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchDetalleRuta();
  }, [rutaId]);

  const handleAsientoClick = (asiento) => {
    setMostrarFormulario(true);
    setAsientoSeleccionado(asiento);
  };

  const handleCompra = async (e) => {
    e.preventDefault();

    try {
      // Lógica de compra...
      navigate(`/detallesCompra/${nombre}/${dni}/${asientoSeleccionado}/${rutaDetalles.origenciudad}/${rutaDetalles.nombreTerminalInicio}/${rutaDetalles.destinociudad}/${rutaDetalles.nombreTerminalFinal}/${rutaDetalles.duracionviaje}/${rutaDetalles.horainicio}/${rutaDetalles.horasalida}/${rutaDetalles.precio}/${empresaDetalles.nombre}`);
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  };

  return (
    <>
    <div id="pasaje" style={{ textAlign: 'center', paddingTop: '34vh', paddingBottom: '100px', alignItems: 'flex-end', }}>
            <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '65px' }}>Compra de Pasaje</h1>
            <p style={{ color: '#ffffff', fontSize: '30px' }}>Estas cerca de conocer tu destino ideal</p>
    </div>
    <div className="container">
      <br></br><br></br>
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center" style={{ fontWeight:"bold", fontSize:"40px" }}>Selección de Asientos</h2><br></br>
          <div style={{textAlign: 'center' }}>
            <ul className="bus_marco" style={{ display: 'inline-block',border: '2px solid #000', borderRadius: '10px', padding: '20px' }}>
              {[...Array(6)].map((_, rowIndex) => (
                <li key={rowIndex} className="d-flex">
                  {[...Array(5)].map((_, colIndex) => (
                    <div key={colIndex} className="asiento_marco">
                      {colIndex % 1 === 0 && (
                        <button
                          type="button"
                          className="btn btn-outline-dark mb-2"
                          style={{
                            width: '57px',
                            height: '48px',
                            marginLeft: colIndex === 2 ? '10px' : '6px', 
                            visibility: colIndex === 2 ? 'hidden' : 'visible', 
                          }}
                          onClick={() => handleAsientoClick(rowIndex * 5 + colIndex + 1 + rowIndex * 2)}
                        >
                          N°{rowIndex * 5 + colIndex + 1 + rowIndex * 2}
                        </button>
                      )}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          {/* formulario */}
          {mostrarFormulario && (
            <form onSubmit={handleCompra}>
              <div className="mb-3">
                <h3 htmlFor="nombre" className="form-label" style={{fontWeight: "bold"}}>Nombre</h3>
                <input type="text" className="form-control" id="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <h3 htmlFor="dni" className="form-label" style={{fontWeight: "bold"}}>DNI</h3>
                <input type="text" className="form-control" id="dni" required value={dni} onChange={(e) => setDni(e.target.value)} />
              </div>
              {/* ruta */}
              <p style={{ fontSize: '24px' }}><strong>Asiento seleccionado: </strong>{asientoSeleccionado}</p>
              <p style={{fontSize: '24px'}}><strong>Origen: </strong>{rutaDetalles.origenciudad} | {rutaDetalles.nombreTerminalInicio}</p>
              <p style={{fontSize: '24px'}}><strong>Destino: </strong>{rutaDetalles.destinociudad} | {rutaDetalles.nombreTerminalFinal}</p>
              <p style={{fontSize: '24px'}}><strong>Duración del viaje: </strong>{rutaDetalles.duracionviaje}</p>
              <p style={{fontSize: '24px'}}><strong>Hora de Salida: </strong>{rutaDetalles.horainicio}</p>
              <p style={{fontSize: '24px'}}><strong>Hora de Llegada: </strong>{rutaDetalles.horasalida}</p>
              <p style={{fontSize: '24px'}}><strong>Precio: </strong>${rutaDetalles.precio}</p>
              {/* empresa */}
              <p style={{fontSize: '24px'}}><strong>Nombre de la empresa: </strong>{empresaDetalles.nombre}</p>
              <button type="submit" className="btn btn-outline-dark" onClick={handleCompra}>Comprar</button>
            </form>
          )}

        </div>
      </div>
    </div>
    
    
    </>



    
  );
}

export default DetalleRuta;