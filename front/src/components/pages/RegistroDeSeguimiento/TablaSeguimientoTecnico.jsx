import React, { useState, useEffect } from "react";

const TablaSeguimientoTecnico = () => {
  return (
    <>
      <div className="card-body ">
        <h5 className="m-0 font-weight-bold ">Avances del Indicador</h5>
      </div>
      <hr className="sidebar-divider my-0 " />
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%">
            <thead>
              <tr>
                <th className="align-middle text-center">Fecha</th>
                <th className="align-middle text-center">Periodo Reportado</th>
                <th className="align-middle text-center">Avance del Periodo</th>
                <th className="align-middle text-center">
                  Porcentaje de <br /> Avance{" "}
                </th>
                <th className="align-middle text-center">
                  Porcentaje de <br /> Avance Acumulado
                </th>
                <th className="align-middle text-center"> Estado </th>
                <th className="align-middle text-center">Editar</th>
                <th className="align-middle text-center">Ver Avance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2020-05-27</td>
                <td>DICIEMBRE 2019</td>
                <td>180</td>
                <td>56,96%</td>
                <td>8,23%</td>
                <td>Pendiente de aprobación</td>
                <td className="text-center">
                  <button className="btn btn-success fa fa-pencil"></button>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-success fa fa-search"
                    data-bs-toggle="modal"
                    data-bs-target="#editarAvance"
                  ></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="editarAvance"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Agregar Avance
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Mes del Periodo
                  </label>
                  <select name="" id="" className="form-select" disabled>
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
                </div>
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Año del Periodo
                  </label>
                  <select name="" id="" className="form-select" disabled>
                    <option value="enero">...</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Avance del Periodo
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="col-3 d-flex align-items-end">
                  <button type="button" className="btn btn-primary w-100">
                    Validar Avance
                  </button>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  {" "}
                  <label for="exampleInputPassword1" className="form-label">
                    Porcentaje de Avance Año
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="col-6">
                  {" "}
                  <label for="exampleInputPassword1" className="form-label">
                    Porcentaje de Avance Acumulado
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Enfoques
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    style={{ resize: "none" }}
                    className="form-control"
                    disabled
                  ></textarea>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Estado
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">...</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Justificación
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    style={{ resize: "none" }}
                    className="form-control"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaSeguimientoTecnico;
