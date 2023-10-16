import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const RangoSemaforo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Rango Semáforo
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
                  <th>Nombre</th>
                  <th>Mes</th>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Color</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01 ROJO</td>
                  <td>ROJO</td>
                  <td>1</td>
                  <td>25</td>
                  <td>ROJO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td>02 AMARILLO</td>
                  <td>AMARILLO</td>
                  <td>26</td>
                  <td>74</td>
                  <td>AMARILLO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td>03 VERDE</td>
                  <td>VERDE</td>
                  <td>75</td>
                  <td>100</td>
                  <td>VERDE</td>
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

export default RangoSemaforo;
