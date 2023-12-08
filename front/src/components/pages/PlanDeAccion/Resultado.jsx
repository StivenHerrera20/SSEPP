import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
const Resultado = () => {
  const [enable, setEnable] = useState("");
  const [sector, setSectores] = useState([]);
  const [entidad, setEntidades] = useState([]);
  const [enfoque, setEnfoque] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [Plan, setPlan] = useState([]);
  const [Indicador, setIndicador] = useState([]);
  const [fechaInicio, setFechaInicio] = useState(0);
  const [fechaFin, setFechaFin] = useState(0);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState([]);
  const [meta, setMeta] = useState([]);
  const [totalMeta, setTotalMeta] = useState("0.00");
  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
      });
    fetch(
      `http://127.0.0.1:3900/api/politicasPublicas/traerFechas/?nombre=${localStorage.getItem(
        "nombre"
      )}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setFechaInicio(doc.resultado[0].fecha_inicio.slice(0, 4));
        setFechaFin(doc.resultado[0].fecha_fin.slice(0, 4));
      });
    fetch("http://127.0.0.1:3900/api/entidad/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch("http://127.0.0.1:3900/api/plan/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPlan(doc);
      });
    fetch("http://127.0.0.1:3900/api/planDeDesarrollo/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setIndicador(doc);
      });
    fetch(`http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
    fetch(
      `http://127.0.0.1:3900/api/resultadoHasMeta/listarMeta/` +
        localStorage.getItem("idObjetivo")
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setMeta(doc.resultado);
        if (doc.resultado.length > 0) {
          const generarItems = () => {
            if (fechaInicio && fechaFin) {
              let resta = fechaFin - fechaInicio;
              const generatedItems = [];
              for (let i = 0; i <= resta; i++) {
                const year = parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                generatedItems.push({
                  title: year.toString(), // Establece el año como título
                  cardDetailedText: doc.resultado[i].meta, // Establece el valor por defecto "000"
                });
              }
              return generatedItems;
            }
            return [];
          };
          const itemsGenerated = generarItems();
          setItems(itemsGenerated);
          setTotalMeta(doc.resultado[doc.resultado.length - 1].meta);
        } else {
          const generarItems = () => {
            if (fechaInicio && fechaFin) {
              let resta = fechaFin - fechaInicio;
              const generatedItems = [];
              for (let i = 0; i <= resta; i++) {
                const year = parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                generatedItems.push({
                  title: year.toString(), // Establece el año como título
                  cardDetailedText: "000", // Establece el valor por defecto "000"
                });
              }
              return generatedItems;
            }
            return [];
          };
          const itemsGenerated = generarItems();
          setItems(itemsGenerated);
          setTotalMeta("000");
        }
      });
  }, [fechaInicio, fechaFin]);

  const renderYears = () => {
    const updateTotalMeta = (index, value) => {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Solo actualiza totalMeta si es el último input modificado
      if (index === items.length - 1) {
        setTotalMeta(value);
      }
    };

    return items.map((item, index) => (
      <div key={index} className="mb-3">
        <label htmlFor="" className="form-label">
          {item.title}
        </label>
        <input
          type="text"
          className="form-control"
          defaultValue={item.cardDetailedText}
          onChange={(e) => updateTotalMeta(index, e.target.value)}
        />
      </div>
    ));
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

  /* let items = [];
  for (let i = 0; i <= resta; i++) {
    const year = parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
    items.push({
      title: year.toString(), // Establece el año como título
      cardDetailedText: "000", // Establece el valor por defecto "000"
    });
  }
  console.log(items); */

  /* const items2 = [
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
  console.log(items2); */
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
                        body: `nombre_resultado=${
                          nombre.value
                        }&importancia_relativa=${
                          importancia.value
                        }&sector_responsable=${
                          sector.value
                        }&entidad_responsable=${
                          entidad.value
                        }&id_objetivo=${id}&politica=${localStorage.getItem(
                          "nombre"
                        )}&objetivo=${localStorage.getItem("objetivo")}`,
                      }
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((res) => {
                        localStorage.setItem("nombreResultado", nombre.value);
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
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  let nombreIndicador =
                    document.querySelector("#nombreIndicador");
                  let formulaIndicador =
                    document.querySelector("#formulaIndicador");
                  let tipoAnulacion = document.querySelector("#tipoAnulacion");
                  let aplicaIndicador =
                    document.querySelector("#aplicaIndicador");
                  let pdd = document.querySelector("#pdd");
                  let indicadorPdd = document.querySelector("#indicadorPdd");
                  let fechaInicio = document.querySelector("#fechaInicio");
                  let fechaFin = document.querySelector("#fechaFin");
                  let disponible = document.querySelector("#disponible");
                  let fechaBase = document.querySelector("#fechaBase");
                  let fuenteIndicador =
                    document.querySelector("#fuenteIndicador");
                  let estaDisponible = disponible.checked;
                  let valorIndicador =
                    document.querySelector("#valorIndicador");
                  if (!estaDisponible) {
                    if (aplicaIndicador.value == "Si") {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        pdd.value.length > 0 &&
                        indicadorPdd.value.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/resultadoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=${pdd.value}&indicador_pdd=${
                              indicadorPdd.value
                            }&inicio=${fechaInicio.value}&fin=${
                              fechaFin.value
                            }&disponible=Si&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}&politica=${localStorage.getItem(
                              "nombre"
                            )}&objetivo=${localStorage.getItem("objetivo")}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    } else {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/resultadoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=N/A&indicador_pdd=N/A&inicio=${
                              fechaInicio.value
                            }&fin=${fechaFin.value}&disponible=Si&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    }
                  } else {
                    if (aplicaIndicador.value == "Si") {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        pdd.value.length > 0 &&
                        indicadorPdd.value.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/resultadoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=${pdd.value}&indicador_pdd=${
                              indicadorPdd.value
                            }&inicio=${fechaInicio.value}&fin=${
                              fechaFin.value
                            }&disponible=No&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    } else {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/resultadoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=N/A&indicador_pdd=N/A&inicio=${
                              fechaInicio.value
                            }&fin=${fechaFin.value}&disponible=No&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    }
                  }
                  localStorage.setItem("tipo", tipoAnulacion.value);
                  localStorage.setItem("linea", fuenteIndicador.value);
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Nombre del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreIndicador"
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
                    id="formulaIndicador"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Tipo de Anualización <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipoAnulacion"
                  >
                    <option value="Creciente">Creciente</option>
                    <option value="Decreciente">Decreciente</option>
                    <option value="Constante">Constante</option>
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
                      id="aplicaIndicador"
                    >
                      <option
                        value="Si"
                        /* onClick={() => {
                          setEnable("false");
                        }} */
                      >
                        Si
                      </option>
                      <option
                        value="No"
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
                      id="pdd"
                    >
                      {Plan.map((element) => (
                        <option key={element.id} value={element.Nombre}>
                          {element.Nombre}
                        </option>
                      ))}
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
                      id="indicadorPdd"
                    >
                      {Indicador.map((element) => (
                        <option key={element.id} value={element.Nombre}>
                          {element.Nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <h6 className="mb-3 ">Tiempo de ejecución</h6>
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Inicio <b className="text-danger">*</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaInicio"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Fin <b className="text-danger">*</b>
                    </label>
                    <input type="date" className="form-control" id="fechaFin" />
                  </div>
                </div>
                <div className="row mb-3 d-flex align-items-center m-auto">
                  <div className="col-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="disponible"
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
                    <input
                      type="text"
                      className="form-control"
                      id="valorIndicador"
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="" className="form-label">
                      Fecha de la linea base
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaBase"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Fuente de la linea base
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      id="fuenteIndicador"
                    />
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
                  {items.length > 0 && (
                    <div style={{ height: "950px" }}>
                      {/* {console.log(items)} */}
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
                  )}
                  {items.length == 0 && <p>Vaciooo</p>}
                </div>
                <div className="col-3">
                  <h1>{totalMeta}</h1>
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
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            let total = document.querySelector("#totalMeta");
                            if (total.value.length > 0) {
                              let j = 0;
                              for (let i = fechaInicio; i <= fechaFin; i++) {
                                fetch(
                                  "http://127.0.0.1:3900/api/resultadoHasMeta/agregar",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type":
                                        "application/x-www-form-urlencoded",
                                    },
                                    body: `year=${i}&meta=${
                                      values[j]
                                    }&meta_total=${
                                      total.value
                                    }&id_objetivo=${localStorage.getItem(
                                      "idObjetivo"
                                    )}`,
                                  }
                                )
                                  .then((response) => {
                                    return response.json();
                                  })
                                  .then((res) => {
                                    fetch(
                                      `http://127.0.0.1:3900/api/resultadoHasMeta/listarMeta/` +
                                        localStorage.getItem("idObjetivo")
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((doc) => {
                                        const generarItems = () => {
                                          if (fechaInicio && fechaFin) {
                                            let resta = fechaFin - fechaInicio;
                                            const generatedItems = [];
                                            for (let i = 0; i <= resta; i++) {
                                              const year =
                                                parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                                              generatedItems.push({
                                                title: year.toString(), // Establece el año como título
                                                cardDetailedText:
                                                  doc.resultado[i].meta, // Establece el valor por defecto "000"
                                              });
                                            }
                                            return generatedItems;
                                          }
                                          return [];
                                        };
                                        const itemsGenerated = generarItems();
                                        setItems(itemsGenerated);
                                        renderYears();
                                      });
                                  });
                                j++;
                              }
                            } else {
                              alert("No hay datos");
                            }
                          }}
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
                              <div className="mb-3">
                                Tipo anualización:{" "}
                                {localStorage.getItem("tipo")}
                              </div>
                              <div className="mb-3">
                                Linea Base: {localStorage.getItem("linea")}
                              </div>
                              {renderYears()}
                              <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                  Meta total Resultado
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="0,00"
                                  value={totalMeta}
                                  disabled
                                  id="totalMeta"
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
                              <button type="submit" className="btn btn-primary">
                                Guardar
                              </button>
                            </div>
                          </div>
                        </form>
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
