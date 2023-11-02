import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const ObjetivoDesarrolloSostenible = () => {
  const [show, setShow] = useState(false);
  const [maxIdObjetivo, setmaxIdObjetivo] = useState([]);
  const [Objetivo, setObjetivo] = useState([]);
  const [insercionObjetivo, setIncersionObjetivo] = useState(false);
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(0);
  const [busqueda, setBusqueda] = useState(0);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=" +
        pagina +
        "&size=5"
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setObjetivo(doc.desarrollo);
      });
    fetch("http://127.0.0.1:3900/api/desarrolloSostenible/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdObjetivo(doc.maximo);
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
          <div>
            <select
              name=""
              id="numeroFilas"
              onChangeCapture={() => {
                let numeroFilas = document.querySelector("#numeroFilas");
                setFila(parseInt(numeroFilas.value));
                fetch(
                  "http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=" +
                    pagina +
                    "&size=" +
                    fila
                )
                  .then((response) => {
                    return response.json();
                  })
                  .then((doc) => {
                    setObjetivo(doc.desarrollo);
                    console.log(doc);
                  });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Objetivo de Desarrollo Sostenible
          </h2>
          <div>
            <input
              type="text"
              name=""
              id="txtTabla"
              onChange={() => {
                let txtTabla = document.querySelector("#txtTabla");
                setBusqueda(txtTabla.value);
                fetch(
                  "http://127.0.0.1:3900/api/desarrolloSostenible/listarEscrito?Nombre=" +
                    busqueda
                )
                  .then((response) => {
                    return response.json();
                  })
                  .then((doc) => {
                    console.log(doc);
                    setObjetivo(doc.resultado);
                  });
                if (busqueda.length == 0) {
                  fetch(
                    "http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=" +
                      pagina +
                      "&size=5"
                  )
                    .then((response) => {
                      return response.json();
                    })
                    .then((doc) => {
                      setObjetivo(doc.desarrollo);
                    });
                }
              }}
            />
          </div>
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
              <tbody id="tablaObjetivo">
                {Objetivo.map((res) => {
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
            <Modal.Title>Agregar Objetivo de Desarrollo Sostenible</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idObjetivo");
              let nombre = document.querySelector(
                "#nombreObjetivoDesarrolloSostenible"
              );
              let descripcion = document.querySelector(
                "#descripcionObjetivoDesarrolloSostenible"
              );
              let estado = document.querySelector("#estadoObjetivo");
              fetch("http://127.0.0.1:3900/api/desarrolloSostenible/agregar", {
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
                  setIncersionObjetivo(true);
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
                  id="idObjetivo"
                  disabled
                  value={maxIdObjetivo + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreObjetivoDesarrolloSostenible"
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
                  id="descripcionObjetivoDesarrolloSostenible"
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
                  id="estadoObjetivo"
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

export default ObjetivoDesarrolloSostenible;
