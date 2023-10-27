import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const FuentesFinanciacion = () => {
  const [show, setShow] = useState(false);
  const [maxIdFuentesDeFinanciacion, setmaxIdFuentesDeFinanciacion] = useState(
    []
  );
  const [FuentesDeFinanciacion, setFuentesDeFinanciacion] = useState([]);
  const [insercionFuentesDeFinanciacion, setIncersionFuentesDeFinanciacion] =
    useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/fuentesDeFinanciacion/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setFuentesDeFinanciacion(doc);
      });
    fetch("http://127.0.0.1:3900/api/fuentesDeFinanciacion/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdFuentesDeFinanciacion(doc.maximo);
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
            Fuentes de Financiación
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
                {FuentesDeFinanciacion.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
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
            <Modal.Title>Agregar Fuente de Financiación</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idFuentesDeFinanciacion");
              let nombre = document.querySelector(
                "#nombreFuentesDeFinanciación"
              );
              let descripcion = document.querySelector(
                "#descripcionFuentesDeFinanciación"
              );
              let estado = document.querySelector(
                "#estadoFuentesDeFinanciacion"
              );
              fetch("http://127.0.0.1:3900/api/fuentesDeFinanciacion/agregar", {
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
                  setIncersionFuentesDeFinanciacion(true);
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
                  id="idFuentesDeFinanciacion"
                  disabled
                  value={maxIdFuentesDeFinanciacion + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreFuentesDeFinanciación"
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
                  id="descripcionFuentesDeFinanciación"
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
                  id="estadoFuentesDeFinanciacion"
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

export default FuentesFinanciacion;
