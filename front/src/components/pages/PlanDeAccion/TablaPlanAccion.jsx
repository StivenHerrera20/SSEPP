import React, { useState, useEffect } from "react";

const TablaPlanAccion = ({ controlPD, setControlPD }) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {/* <img src={megafono} alt="" style={{ height: "3rem" }} />{" "} */}
            Plan de Acción - Politicas Públicas
          </h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nemotécnico D.C.N</th>
                  <th>Nombre</th>
                  <th>Sector</th>
                  <th>Entidad </th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>101</td>
                  <td>POLITICA AMBIENTAL - VALIDACIÓN FABRICA</td>
                  <td>Sector Administrativo Mujeres</td>
                  <td>Secretaria Distrital de la Mujer</td>
                  <td className="text-center">
                    {" "}
                    <button
                      className="btn btn-success fa fa-pencil "
                      onClick={(e) => {
                        e.preventDefault();
                        setControlPD(1);
                      }}
                    ></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaPlanAccion;
