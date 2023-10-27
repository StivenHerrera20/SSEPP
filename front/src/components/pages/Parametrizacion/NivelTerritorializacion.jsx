import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const NivelTerritorializacion = () => {
  const [show, setShow] = useState(false);
  const [maxIdNivel, setmaxIdNivel] = useState([]);
  const [Nivel, setNivel] = useState([]);
  const [insercionNivel, setIncersionNivel] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/nivelDeTerritorializacion/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setNivel(doc);
      });
    fetch("http://127.0.0.1:3900/api/nivelDeTerritorializacion/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdNivel(doc.maximo);
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
            Nivel de Territorializacion
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
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {Nivel.map((res) => {
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
            <Modal.Title>Agregar Nivel de Territorializacion</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idNivel");
              let nombre = document.querySelector(
                "#nombreNivelDeTerritorializacion"
              );
              let descripcion = document.querySelector(
                "#descripcionNivelDeTerritorializacion"
              );
              let estado = document.querySelector("#estadoNivel");
              fetch(
                "http://127.0.0.1:3900/api/nivelDeTerritorializacion/agregar",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: `id=${id.value}&Nombre=${nombre.value}&Descripcion=${descripcion.value}&Estado=${estado.value}`,
                }
              )
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionNivel(true);
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
                  id="idNivel"
                  disabled
                  value={maxIdNivel + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreNivelDeTerritorializacion"
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
                  id="descripcionNivelDeTerritorializacion"
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
                  id="estadoNivel"
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

export default NivelTerritorializacion;
