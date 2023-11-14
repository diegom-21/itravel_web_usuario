
function FormPasaje() {
  return (
    <div className="row mt-3 justify-content-center">
    <div className="col-md-6  border rounded">
      <form className="row g-3 ">
        <div className="col-md-4">
          <label htmlFor="origen" className="form-label mt-2">Origen</label>
          <input type="text" className="form-control" id="origen" placeholder="Ej. Lima" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="destino" className="form-label mt-2">Destino</label>
          <input type="text" className="form-control" id="destino" placeholder="Ej. Cusco" required />
        </div>
        <div className="col-md-2">
          <label htmlFor="salida" className="form-label mt-2">Salida</label>
          <input type="text" className="form-control" id="salida" placeholder="Ej. 12/01/2023" required />
        </div>
        <div className="col-md-2">
          <label htmlFor="retorno" className="form-label mt-2">Retorno</label>
          <input type="text" className="form-control" id="retorno" placeholder="Ej. 15/01/2023" />
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-dark mb-2">Buscar Pasaje</button>
        </div>
      </form>
    </div>
  </div>
      
  );
}

export default FormPasaje;
