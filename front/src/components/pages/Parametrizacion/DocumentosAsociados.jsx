import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const DocumentosAsociados = () => {
  const [show, setShow] = useState(false);
  const [maxId, setmaxID] = useState([]);
  const [documentos, setDocumentos] = useState([]);
  const [insercion, setIncersion] = useState(false);

  /*  const agregar = (req,res)=>{
    fetch('http://127.0.0.1:3900/api/documentosAsociados/listar',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
      })
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        console.log(res)
        setIncersion(true)
      });
  } */

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/documentosAsociados/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setDocumentos(doc);
      });
    fetch("http://127.0.0.1:3900/api/documentosAsociados/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxID(doc.maximo);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDos, setShowDos] = useState(false);
  const handleCloseDos = () => setShowDos(false);
  const handleShowDos = () => setShowDos(true);
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
            Documentos Asociados
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
                {documentos.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
                      <td>{res.Estado}</td>
                      <td className="text-center">
                        {" "}
                        <Button
                          className="btn btn-success fa fa-pencil "
                          variant="success"
                          onClick={handleShowDos}
                        ></Button>
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
            <Modal.Title>Agregar Documento Asociado</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idDocumentosAsociados");
              let nombre = document.querySelector("#nombreDocumentosAsociados");
              let estado = document.querySelector("#estadoDocumentosAsociados");
              let descripcion = document.querySelector(
                "#descripcionDocumentosAsociados"
              );
              console.log(id.value);
              console.log(nombre.value);
              console.log(estado.value);
              console.log(descripcion.value);
              fetch("http://127.0.0.1:3900/api/documentosAsociados/agregar", {
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
                  setIncersion(true);
                });
              if (insercion == true) {
                alert("Agregado correctamente");
                setIncersion(false);
              }
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
                  id="idDocumentosAsociados"
                  disabled
                  value={maxId + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreDocumentosAsociados"
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
                  id="descripcionDocumentosAsociados"
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
                  id="estadoDocumentosAsociados"
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

        {/* Inicio Modal de editar */}
        <Modal show={showDos} onHide={handleCloseDos}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Agregar Documento Asociado</Modal.Title>
          </Modal.Header>
          <form method="" onSubmit={(e) => {}}>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  id <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idDocumentosAsociadosEdit"
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
                  id="nombreDocumentosAsociadosEdit"
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
                  id="descripcionDocumentosAsociadosEdit"
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
                  id="estadoDocumentosAsociadosEdit"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleCloseDos}>
                Guardar
              </Button>
              <Button variant="danger" onClick={handleCloseDos}>
                Cancelar
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default DocumentosAsociados;
