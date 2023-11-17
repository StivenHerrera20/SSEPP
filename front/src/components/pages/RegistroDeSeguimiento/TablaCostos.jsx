import React, { useState, useEffect } from "react";

const TablaCostos = () => {
  return (
    <>
      <div className="card-body ">
        <h5 className="m-0 font-weight-bold ">
          Registro de Recursos Ejecutados
        </h5>
      </div>
      <hr className="sidebar-divider my-0 " />
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%">
            <thead>
              <tr>
                <th className="align-middle text-center">Fecha</th>
                <th className="align-middle text-center">Periodo Reportado</th>
                <th className="align-middle text-center">
                  Costo <br /> Estimado{" "}
                </th>
                <th className="align-middle text-center">
                  Recursos <br /> Ejecutados
                </th>
                <th className="align-middle text-center">
                  Recursos <br /> Ejecutados <br /> Acumulados
                </th>
                <th className="align-middle text-center"> Observación </th>
                <th className="align-middle text-center">Editar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2020-06-12</td>
                <td>DICIEMBRE 2019</td>
                <td>$ 65</td>
                <td>$ 15</td>
                <td>$ 15</td>
                <td>Se ejecutó al presupuesto conforme al PAC</td>
                <td className="text-center">
                  <button className="btn btn-success fa fa-pencil"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TablaCostos;
