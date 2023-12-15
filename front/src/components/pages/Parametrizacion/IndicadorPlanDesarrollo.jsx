import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const IndicadorPlanDesarrollo = () => {
  const [show, setShow] = useState(false);
  const [maxIdIndicador, setmaxIdIndicador] = useState([]);
  const [Indicador, setIndicador] = useState([]);
  const [insercionIndicador, setIncersionIndicador] = useState(false);
  const [Plan, setPlan] = useState([]);
  const [Sector, setSector] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(5);
  const [busqueda, setBusqueda] = useState(0);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/plan/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPlan(doc);
      });
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSector(doc);
      });
    fetch(
      `http://127.0.0.1:3900/api/planDeDesarrollo/listar?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setIndicador(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
    fetch("http://127.0.0.1:3900/api/planDeDesarrollo/maximo/id")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setmaxIdIndicador(doc.maximo);
      });
  }, [pagina, fila]);
  const selectPagina = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistros;
    let nRegistrosPP = selectedValue;
    setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/planDeDesarrollo/listar?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setIndicador(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/planDeDesarrollo/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setIndicador(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/planDeDesarrollo/listar?page=${pagina}&size=${fila}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setIndicador(doc.desarrollo);
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
            Indicador Plan de Desarrollo
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
                  <th>Descripción</th>
                  <th>Sector</th>
                  <th>Plan de Desarrollo</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {Indicador.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.Nombre}</td>
                      <td>{res.Descripcion}</td>
                      <td>{res.Sector}</td>
                      <td>{res.Plan_de_desarrollo}</td>
                      <td>{res.Estado}</td>
                      <td className="text-center">
                        {" "}
                        <button
                          className="btn btn-secondary fa fa-pencil"
                          onClick={handleShowEdit}
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
            <Modal.Title>Agregar Indicador Plan de Desarrollo</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idIndicador");
              let nombre = document.querySelector(
                "#nombreIndicadorPlanDesarrollo"
              );
              let descripcion = document.querySelector(
                "#descripcionIndicadorPlanDesarrollo"
              );
              let estado = document.querySelector("#estadoIndicador");
              let planDes = document.querySelector("#planIndicador");
              let sector = document.querySelector(
                "#sectorIndicadorPlanDesarrollo"
              );
              fetch("http://127.0.0.1:3900/api/planDeDesarrollo/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Descripcion=${descripcion.value}&Sector=${sector.value}&Plan_de_desarrollo=${planDes.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  setIndicador([
                    ...Indicador,
                    {
                      id: id.value,
                      Nombre: nombre.value,
                      Descripcion: descripcion.value,
                      Sector: sector.value,
                      Plan_de_desarrollo: planDes.value,
                      Estado: estado.value,
                    },
                  ]);
                  setIncersionIndicador(true);
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
                  id="idIndicador"
                  disabled
                  value={maxIdIndicador + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreIndicadorPlanDesarrollo"
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
                  id="descripcionIndicadorPlanDesarrollo"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sector <b className="text-danger">*</b>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="sectorIndicadorPlanDesarrollo"
                >
                  {Sector.map((element) => (
                    <option key={element.id} value={element.Nombre}>
                      {element.Nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Plan de desarrollo
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="planIndicador"
                >
                  {Plan.map((element) => (
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
                  id="estadoIndicador"
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
            <Modal.Title>Editar Indicador Plan de Desarrollo</Modal.Title>
          </Modal.Header>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let id = document.querySelector("#idIndicador");
              let nombre = document.querySelector(
                "#nombreIndicadorPlanDesarrollo"
              );
              let descripcion = document.querySelector(
                "#descripcionIndicadorPlanDesarrollo"
              );
              let estado = document.querySelector("#estadoIndicador");
              let planDes = document.querySelector("#planIndicador");
              let sector = document.querySelector(
                "#sectorIndicadorPlanDesarrollo"
              );
              fetch("http://127.0.0.1:3900/api/planDeDesarrollo/agregar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `id=${id.value}&Nombre=${nombre.value}&Descripcion=${descripcion.value}&Sector=${sector.value}&Plan_de_desarrollo=${planDes.value}&Estado=${estado.value}`,
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log(res);
                  setIncersionIndicador(true);
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
                  id="idIndicador"
                  disabled
                  value={maxIdIndicador + 1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreIndicadorPlanDesarrollo"
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
                  id="descripcionIndicadorPlanDesarrollo"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sector <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sectorIndicadorPlanDesarrollo"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Plan de desarrollo
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="planIndicador"
                >
                  {Plan.map((element) => (
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
                  id="estadoIndicador"
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

export default IndicadorPlanDesarrollo;
