import React from "react";

const PorcentajeAvancePolitica = ({
  controlDetalle,
  setControlDetalle,
  objEsp,
  setObjetivoSeleccionado,
}) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              {/* Avance de la politica (Porcentaje) */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Avance de la política
                  </h4>
                </div>
                <div className="card-body ">
                  <h1 className="text-center">0,0%</h1>
                </div>
              </div>
            </div>

            <div className="col-9">
              {/* Porcentaje de avance de los objetivos especificos (card de la derecha) */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Porcentaje de avance de los objetivos específicos
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row">
                    {objEsp.map((objetivo) => (
                      <div className="col-6" key={objetivo.id}>
                        <div
                          className="card shadow mb-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setObjetivoSeleccionado(objetivo);
                            setControlDetalle(2);
                          }}
                        >
                          <div className="card-body">
                            <div className="row">
                              <p>{objetivo.objetivo}</p>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-9">
                                <p className="d-flex align-items-center">
                                  Importancia relativa:
                                </p>
                              </div>
                              <div className="col-3">
                                <h2>{objetivo.importancia_relativa}</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PorcentajeAvancePolitica;
