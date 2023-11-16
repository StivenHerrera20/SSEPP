import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const TablaRegistroSeguimiento = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {/* <img src={megafono} alt="" style={{ height: "3rem" }} />{" "} */}
            Indicadores a Cargo de la Entidad
          </h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th className="align-middle text-center">Tipo</th>
                  <th className="align-middle text-center">
                    Nombre del indicador
                  </th>
                  <th className="align-middle text-center">Politica Pública</th>
                  <th className="align-middle text-center">
                    Objetivo Especifico
                  </th>
                  <th className="align-middle text-center">¿Vigente? </th>
                  <th>
                    Ultimo <br /> Periodo <br /> Registrado
                  </th>
                  <th className="align-middle text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>PRODUCTO</td>
                  <td>Estrategia de respeto a las normas</td>
                  <td>Politica Pública de cultura ciudadana 2019-2038 </td>
                  <td>Sector Administrativo Mujeres</td>
                  <td>Vigente</td>
                  <td>ENE 2020</td>
                  <td className="text-center">
                    {" "}
                    <NavLink
                      to="cargueavance"
                      className="btn btn-success fa fa-pencil"
                      aria-current="page"
                    ></NavLink>
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

export default TablaRegistroSeguimiento;
