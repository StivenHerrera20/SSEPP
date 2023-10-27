import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const RangoSemaforo = () => {
  const [show, setShow] = useState(false);
  const [maxIdRangoSemaforo, setmaxIdRangoSemaforo] = useState([]);
  const [RangoSemaforo, setRangoSemaforo] = useState([]);
  const [insercionRangoSemaforo, setIncersionRangoSemaforo] = useState(false);

  useEffect(() => {
    listar();
    fetch("http://127.0.0.1:3900/api/unidadDeMedida/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdRangoSemaforo(doc.maximo);
      });
  }, []);
  const listar = () => {
    fetch("http://127.0.0.1:3900/api/rangoSemaforo/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setRangoSemaforo(doc);
      });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
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
                        <button
                          className="btn btn-success fa fa-pencil "
                          onClick={handleShowEdit}
                        ></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Editar Rango Semáforo</Modal.Title>
          </Modal.Header>
          <form method="post" onSubmit={(e) => {}}>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  id <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idRangoSemaforoEdit"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreDocumentosAdopcion"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mes <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mesRangoSemaforoEdit"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Desde <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desdeRangoSemaforoEdit"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Hasta <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hastaRangoSemaforoEdit"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Color <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="colorRangoSemaforoEdit"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoDocumentosDeAdopcion"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleCloseEdit}>
                Guardar
              </Button>
              <Button variant="danger" onClick={handleCloseEdit}>
                Cancelar
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default RangoSemaforo;
