import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const Entidad = () => {
  const [show, setShow] = useState(false);
  const [maxIdEntidad, setmaxIDEntidad] = useState([]);
  const [entidad, setEntidades] = useState([]);
  const [sector, setSectores] = useState([]);
  const [insercionEntidad, setIncersionEntidad] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/entidad/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch("http://127.0.0.1:3900/api/entidad/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIDEntidad(doc.maximo);
      });
    fetch("http://127.0.0.1:3900/api/sector/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
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
            Entidad
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
                  <th>Sector</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {entidad.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
                      <td>{res.Sector}</td>
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
            <Modal.Title>Agregar Entidad</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEntidad");
              let sectorEn = document.querySelector("#sectorEntidad");
              let nombre = document.querySelector("#nombreEntidad");
              let estado = document.querySelector("#estadoEntidad");
              let descripcion = document.querySelector("#descripcionEntidad");
              fetch("http://127.0.0.1:3900/api/entidad/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Descripcion=${descripcion.value}&Sector=${sectorEn.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEntidad(true);
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
                  id="idEntidad"
                  disabled
                  value={maxIdEntidad + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Sector <b className="text-danger">*</b>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {sector.map((element) => (
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEntidad"
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
                  id="descripcionEntidad"
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
                  id="estadoEntidad"
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

export default Entidad;
