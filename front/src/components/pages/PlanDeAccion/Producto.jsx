import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJS.register(LinearScale, CategoryScale, Tooltip, Legend, BarElement);
import { Bar } from "react-chartjs-2";

const Producto = () => {
  const [enable, setEnable] = useState("");
  const [sector, setSectores] = useState([]);
  const [enfoque, setEnfoque] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [entidad, setEntidades] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [enfoqueCheckedItems, setEnfoqueCheckedItems] = useState([]);
  const [objetivosCheckedItems, setObjetivosCheckedItems] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/entidad/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
      });
    fetch(`http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
    fetch(`http://127.0.0.1:3900/api/desarrolloSostenible/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setObjetivos(doc);
      });
  }, []);
  const handleEnfoqueCheckboxChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setEnfoqueCheckedItems([...enfoqueCheckedItems, value]);
    } else {
      const updatedItems = enfoqueCheckedItems.filter((item) => item !== value);
      setEnfoqueCheckedItems(updatedItems);
    }
  };

  // Función para manejar cambios en los checkboxes de 'objetivos'
  const handleObjetivosCheckboxChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setObjetivosCheckedItems([...objetivosCheckedItems, value]);
    } else {
      const updatedItems = objetivosCheckedItems.filter(
        (item) => item !== value
      );
      setObjetivosCheckedItems(updatedItems);
    }
  };
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
  const handleSearchDos = (event) => {
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
          setObjetivos(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(`http://127.0.0.1:3900/api/desarrolloSostenible/listarTodos`)
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setObjetivos(doc);
        });
    }
  };
  let items = [
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

  const data = {
    labels: ["2020", "2021", "2022"],
    datasets: [
      {
        label: "Estimado",
        data: [4, 3, 7],
        responsive: true,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Disponible",
        data: [4, 3, 7],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="costos-tab"
                data-bs-toggle="tab"
                data-bs-target="#costos"
                type="button"
                role="tab"
                aria-controls="costos"
                aria-selected="false"
              >
                Costos
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
                  let nombreProducto =
                    document.querySelector("#nombreProducto");
                  let sector = document.querySelector("#sectorResponsable");
                  let entidad = document.querySelector("#entidadResponsable");
                  let id = localStorage.getItem("idObjetivo");
                  const importancia = document.querySelector("#importancia");
                  if (
                    nombre.value.length > 0 &&
                    nombreProducto.value.length > 0 &&
                    sector.value.length > 0 &&
                    entidad.value.length > 0 &&
                    id.length > 0 &&
                    importancia.value.length > 0
                  ) {
                    fetch(
                      "http://127.0.0.1:3900/api/productoDatosGenerales/agregar",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `nombre_resultado=${nombre.value}&nombre_producto=${nombreProducto.value}&importancia_relativa=${importancia.value}%&sector_responsable=${sector.value}&entidad_responsable=${entidad.value}&id_objetivo=${id}`,
                      }
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((res) => {
                        let idResultado = res.doc[0].max;
                        console.log(importancia.value);
                        fetch(
                          "http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/editar/" +
                            localStorage.getItem("idObjetivo"),
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `importancia_relativa=${importancia.value}%`,
                          }
                        )
                          .then((res) => {
                            return response.json();
                          })
                          .then((res) => {});
                        /* for (let i = 0; i < checkboxes.length; i++) {
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
                        } */
                        enfoqueCheckedItems.forEach((value) => {
                          fetch(
                            `http://127.0.0.1:3900/api/productoDatosGeneralesHasEnfoques/agregar`,
                            {
                              method: "POST",
                              body: `enfoque=${value}&id_resultado_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor si es necesario
                            })
                            .catch((error) => {
                              // Maneja errores si los hay
                            });
                        });
                        objetivosCheckedItems.forEach((value) => {
                          fetch(
                            `http://127.0.0.1:3900/api/productoDatosGeneralesHasEnfoques/agregar`,
                            {
                              method: "POST",
                              body: `enfoque=${value}&id_resultado_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor si es necesario
                            })
                            .catch((error) => {
                              // Maneja errores si los hay
                            });
                        });
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
                    htmlFor="exampleFormControlTextarea2"
                    className="form-label"
                  >
                    Nombre del Resultado
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreResultado"
                    rows="2"
                    style={{ resize: "none" }}
                    defaultValue={localStorage.getItem("nombreResultado")}
                    disabled
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea3"
                    className="form-label"
                  >
                    Nombre del Producto <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreProducto"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Importancia relativa <b className="text-danger">*</b>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="importancia"
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
                        className="form-control mb-2"
                        placeholder="Buscar..."
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
                              onChange={handleEnfoqueCheckboxChange}
                              checked={enfoqueCheckedItems.includes(
                                element.Nombre
                              )}
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
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label "
                  >
                    Objetivos de Desarrollo Sostenible{" "}
                    <b className="text-danger">*</b>
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
                        className="form-control mb-2"
                        placeholder="Buscar..."
                        onChange={handleSearchDos}
                      />
                      <div className="form-check">
                        {objetivos.map((element) => (
                          <div className="form-check" key={element.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={element.Nombre}
                              id={`checkbox-${element.id}`}
                              onChange={handleObjetivosCheckboxChange}
                              checked={objetivosCheckedItems.includes(
                                element.Nombre
                              )}
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
                    htmlFor="exampleFormControlTextarea4"
                    className="form-label"
                  >
                    Nombre del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea4"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea5"
                    className="form-label"
                  >
                    Formula del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea5"
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
                  <h5>Meta Total del Producto</h5>
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-primary bi bi-pencil"
                        data-bs-toggle="modal"
                        data-bs-target="#metaProducto"
                      ></button>
                    </div>

                    <div
                      className="modal fade"
                      id="metaProducto"
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
                                Meta total Producto
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
            <div
              className="tab-pane fade"
              id="costos"
              role="tabpanel"
              aria-labelledby="costos-tab"
            >
              <h1>0,00</h1>
              <h5>
                Costo Total Estimado del Producto, Valores en Millones de Pesos
              </h5>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary bi bi-pencil"
                    data-bs-toggle="modal"
                    data-bs-target="#costosProducto"
                  ></button>
                </div>
                <div className="row">
                  <div className="col">
                    {/*Inicio grafica*/}
                    <Bar data={data} options={config} />
                    {/*Fin grafica*/}
                  </div>
                </div>
                {/* Inicio Modal de los costos */}
                <div
                  className="modal fade"
                  id="costosProducto"
                  tabIndex="-1"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  role="dialog"
                  aria-labelledby="modalTitleId"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">
                          Registrar Costos de Producto
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row mb-3">
                          <b>Valores en Millones de Pesos</b>
                        </div>
                        <div className="row mb-3 ">
                          <div className="col-6">
                            <div className="row">
                              <div className="col d-flex justify-content-center ">
                                <h5>Costo total estimado</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-8 d-flex justify-content-center ms-3">
                                <span className="">0,00</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 ">
                            {" "}
                            <h5>Recurso total disponible</h5>
                            <span className="text-center">0,00</span>
                          </div>
                        </div>
                        <hr className="bg-black mx-0 my-0" />
                        <div className="row mb-3 mt-3">
                          {/*Aca va un ciclo que coloque la cantidad de inputs necesarios segun las fechas*/}
                          <div className="col-1">
                            <h5>Año</h5>
                            <b>
                              <h3>2020</h3>
                            </b>
                          </div>
                          <div className="col-2">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Costo Estimado
                            </label>
                            <div className="input-group mb-3">
                              <span className="input-group-text">$</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Recurso Disponible
                            </label>
                            <div className="input-group mb-3">
                              <span className="input-group-text">$</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,00"
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Fuentes Disponibles
                            </label>
                            <div
                              className="card card-body"
                              style={{
                                height: "90px",
                                scrollbarWidth: "none",
                                overflow: "auto",
                                overflowX: "hidden",
                              }}
                            >
                              <button className="btn my-0 py-0 text-dark">
                                dasdasdas
                              </button>
                              <button className="btn my-0 pd-0 text-dark">
                                dasdasdas
                              </button>
                              <button className="btn my-0 pd-0 text-dark">
                                dasdasdas
                              </button>
                              <button className="btn my-0 pd-0 text-dark">
                                dasdasdas
                              </button>
                              <button className="btn my-0 pd-0 text-dark">
                                dasdasdas
                              </button>
                            </div>
                          </div>
                          <div className="col-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Fuentes Disponibles
                            </label>
                            <div
                              className="card card-body"
                              style={{
                                height: "90px",
                                scrollbarWidth: "none",
                                overflow: "auto",
                                overflowX: "hidden",
                              }}
                            ></div>
                          </div>
                        </div>
                        {/* Incluir este hr dentro del ciclo */}
                        <hr className="bg-black mx-0 my-0" />
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
                {/* Fin Modal de los costos */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
