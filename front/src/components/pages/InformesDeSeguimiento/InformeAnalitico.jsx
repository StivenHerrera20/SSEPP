import React, { useState, useEffect } from "react";
import PorcentajeAvancePolitica from "./InformeAnalitico/PorcentajeAvancePolitica";
import AvanceObjetivoEspecifico from "./InformeAnalitico/AvanceObjetivoEspecifico";
import AvanceIndicadores from "./InformeAnalitico/AvanceIndicadores";
import RegistroRecursosEjecutados from "./InformeAnalitico/RegistroRecursosEjecutados";

const InformeAnalitico = () => {
  const [controlDetalle, setControlDetalle] = useState(0);
  useEffect(() => {}, []);

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
                  Politica Pública
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="politicaPublicaInfoAnalitico"
                ></select>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="" className="form-label">
                Periodo de corte
              </label>
              <div className="col d-flex">
                <select
                  className="form-select w-25 me-2"
                  aria-label="Default select example"
                  id="periodoCorteInfoAnaliticoMes"
                >
                  <option value="enero">ENERO</option>
                  <option value="febrero">FEBRERO</option>
                  <option value="marzo">MARZO</option>
                  <option value="abril">ABRIL</option>
                  <option value="mayo">MAYO</option>
                  <option value="junio">JUNIO</option>
                  <option value="julio">JULIO</option>
                  <option value="agosto">AGOSTO</option>
                  <option value="septiembre">SEPTIEMBRE</option>
                  <option value="octubre">OCTUBRE</option>
                  <option value="noviembre">NOVIEMBRE</option>
                  <option value="diciembre">DICIEMBRE</option>
                </select>
                <select
                  className="form-select w-25"
                  aria-label="Default select example"
                  id="periodoCorteInfoAnaliticoAño"
                ></select>
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
            ></PorcentajeAvancePolitica>
          );
        } else if (controlDetalle === 2) {
          return (
            <AvanceObjetivoEspecifico
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
            ></AvanceObjetivoEspecifico>
          );
        } else if (controlDetalle === 3) {
          return (
            <AvanceIndicadores
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
            ></AvanceIndicadores>
          );
        } else if (controlDetalle === 4) {
          return (
            <RegistroRecursosEjecutados
              controlDetalle={controlDetalle}
              setControlDetalle={setControlDetalle}
            ></RegistroRecursosEjecutados>
          );
        }
      })()}
    </>
  );
};

export default InformeAnalitico;
