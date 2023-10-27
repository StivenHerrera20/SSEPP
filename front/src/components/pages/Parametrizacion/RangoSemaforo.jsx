import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const RangoSemaforo = () => {
  const [show, setShow] = useState(false);
  const [maxIdRangoSemaforo, setmaxIdRangoSemaforo] = useState([]);
  const [RangoSemaforo, setRangoSemaforo] = useState([]);
  const [insercionRangoSemaforo, setIncersionRangoSemaforo] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/rangoSemaforo/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setRangoSemaforo(doc);
      });
    fetch("http://127.0.0.1:3900/api/unidadDeMedida/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdRangoSemaforo(doc.maximo);
      });
  }, []);

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
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Mes</th>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Color</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {RangoSemaforo.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Mes}</td>
                      <td>{res.Desde}</td>
                      <td>{res.Hasta}</td>
                      <td>{res.Color}</td>
                      <td>{res.Estado}</td>
                      <td className="text-center">
                        {" "}
                        <button className="btn btn-success fa fa-pencil "></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RangoSemaforo;
