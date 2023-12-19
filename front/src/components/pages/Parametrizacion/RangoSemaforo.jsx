import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
const RangoSemaforo = () => {
  const [show, setShow] = useState(false);
  const [maxIdRangoSemaforo, setmaxIdRangoSemaforo] = useState([]);
  const [RangoSemaforo, setRangoSemaforo] = useState([]);
  const [insercionRangoSemaforo, setIncersionRangoSemaforo] = useState(false);
  const [idEditar, setIdEditar] = useState(0);
  const [nombreEditar, setNombreEditar] = useState("");
  const [desdeEditar, setDesdeEditar] = useState("");
  const [hastaEditar, setHastaEditar] = useState("");
  const [colorEditar, setColorEditar] = useState("");

  useEffect(() => {
    listar();
    fetch("http://127.0.0.1:3900/api/unidadDeMedida/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdRangoSemaforo(doc.maximo);
      });
  }, []);
  const listar = () => {
    fetch("http://127.0.0.1:3900/api/rangoSemaforo/listar")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setRangoSemaforo(doc);
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
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Rango Semáforo
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
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Color</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {RangoSemaforo.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Desde}</td>
                      <td>{res.Hasta}</td>
                      <td>{res.Color}</td>
                      <td>{res.Estado}</td>
                      <td className="text-center">
                        {" "}
                        <button
                          className="btn btn-secondary fa fa-pencil "
                          onClick={(e) => {
                            handleShowEdit();
                            setIdEditar(
                              e.target.parentElement.parentElement.children[0]
                                .textContent
                            );
                            setNombreEditar(
                              e.target.parentElement.parentElement.children[1]
                                .textContent
                            );
                            setDesdeEditar(
                              e.target.parentElement.parentElement.children[2]
                                .textContent
                            );
                            setHastaEditar(
                              e.target.parentElement.parentElement.children[3]
                                .textContent
                            );
                            setColorEditar(
                              e.target.parentElement.parentElement.children[4]
                                .textContent
                            );
                          }}
                        ></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Editar Rango Semáforo</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let idEditar = document.querySelector("#idEditar");
              let nombreEditar = document.querySelector("#nombreEditar");
              let desdeEditar = document.querySelector("#desdeEditar");
              let hastaEditar = document.querySelector("#hastaEditar");
              let colorEditar = document.querySelector("#colorEditar");
              let estadoEditar = document.querySelector("#estadoEditar");
              if (
                nombreEditar.value.length > 0 &&
                desdeEditar.value.length > 0 &&
                hastaEditar.value.length > 0 &&
                colorEditar.value.length > 0
              ) {
                fetch(
                  `http://127.0.0.1:3900/api/rangoSemaforo/editar/${idEditar.value}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `Nombre=${nombreEditar.value}&Desde=${desdeEditar.value}&Hasta=${hastaEditar.value}&Color=${colorEditar.value}&Estado=${estadoEditar.value}`,
                  }
                )
                  .then((response) => {
                    return response.json();
                  })
                  .then((res) => {
                    Swal.fire({
                      title: "Buen trabajo!",
                      text: "Editado correctamente!",
                      icon: "success",
                    });
                    fetch("http://127.0.0.1:3900/api/rangoSemaforo/listar")
                      .then((response) => {
                        return response.json();
                      })
                      .then((doc) => {
                        setRangoSemaforo(doc);
                      });
                  });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error!",
                  text: "Ingresa todos los datos",
                });
              }
            }}
          >
            <Modal.Body>
              <div className="mb-3" hidden>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  id <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idEditar"
                  disabled
                  defaultValue={idEditar}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEditar"
                  aria-describedby="emailHelp"
                  defaultValue={nombreEditar}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Desde <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desdeEditar"
                  defaultValue={desdeEditar}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Hasta <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hastaEditar"
                  defaultValue={hastaEditar}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Color <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="colorEditar"
                  defaultValue={colorEditar}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estadoEditar"
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

export default RangoSemaforo;
