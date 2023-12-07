import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const PlanAccionAvance = () => {
  const [consultar, setConsultar] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta Reporte del Plan de Acción y Avance
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
                  id="politicaPublicaPlanAccionAvance"
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
                  id="periodoCortePlanAccionAvanceMes"
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
                  id="periodoCortePlanAccionAvanceAño"
                ></select>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setConsultar(1);
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
        if (consultar === 1) {
          {
            /* Consulta */
          }
          return (
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex">
                <div>
                  <select name="" id="numeroFilas" className="form-select ms-3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected value="5">
                      5
                    </option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Indicadores
                </h2>
                <div>
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Buscar..."
                    id="txtTabla"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-2">
                    <button className="btn btn-success">
                      Exportar a Excel
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Tipo Indicador</th>
                        <th>Nombre Indicador</th>
                        <th>Inicio Ejecución</th>
                        <th>Fin Ejecución</th>
                        <th>Anualización</th>
                        <th>Periodicidad</th>
                      </tr>
                    </thead>

                    <tbody></tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-center">
                  <Button className="btn btn-primary m-2" variant="primary">
                    Anterior
                  </Button>
                  <Button className="btn btn-primary m-2" variant="primary">
                    Siguiente
                  </Button>
                </div>
              </div>
            </div>
          );
        }
      })()}
    </>
  );
};

export default PlanAccionAvance;
