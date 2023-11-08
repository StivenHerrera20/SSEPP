import React, { useState, useEffect } from "react";

const TablaBateriaIndicadores = ({ controlBI, setControlBI }) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {/* <img src={megafono} alt="" style={{ height: "3rem" }} />{" "} */}
            Bateria de Indicadores
          </h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Nombre</th>
                  <th>Politica pública</th>
                  <th>Objetivo especifico</th>
                  <th>Estado </th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>PRODUCTO</td>
                  <td>
                    Entidades distritales con al menos un objetivo especifico de
                    su plataforma estratégica orientado al mejoramiento del
                    servicio a la ciudadanía
                  </td>
                  <td>
                    Politica Pública Distrital de Servicio a la Ciudadanía
                  </td>
                  <td>
                    Estandarizar la oferta de servicios y su calidad entre
                    canales, entidades y servidores(as)
                  </td>
                  <td>Incompleto</td>
                  <td className="text-center">
                    {" "}
                    <button
                      className="btn btn-success fa fa-pencil "
                      onClick={(e) => {
                        e.preventDefault();
                        setControlBI(1);
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

export default TablaBateriaIndicadores;
