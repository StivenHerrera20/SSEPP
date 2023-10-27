import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const MetaODS = () => {
  const [show, setShow] = useState(false);
  const [maxIdMetaODS, setmaxIdMetaODS] = useState([]);
  const [MetaODS, setMetaODS] = useState([]);
  const [insercionMetaODS, setIncersionMetaODS] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/metaOds/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setMetaODS(doc);
      });
    fetch("http://127.0.0.1:3900/api/metaOds/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdMetaODS(doc.maximo);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <Button
            className="btn btn-primary fa fa-plus"
            variant="primary"
            onClick={handleShow}
          ></Button>

          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Meta ODS
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
                  <th>Descripcion</th>
                  <th>ODS</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {MetaODS.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
                      <td>{res.Ods}</td>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Agregar Meta ODS</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idMetaOds");
              let nombre = document.querySelector("#nombreMetaODS");
              let descripcion = document.querySelector("#descripcionMetaODS");
              let estado = document.querySelector("#estadoMetaOds");
              fetch("http://127.0.0.1:3900/api/metaOds/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Descripcion=${descripcion.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionMetaODS(true);
                });
            }}
          >
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  id <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idMetaOds"
                  disabled
                  value={maxIdMetaODS + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="nombreMetaODS"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcionMetaODS"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoMetaOds"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Guardar
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default MetaODS;
