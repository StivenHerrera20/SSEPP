import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
const ObjetivoDesarrolloSostenible = () => {
  const [show, setShow] = useState(false);
  const [maxIdObjetivo, setmaxIdObjetivo] = useState([]);
  const [Objetivo, setObjetivo] = useState([]);
  const [insercionObjetivo, setIncersionObjetivo] = useState(false);
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(5);
  const [busqueda, setBusqueda] = useState(0);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [idEditar, setIdEditar] = useState(0);
  const [nombreEditar, setNombreEditar] = useState("");
  const [descripcionEditar, setDescripcionEditar] = useState("");
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setObjetivo(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
    fetch("http://127.0.0.1:3900/api/desarrolloSostenible/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdObjetivo(doc.maximo);
      });
  }, [pagina, fila]);
  const selectPagina = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistros;
    let nRegistrosPP = selectedValue;
    setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setObjetivo(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/desarrolloSostenible/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          console.log(doc);
          setObjetivo(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=0&size=5`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setObjetivo(doc.desarrollo);
        });
    }
  };
  const handleSiguiente = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const handleAnterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
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
            className="btn btn-secondary fa fa-plus"
            variant="primary"
            onClick={handleShow}
          ></Button>
          <div>
            <select
              name=""
              id="numeroFilas"
              className="form-select ms-3"
              onChange={selectPagina}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option selected value="5">
                5
              </option>
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
              className="form-control"
              placeholder="Buscar..."
              id="txtTabla"
              onChange={handleSearch}
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
                        <button
                          className="btn btn-secondary fa fa-pencil"
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
                            setDescripcionEditar(
                              e.target.parentElement.parentElement.children[2]
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
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-secondary m-2"
              variant="primary"
              onClick={handleAnterior}
            >
              Anterior
            </Button>
            <Button
              className="btn btn-secondary m-2"
              variant="primary"
              onClick={handleSiguiente}
            >
              Siguiente
            </Button>
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
              console.log(
                id.value,
                nombre.value,
                descripcion.value,
                estado.value
              );
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
                  Swal.fire({
                    title: "Buen trabajo!",
                    text: "Agregado correctamente!",
                    icon: "success",
                  });
                  fetch(
                    `http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=${pagina}&size=${fila}`
                  )
                    .then((response) => {
                      return response.json();
                    })
                    .then((doc) => {
                      setObjetivo(doc.desarrollo);
                      setTotalRegistros(doc.total);
                      setTotalPaginas(Math.ceil(doc.total / fila));
                    });
                  setIncersionObjetivo(true);
                  handleClose();
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
              <Button type="submit" variant="primary">
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
            <Modal.Title>Editar Objetivo de Desarrollo Sostenible</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let idEditar = document.querySelector("#idEditar");
              let nombreEditar = document.querySelector("#nombreEditar");
              let descripcionEditar =
                document.querySelector("#descripcionEditar");
              let estadoEditar = document.querySelector("#estadoEditar");
              if (
                nombreEditar.value.length > 0 &&
                descripcionEditar.value.length > 0
              ) {
                fetch(
                  `http://127.0.0.1:3900/api/desarrolloSostenible/editar/${idEditar.value}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `Nombre=${nombreEditar.value}&Descripcion=${descripcionEditar.value}&Estado=${estadoEditar.value}`,
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
                    fetch(
                      `http://127.0.0.1:3900/api/desarrolloSostenible/listar?page=${pagina}&size=${fila}`
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((doc) => {
                        setObjetivo(doc.desarrollo);
                        setTotalRegistros(doc.total);
                        setTotalPaginas(Math.ceil(doc.total / fila));
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
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="descripcionEditar"
                  rows="5"
                  style={{ resize: "none" }}
                  defaultValue={descripcionEditar}
                ></textarea>
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

export default ObjetivoDesarrolloSostenible;
