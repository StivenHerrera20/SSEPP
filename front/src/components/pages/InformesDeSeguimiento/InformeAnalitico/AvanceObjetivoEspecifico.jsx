import React, { useState, useEffect } from "react";

const AvanceObjetivoEspecifico = ({
  controlDetalle,
  setControlDetalle,
  objetivo,
  setResultadoSeleccionado,
}) => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (objetivo && objetivo.id) {
      fetch(`http://127.0.0.1:3900/api/resultadoDatosGenerales/listarTodos`)
        .then((response) => response.json())
        .then((data) => {
          console.log("object", data);
          const encontrados = data.filter(
            (item) => item.id_objetivo === objetivo.id
          );
          setResultados(encontrados);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setResultados([]);
        });
    }
  }, [objetivo]);

  return (
    <div className="card shadow mb-2">
      <div className="card-body">
        <div className="row d-flex justify-content-end mb-3">
          <div className="col-2">
            <button
              className="btn btn-secondary w-100"
              onClick={() => {
                setControlDetalle(1);
              }}
            >
              Regresar
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="card shadow mb-2">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Objetivo
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card shadow mb-2">
                      <div className="card-body">
                        <div className="row">
                          <p>{objetivo.objetivo}</p>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-8">
                            <p className="d-flex align-items-center">
                              Importancia relativa
                            </p>
                          </div>
                          <div className="col-4">
                            <h2>{objetivo.importancia_relativa}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card shadow mb-2 h-100">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Avance de indicadores de resultado
                </h4>
              </div>
              <div className="card-body">
                <div className="row h-75 my-0 py-0">
                  <h1 className="text-center align-self-center">0</h1>
                </div>
                <div className="row mb-3 h-25">
                  <div className="alert-info text-center align-self-end p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card shadow mb-2 h-100">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Indicadores de Resultado
                </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Avance</th>
                        <th className="text-center">Detalle Avances</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultados.length > 0 ? (
                        resultados.map((resultado, index) => (
                          <tr key={resultado.id}>
                            <td>{index + 1}</td>
                            <td>{resultado.nombre_resultado}</td>
                            <td>???</td>
                            <td className="text-center">
                              <button
                                className="btn btn-primary bi bi-search"
                                onClick={() => {
                                  localStorage.setItem(
                                    "nomObj",
                                    objetivo.objetivo
                                  );
                                  localStorage.setItem(
                                    "impObj",
                                    objetivo.importancia_relativa
                                  );
                                  localStorage.setItem(
                                    "res",
                                    resultado.nombre_resultado
                                  );
                                  setControlDetalle(3);
                                }}
                              ></button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvanceObjetivoEspecifico;
