import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
const Resultado = () => {
  const [enable, setEnable] = useState("");
  const [sector, setSectores] = useState([]);
  const [entidad, setEntidades] = useState([]);
  const [enfoque, setEnfoque] = useState([]);
  const [busqueda, setBusqueda] = useState(0);
  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
      });
    fetch("http://127.0.0.1:3900/api/entidad/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch("http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/enfoqueNivelUno/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setEnfoque(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(`http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos`)
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setEnfoque(doc);
        });
    }
  };

  const items = [
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
  ];
  return (
    <>
      <div className="card card-body">
        <div className="card card-header py-0 px-0">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="datosGenerales-tab"
                data-bs-toggle="tab"
                data-bs-target="#datosGenerales"
                type="button"
                role="tab"
                aria-controls="datosGenerales"
                aria-selected="true"
              >
                Datos Generales
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="indicador-tab"
                data-bs-toggle="tab"
                data-bs-target="#indicador"
                type="button"
                role="tab"
                aria-controls="indicador"
                aria-selected="false"
              >
                Indicador
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="meta-tab"
                data-bs-toggle="tab"
                data-bs-target="#meta"
                type="button"
                role="tab"
                aria-controls="meta"
                aria-selected="false"
              >
                Meta
              </button>
            </li>
          </ul>
        </div>
        <div className="card card-body px-0 py-0">
          <div className="tab-content  p-2" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="datosGenerales"
              role="tabpanel"
              aria-labelledby="datosGenerales-tab"
            >
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  let nombre = document.querySelector("#nombreResultado");
                  let sector = document.querySelector("#sectorResponsable");
                  let entidad = document.querySelector("#entidadResponsable");
                  let id = localStorage.getItem("idObjetivo");
                  let importancia = document.querySelector(
                    "#importanciaRelativa"
                  );
                  if (
                    nombre.value.length > 0 &&
                    sector.value.length > 0 &&
                    entidad.value.length > 0 &&
                    id.length > 0 &&
                    importancia.value.length > 0
                  ) {
                    fetch(
                      "http://127.0.0.1:3900/api/resultadoDatosGenerales/agregar",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `nombre_resultado=${nombre.value}&importancia_relativa=${importancia.value}&sector_responsable=${sector.value}&entidad_responsable=${entidad.value}&id_objetivo=${id}`,
                      }
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((res) => {
                        const checkboxes = document.querySelectorAll(
                          'input[type="checkbox"]:checked'
                        );
                        let idResultado = res.doc[0].max;
                        for (let i = 0; i < checkboxes.length; i++) {
                          // Envía los valores seleccionados al servidor, por ejemplo, como un JSON en el cuerpo de la solicitud
                          fetch(
                            "http://127.0.0.1:3900/api/resultadoDatosGeneralesHasEnfoques/agregar",
                            {
                              method: "POST",
                              body: `enfoque=${checkboxes[i].value}&id_resultado_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor
                            })
                            .catch((error) => {
                              // Maneja errores
                            });
                        }
                      });
                  } else {
                    alert("Revisar los datos");
                  }
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Objetivo Especifico
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    disabled
                    defaultValue={localStorage.getItem("objetivo")}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Nombre del Resultado <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreResultado"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Importancia relativa
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="importanciaRelativa"
                      defaultValue={localStorage.getItem("importancia")}
                      disabled
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Sector Responsable <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="sectorResponsable"
                  >
                    {sector.map((element) => (
                      <option
                        key={element.id}
                        value={element.Nombre}
                        id="sector"
                      >
                        {element.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Entidad Responsable <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="entidadResponsable"
                  >
                    {entidad.map((element) => (
                      <option
                        key={element.id}
                        value={element.Nombre}
                        id="Entidad"
                      >
                        {element.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label "
                  >
                    Enfoques <b className="text-danger">*</b>
                  </label>
                  <div className="card w-75 px-0 bg-primary">
                    <div
                      className="card m-2 p-3 "
                      style={{
                        scrollbarWidth: "none",
                        overflow: "auto",
                        overflowX: "hidden",
                        height: "150px",
                      }}
                    >
                      <input
                        type="text"
                        name=""
                        className="form-control mb-2"
                        placeholder="Buscar..."
                        id="txtTabla"
                        onChange={handleSearch}
                      />
                      <div className="form-check">
                        {enfoque.map((element) => (
                          <div className="form-check" key={element.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={element.Nombre}
                              id={`checkbox-${element.id}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${element.id}`}
                            >
                              {element.Nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary m-2">Guardar</button>
                    <button className="btn btn-secondary m-2">Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="indicador"
              role="tabpanel"
              aria-labelledby="indicador-tab"
            >
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Nombre del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Formula del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Tipo de Anulación <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">...</option>
                    <option value="2">...</option>
                    <option value="3">...</option>
                  </select>
                </div>
                <div className="row mb-3">
                  <div className="col-4">
                    <label htmlFor="" className="form-label">
                      Aplica Indicador PDD? <b className="text-danger">*</b>
                    </label>
                    <select
                      className="form-select w-50"
                      aria-label="Default select example"
                    >
                      <option
                        value="1"
                        onClick={() => {
                          setEnable("false");
                        }}
                      >
                        Si
                      </option>
                      <option
                        value="2"
                        onClick={() => {
                          setEnable("true");
                        }}
                      >
                        No
                      </option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="form-label">
                      Plan de Desarrollo
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      disabled={enable}
                    >
                      <option value="1">...</option>
                      <option value="2">...</option>
                      <option value="3">...</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <label htmlFor="" className="form-label">
                      Indicador PDD
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      disabled={enable}
                    >
                      <option value="1">...</option>
                      <option value="2">...</option>
                      <option value="3">...</option>
                    </select>
                  </div>
                </div>
                <h6 className="mb-3 ">Tiempo de ejecución</h6>
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Inicio <b className="text-danger">*</b>
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Fin <b className="text-danger">*</b>
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3 d-flex align-items-center m-auto">
                  <div className="col-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        No disponible
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="form-label">
                      Valor
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-5">
                    <label htmlFor="" className="form-label">
                      Fecha de la linea base
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Fuente de la linea base
                    </label>
                    <input type="text" className="form-control w-75" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary m-2">Guardar</button>
                    <button className="btn btn-secondary m-2">Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="meta"
              role="tabpanel"
              aria-labelledby="meta-tab"
            >
              <div className="row mt-3 mb-3">
                <div className="col-9 w-100">
                  <div style={{ height: "950px" }}>
                    <Chrono
                      items={items}
                      theme={{
                        primary: "#4e73df",
                        secondary: "#36b9cc",
                        titleColor: "black",
                        titleColorActive: "black",
                      }}
                      mode="VERTICAL_ALTERNATING"
                      hideControls
                      cardHeight={"20px"}
                    />
                  </div>
                </div>
                <div className="col-3">
                  <h1>0,00</h1>
                  <h5>Meta Total del resultado</h5>
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-primary bi bi-pencil"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      ></button>
                    </div>

                    <div
                      className="modal fade"
                      id="modalId"
                      tabIndex="-1"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      role="dialog"
                      aria-labelledby="modalTitleId"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                              Registrar Metas
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">Tipo anualización: ...</div>
                            <div className="mb-3">Linea Base: ...</div>
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                2020
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                2021
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                2022
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">
                                Meta total Resultado
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cancelar
                            </button>
                            <button type="button" className="btn btn-primary">
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resultado;
