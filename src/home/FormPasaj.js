import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormPasaje() {
  const [origen, setOrigen] = useState('Lima');
  const [destino, setDestino] = useState('Huaraz');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud para buscar pasajes según el origen y destino
      const response = await axios.get('http://localhost:8090/itravel/rutas/buscarPasaje', {
        params: {
          origen,
          destino,
        },
      });

      // Redirigir al usuario a la página de rutas disponibles con los resultados de la búsqueda
      navigate('/rutasDisponibles', { state: { rutas: response.data } });
    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  };

  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-md-6 border rounded">
        <form className="row g-3 justify-content-center">
          <div className="col-md-4">
            <label htmlFor="origen" style={{ fontWeight: 'bold' }} className="form-label mt-2">
              Origen
            </label>
            <select
              id="origen"
              className="form-select"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
            >
              <option value="Lima">Lima</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="destino" style={{ fontWeight: 'bold' }} className="form-label mt-2">
              Destino
            </label>
            <select
              id="destino"
              className="form-select"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            >
              <option value="Huaraz">Huaraz</option>
              <option value="Chiclayo">Chiclayo</option>
            </select>
          </div>
          <div className="col-12 mt-3">
            <button type="button" className="btn btn-outline-dark mb-2" onClick={handleSubmit}>
              Buscar Pasaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPasaje;
