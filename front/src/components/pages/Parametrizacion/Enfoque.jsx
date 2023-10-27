import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const Enfoque = () => {
  const [show, setShow] = useState(false);
  const [maxIdEnfoque, setmaxIdEnfoque] = useState([]);
  const [Enfoque, setEnfoque] = useState([]);
  const [insercionEnfoque, setIncersionEnfoque] = useState(false);

  useEffect(() => {
    listar();
    maxId();
  }, []);
  const listar = () => {
    fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
  };
  const maxId = () => {
    fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdEnfoque(doc.maximo);
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
          <Button
            className="btn btn-primary fa fa-plus"
            variant="primary"
            onClick={handleShow}
          ></Button>

          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Enfoque Nivel 1
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
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {Enfoque.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Agregar Enfoque Nivel 1</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEnfoque");
              let nombre = document.querySelector("#nombreEnfoqueNivelUno");
              let estado = document.querySelector("#estadoEnfoque");
              fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEnfoque(true);
                  listar();
                  maxId();
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
                  id="idEnfoque"
                  disabled
                  value={maxIdEnfoque + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelUno"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoEnfoque"
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
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Editar Enfoque Nivel 1</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEnfoque");
              let nombre = document.querySelector("#nombreEnfoqueNivelUno");
              let estado = document.querySelector("#estadoEnfoque");
              fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEnfoque(true);
                  listar();
                  maxId();
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
                  id="idEnfoque"
                  disabled
                  value={maxIdEnfoque + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelUno"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoEnfoque"
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

export default Enfoque;
