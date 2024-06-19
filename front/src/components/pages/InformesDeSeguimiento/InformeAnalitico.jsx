import React, { useState, useEffect } from "react";
import PorcentajeAvancePolitica from "./InformeAnalitico/PorcentajeAvancePolitica";
import AvanceObjetivoEspecifico from "./InformeAnalitico/AvanceObjetivoEspecifico";
import AvanceIndicadores from "./InformeAnalitico/AvanceIndicadores";
import RegistroRecursosEjecutados from "./InformeAnalitico/RegistroRecursosEjecutados";

const InformeAnalitico = () => {
  const [controlDetalle, setControlDetalle] = useState(0);
  const [politicas, setPoliticas] = useState([]);
  const [objEsp, setObjEsp] = useState([]);
  const [idPolitica, setIdPolitica] = useState(0);
  const [politicaSeleccionada, setPoliticaSeleccionada] = useState(null);
  const [objetivoSeleccionado, setObjetivoSeleccionado] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/politicasPublicas/listarTodos")
      .then((response) => response.json())
      .then((data) => {
        setPoliticas(data);
      })
      .catch((error) => {
        console.error("Error fetching politicas:", error);
      });
  }, []);

  useEffect(() => {
    if (idPolitica !== 0) {
      fetch(
        `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listarTodos/${idPolitica}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setObjEsp(data);
        })
        .catch((error) => {
          console.error("Error fetching objetivos específicos:", error);
        });
    }
  }, [idPolitica]);

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta Informe Analítico
          </h2>
        </div>
        <div className="card-body">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Política Pública
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="politicaPublicaInfoEjecutivo"
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    setIdPolitica(parseInt(selectedId));
                    const selectedPolitica = politicas.find(
                      (p) => p.id === parseInt(selectedId)
                    );
                    setPoliticaSeleccionada(selectedPolitica);
                  }}
                >
                  <option value="0">Seleccione una política</option>
                  {politicas.map((element) => (
                    <option
                      key={element.id}
                      value={element.id}
                      id="politicaPublica"
                    >
                      {element.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setControlDetalle(1);
                  }}
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(() => {
        if (controlDetalle === 1) {
          return (
            <PorcentajeAvancePolitica
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
              objEsp={objEsp} // Pasar objEsp como prop
              setObjetivoSeleccionado={setObjetivoSeleccionado} // Pasar setter para objetivo seleccionado
            />
          );
        } else if (controlDetalle === 2) {
          return (
            <AvanceObjetivoEspecifico
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
              objetivo={objetivoSeleccionado} // Pasar el objetivo seleccionado
            />
          );
        } else if (controlDetalle === 3) {
          return (
            <AvanceIndicadores
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
              objetivo={objetivoSeleccionado}
            />
          );
        } else if (controlDetalle === 4) {
          return (
            <RegistroRecursosEjecutados
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
              objetivo={objetivoSeleccionado}
            />
          );
        }
      })()}
    </>
  );
};

export default InformeAnalitico;
