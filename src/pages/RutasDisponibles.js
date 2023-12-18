import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function RutasDisponibles() {
  const { state } = useLocation();
  const [empresas, setEmpresas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Realiza la llamada a la API para obtener la información de las empresas
    const fetchEmpresas = async () => {
      try {
        const response = await fetch('http://localhost:8090/itravel/empresas/getAll');
        if (response.ok) {
          const data = await response.json();
          setEmpresas(data);
        } else {
          console.error('Error al obtener las empresas');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    // Llama a la función para obtener las empresas cuando el componente se monta
    fetchEmpresas();
  }, []);

  console.log('Empresas:', empresas);

  return (
    <>
    <div id="rutas" style={{ textAlign: 'center', paddingTop: '34vh', paddingBottom: '100px', alignItems: 'flex-end' }}>
      {state && state.rutas && state.rutas.length > 0 ? (
        <>
          <h2 style={{ color: '#fff', fontWeight: 'bold', fontSize: '40px', marginBottom: '20px' }}>Resultados de Rutas</h2>
          <p style={{ color: '#ffffff', fontSize: '24px' }}>Se han encontrado rutas para tu búsqueda</p>
        </>
      ) : (
        <>
          <h2 style={{ color: '#fff', fontWeight: 'bold', fontSize: '40px', marginBottom: '20px' }}>No hay rutas disponibles</h2>
          <p style={{ color: '#ffffff', fontSize: '24px' }}>Intenta una búsqueda diferente</p>
        </>
      )}
    </div>



    <div className="container">
      <br />
      {state && state.rutas && state.rutas.length > 0 && empresas.length > 0 ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4" style={{ background: '#ccc', padding: '10px 0', textAlign: 'center' }}>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Origen</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Destino</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Duración</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Precio</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Hora Salida</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Hora Llegada</h2>
            <h2 style={{ borderRight: '1px solid #fff', padding: '0 10px', fontWeight: 'bold' }}>Empresas</h2>
            <h2 style={{ padding: '0 38px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faShoppingCart} />
</h2>
          </div>

          {state.rutas.map((ruta) => {
            const empresa = empresas.find((empresa) => empresa.id === ruta.empresaid);
            return (
              <div key={ruta.id} className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h3>{ruta.origenciudad}</h3>
                  <h3>{ruta.destinociudad}</h3>
                  <h3>{ruta.duracionviaje}</h3>
                  <h3>${ruta.precio}</h3>
                  <h3>{ruta.horainicio}</h3>
                  <h3>{ruta.horasalida}</h3>
                  <h3>{empresa ? empresa.nombre : 'No disponible'}</h3>
                  <button
                    type="button"
                    className="btn btn-outline-dark mb-2"
                    style={{ width: '100px' }}
                    onClick={() => navigate(`/detalleRuta/${ruta.id}`)}
                  >Comprar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" style={{ fontWeight: 'bold' }}>Vuelve, No hay nada por aquí 😊</h1>
          </div>
        </div>
      )}
    </div>
    
    </>
    
  );
}

export default RutasDisponibles;
