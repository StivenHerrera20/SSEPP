import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const EnfoqueCuatro = () => {
  const [show, setShow] = useState(false);
  const [maxIdEnfoqueCuatro, setmaxIdEnfoqueCuatro] = useState([]);
  const [EnfoqueCuatro, setEnfoqueCuatro] = useState([]);
  const [EnfoqueTres, setEnfoqueTres] = useState([]);
  const [EnfoqueDos, setEnfoqueDos] = useState([]);
  const [insercionEnfoqueCuatro setIncersionEnfoqueCuatro] = useState(false);
  const [Enfoque, setEnfoque] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/enfoqueNivelCuatro/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoqueCuatro(doc);
      });
    fetch("http://127.0.0.1:3900/api/enfoqueNivelTres/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoqueTres(doc);
      });
    fetch("http://127.0.0.1:3900/api/enfoqueNivelDos/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoqueDos(doc);
      });
    fetch("http://127.0.0.1:3900/api/enfoqueNivelCuatro/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdEnfoqueCuatro(doc.maximo);
      });
    fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
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
            Enfoque Nivel 4
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
                  <th>Nivel 2</th>
                  <th>Nivel 3</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {EnfoqueCuatro.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Nivel_uno}</td>
                      <td>{res.Nivel_dos}</td>
                      <td>{res.Nivel_tres}</td>
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
            <Modal.Title>Agregar Enfoque Nivel 4</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idEnfoqueCuatro");
              let nombre = document.querySelector("#nombreEnfoqueNivelCuatro");
              let nivelUno = document.querySelector("#nivelUnoEnfoqueCuatro");
              let nivelDos = document.querySelector("#nivelDosEnfoqueCuatro");
              let nivelTres = document.querySelector("#nivelTresEnfoqueCuatro");
              let estado = document.querySelector("#estadoEnfoqueCuatro");
              fetch("http://127.0.0.1:3900/api/enfoqueNivelCuatro/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Nivel_tres=${nivelTres.value}&Nivel_dos=${nivelDos.value}&Nivel_uno=${nivelUno.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionEnfoqueCuatrot(true);
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
                  id="idEnfoqueCuatro"
                  disabled
                  value={maxIdEnfoqueCuatro + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelCuatro"
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
                  id="nivelUnoEnfoqueCuatro"
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
                  Nivel 2
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="nivelDosEnfoqueCuatro"
                >
                  {EnfoqueDos.map((element) => (
                    <option key={element.id} value={element.Nombre}>
                      {element.Nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nivel 3
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="nivelTresEnfoqueCuatro"
                >
                  {EnfoqueTres.map((element) => (
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
                  id="estadoEnfoqueCuatro"
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

export default EnfoqueCuatro;
