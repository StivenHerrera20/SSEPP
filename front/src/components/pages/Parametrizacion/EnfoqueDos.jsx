import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const EnfoqueDos = () => {
  const [show, setShow] = useState(false);
  const [maxIdEnfoqueDos, setmaxIdEnfoqueDos] = useState([]);
  const [EnfoqueDos, setEnfoqueDos] = useState([]);
  const [insercionEnfoqueDos, setIncersionEnfoqueDos] = useState(false);
  const [Enfoque, setEnfoque] = useState([]);

  useEffect(() => {
    listar();
    maxId();
    fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
  }, []);
  const listar = () => {
    fetch("http://127.0.0.1:3900/api/enfoqueNivelDos/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoqueDos(doc);
      });
  };
  const maxId = () => {
    fetch("http://127.0.0.1:3900/api/enfoqueNivelDos/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdEnfoqueDos(doc.maximo);
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
            Enfoque Nivel 2
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
                  <th>Nivel 1</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {EnfoqueDos.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Nivel_uno}</td>
                      <td>{res.Estado}</td>
                      <td className="text-center">
                        {" "}
                        <button
                          className="btn btn-success fa fa-pencil"
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
            <Modal.Title>Agregar Enfoque Nivel 2</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEnfoqueDos");
              let nombre = document.querySelector("#nombreEnfoqueNivelDos");
              let nivelUno = document.querySelector("#nivelUnoEnfoqueDos");
              let estado = document.querySelector("#estadoEnfoqueDos");
              fetch("http://127.0.0.1:3900/api/enfoqueNivelDos/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Nivel_uno=${nivelUno.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEnfoqueDos(true);
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
                  id="idEnfoqueDos"
                  disabled
                  value={maxIdEnfoqueDos + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelDos"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nivel 1
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="nivelUnoEnfoqueDos"
                >
                  {Enfoque.map((element) => (
                    <option key={element.id} value={element.Nombre}>
                      {element.Nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoEnfoqueDos"
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
            <Modal.Title>Editar Enfoque Nivel 2</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEnfoqueDos");
              let nombre = document.querySelector("#nombreEnfoqueNivelDos");
              let nivelUno = document.querySelector("#nivelUnoEnfoqueDos");
              let estado = document.querySelector("#estadoEnfoqueDos");
              fetch("http://127.0.0.1:3900/api/enfoqueNivelDos/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Nivel_uno=${nivelUno.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEnfoqueDos(true);
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
                  id="idEnfoqueDos"
                  disabled
                  value={maxIdEnfoqueDos + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelDos"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nivel 1
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="nivelUnoEnfoqueDos"
                >
                  {Enfoque.map((element) => (
                    <option
                      key={element.id}
                      value={element.Nombre}
                      id="sectorEntidad"
                    >
                      {element.Nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoEnfoqueDos"
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

export default EnfoqueDos;
