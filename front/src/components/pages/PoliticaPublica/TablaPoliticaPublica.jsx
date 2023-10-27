import React, { useState, useEffect } from "react";
import megafono from "../../../assets/images/megafono.png";

const TablaPoliticaPublica = ({ setControlPP, controlPP }) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <button
            className="btn btn-primary fa fa-plus"
            onClick={(e) => {
              e.preventDefault();
              setControlPP(1);
            }}
          ></button>

          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {/* <img src={megafono} alt="" style={{ height: "3rem" }} />{" "} */}
            Politicas Públicas
          </h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nemotécnico</th>
                  <th>Nombre</th>
                  <th>Sector Líder</th>
                  <th>Entidad Líder</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>13</td>
                  <td>Politica pública Distrital de Educación Ambiental</td>
                  <td>Sector Ambiente</td>
                  <td>Secretaria Distrital de Ambiente</td>
                  <td>Aprobada</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>10</td>
                  <td>Politica pública de Cultura Ciudadana 2019-2038</td>
                  <td>Sector Cultura Recreación y Deporte</td>
                  <td>Secretaria Distrital de Cultura</td>
                  <td>Aprobada</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
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

export default TablaPoliticaPublica;
