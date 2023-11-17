import React, { useState, useEffect } from "react";

const AvanceCualitativo = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary fa fa-plus"
            data-bs-toggle="modal"
            data-bs-target="#agregarAvanceCualitativo"
          ></button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th className="align-middle text-center">Fecha</th>
                  <th className="align-middle text-center">Mes</th>
                  <th className="align-middle text-center">Año</th>
                  <th className="align-middle text-center">
                    Análisis Cualitativo General
                  </th>
                  <th className="align-middle text-center">
                    Análisis Cualitativo Enfoques
                  </th>
                  <th className="align-middle text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>27/05/2020</td>
                  <td>ENERO</td>
                  <td>2020</td>
                  <td>...</td>
                  <td>...</td>
                  <td className="text-center">
                    <button className="btn btn-success fa fa-pencil"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="agregarAvanceCualitativo"
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
                Agregar Avance Cualitativo
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
                <div className="col-5">
                  <label for="exampleInputPassword1" className="form-label">
                    Mes del Periodo
                  </label>
                  <select name="" id="" className="form-select">
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
                <div className="col-5">
                  <label for="exampleInputPassword1" className="form-label">
                    Año del Periodo
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">...</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Análisis Cualitativo General
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Enfoques
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
                    disabled
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Análisis Cualitativo de Enfoques
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
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

export default AvanceCualitativo;
