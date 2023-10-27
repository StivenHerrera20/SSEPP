import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const UnidadesMedida = () => {
  const [show, setShow] = useState(false);
  const [maxIdUnidadesDeMedida, setmaxIdUnidadesDeMedida] = useState([]);
  const [UnidadesDeMedida, setUnidadesDeMedida] = useState([]);
  const [insercionUnidadesDeMedida, setIncersionUnidadesDeMedida] =
    useState(false);

  useEffect(() => {
    listar();
    maxId();
  }, []);
  const listar = () => {
    fetch("http://127.0.0.1:3900/api/unidadDeMedida/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setUnidadesDeMedida(doc);
      });
  };
  const maxId = () => {
    fetch("http://127.0.0.1:3900/api/unidadDeMedida/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdUnidadesDeMedida(doc.maximo);
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
            Unidades de Medida
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
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {UnidadesDeMedida.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
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
            <Modal.Title>Agregar Unidad de Medida</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idUnidadesDeMedida");
              let nombre = document.querySelector("#nombreUnidadMedida");
              let estado = document.querySelector("#estadoUnidadDeMedida");
              let descripcion = document.querySelector(
                "#descripcionUnidadMedida"
              );
              fetch("http://127.0.0.1:3900/api/unidadDeMedida/agregar", {
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
                  setIncersionUnidadesDeMedida(true);
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
                  id="idUnidadesDeMedida"
                  disabled
                  value={maxIdUnidadesDeMedida + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreUnidadMedida"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="descripcionUnidadMedida"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoUnidadDeMedida"
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
            <Modal.Title>Editar Unidad de Medida</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idUnidadesDeMedida");
              let nombre = document.querySelector("#nombreUnidadMedida");
              let estado = document.querySelector("#estadoUnidadDeMedida");
              let descripcion = document.querySelector(
                "#descripcionUnidadMedida"
              );
              fetch("http://127.0.0.1:3900/api/unidadDeMedida/agregar", {
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
                  setIncersionUnidadesDeMedida(true);
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
                  id="idUnidadesDeMedida"
                  disabled
                  value={maxIdUnidadesDeMedida + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreUnidadMedida"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="descripcionUnidadMedida"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoUnidadDeMedida"
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

export default UnidadesMedida;
