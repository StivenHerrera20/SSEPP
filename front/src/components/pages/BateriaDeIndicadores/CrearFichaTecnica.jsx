import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
const CrearFichaTecnica = ({ controlBI, setControlBI }) => {
  const [enable, setEnable] = useState("");
  const [publicar, setPublicar] = useState(0);
  const [resultado, setResultado] = useState("");
  const [producto, setProducto] = useState("");
  const [sector, setSector] = useState("");
  const [entidad, setEntidad] = useState("");
  const [totalMeta, setTotalMeta] = useState(0);
  const [items, setItems] = useState([]);
  const [fechaInicio, setFechaInicio] = useState(0);
  const [fechaFin, setFechaFin] = useState(0);
  const [meta, setMeta] = useState([]);
  useEffect(() => {
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
    fetch(
      `http://127.0.0.1:3900/api/resultadoHasMeta/listarMeta/${localStorage.getItem(
        "idObj"
      )}`
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
    fetch(
      `http://127.0.0.1:3900/api/resultadoDatosGenerales/listarTodos/${localStorage.getItem(
        "idObj"
      )}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setResultado(doc.resultado.rows[0].nombre_resultado);
        setSector(doc.resultado.rows[0].sector_responsable);
        setEntidad(doc.resultado.rows[0].entidad_responsable);
      });
    fetch(
      `http://127.0.0.1:3900/api/productoDatosGenerales/listarTodos/${localStorage.getItem(
        "idObj"
      )}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setProducto(doc.resultado.rows[0].nombre_resultado);
      });
  }, [fechaInicio, fechaFin]);

  /* let items = [
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
  ]; */
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body d-flex">
          <button
            className="btn btn-primary "
            onClick={(e) => {
              e.preventDefault();
              setControlBI(0);
            }}
          >
            Indicadores
          </button>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {" "}
            Crear Ficha Técnica
          </h2>
        </div>
        <hr className="sidebar-divider my-0 " />

        <div className="row mt-2">
          <div className="col">
            <div className="card-body">
              <div className="card card-header py-0 px-0">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="informacionGeneral-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#informacionGeneral"
                      type="button"
                      role="tab"
                      aria-controls="informacionGeneral"
                      aria-selected="true"
                    >
                      Información General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="medicion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#medicion"
                      type="button"
                      role="tab"
                      aria-controls="medicion"
                      aria-selected="false"
                    >
                      Medición
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
                      Metas
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="responsable-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#responsable"
                      type="button"
                      role="tab"
                      aria-controls="responsable"
                      aria-selected="false"
                    >
                      Responsable
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="aprobacion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aprobacion"
                      type="button"
                      role="tab"
                      aria-controls="aprobacion"
                      aria-selected="false"
                    >
                      Aprobación
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card card-body px-0 py-0">
                <div className="tab-content  p-2" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="informacionGeneral"
                    role="tabpanel"
                    aria-labelledby="informacionGeneral-tab"
                  >
                    <div className="row">
                      <div className="col-8">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Nombre del Indicador
                          </label>
                          <textarea
                            className="form-control"
                            id="nombreIndicador"
                            rows="2"
                            disabled
                            value={localStorage.getItem("nombreIndicador")}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea2"
                            className="form-label"
                          >
                            Politica pública asociada
                          </label>
                          <textarea
                            className="form-control"
                            id="politicaAsociada"
                            rows="2"
                            value={localStorage.getItem("politicaAsociada")}
                            style={{ resize: "none" }}
                            disabled
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Objetivo especifico asociado
                          </label>
                          <textarea
                            className="form-control"
                            id="objetivoAsociado"
                            rows="2"
                            disabled
                            value={localStorage.getItem("objetivoAsociado")}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Resultado
                          </label>
                          <textarea
                            className="form-control"
                            id="resultado"
                            rows="2"
                            disabled
                            value={resultado}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Producto
                          </label>
                          <textarea
                            className="form-control"
                            id="producto"
                            rows="2"
                            disabled
                            value={producto}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Sector Responsable
                          </label>
                          <textarea
                            className="form-control"
                            id="sector"
                            rows="2"
                            disabled
                            value={sector}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Entidad Responsable
                          </label>
                          <textarea
                            className="form-control"
                            id="entidad"
                            rows="2"
                            disabled
                            value={entidad}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-1">
                          <h6>Plan Distrital de Desarrollo - PDD</h6>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-4">
                              <label htmlFor="" className="form-label">
                                Plan de Desarrollo
                              </label>
                              <textarea
                                className="form-control"
                                id="pdd"
                                rows="2"
                                disabled
                                value={localStorage.getItem("pdd")}
                                style={{ resize: "none" }}
                              ></textarea>
                            </div>
                            <div className="col-4">
                              <label htmlFor="" className="form-label">
                                Indicador PDD
                              </label>
                              <textarea
                                className="form-control"
                                id="indicador"
                                rows="2"
                                disabled
                                value={localStorage.getItem("indicador")}
                                style={{ resize: "none" }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <form
                          action=""
                          onSubmit={(e) => {
                            e.preventDefault();
                            let nombreIndicador =
                              document.querySelector("#nombreIndicador");
                            let politicaAsociada =
                              document.querySelector("#politicaAsociada");
                            let objetivoAsociado =
                              document.querySelector("#objetivoAsociado");
                            let resultado =
                              document.querySelector("#resultado");
                            let producto = document.querySelector("#producto");
                            let sector = document.querySelector("#sector");
                            let entidad = document.querySelector("#entidad");
                            let pdd = document.querySelector("#pdd");
                            let indicador =
                              document.querySelector("#indicador");
                            let descripcion =
                              document.querySelector("#descripcion");
                            let aspectos = document.querySelector("#aspectos");
                            if (
                              descripcion.value.length > 0 &&
                              aspectos.value.length > 0
                            ) {
                              fetch(
                                "http://127.0.0.1:3900/api/fichaTecnicaInformacion/agregar",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type":
                                      "application/x-www-form-urlencoded",
                                  },
                                  body: `nombre_indicador=${
                                    nombreIndicador.value
                                  }&politica_asociada=${
                                    politicaAsociada.value
                                  }&objetivo_asociado=${
                                    objetivoAsociado.value
                                  }&resultado=${resultado.value}&producto=${
                                    producto.value
                                  }&sector=${sector.value}&entidad=${
                                    entidad.value
                                  }&pdd=${pdd.value}&indicador_pdd=${
                                    indicador.value
                                  }&descripcion=${descripcion.value}&aspectos=${
                                    aspectos.value
                                  }&idIndicador=${localStorage.getItem(
                                    "idIndicador"
                                  )}`,
                                }
                              )
                                .then((response) => {
                                  return response.json();
                                })
                                .then((res) => {});
                            } else {
                              alert("Datos Incompletos");
                            }
                          }}
                        >
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlTextareaDesProd"
                              className="form-label"
                            >
                              Descripcion de Producto
                            </label>
                            <textarea
                              className="form-control"
                              id="descripcion"
                              rows="2"
                              style={{ resize: "none" }}
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlTextareaAspectCons"
                              className="form-label"
                            >
                              Aspectos a considerar para el desarrollo del
                              producto
                            </label>
                            <textarea
                              className="form-control"
                              id="aspectos"
                              rows="2"
                              style={{ resize: "none" }}
                            ></textarea>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              type="sumit"
                              className="btn btn-primary m-1"
                            >
                              Guardar
                            </button>
                            <button className="btn btn-secondary m-1">
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="medicion"
                    role="tabpanel"
                    aria-labelledby="medicion-tab"
                  >
                    <form
                      action=""
                      onSubmit={(e) => {
                        e.preventDefault();
                        let formula = document.querySelector("#formula");
                        let unidad = document.querySelector("#unidad");
                        let periodicidad =
                          document.querySelector("#periodicidad");
                        let valor = document.querySelector("#valor");
                        let fechaBase = document.querySelector("#fechaBase");
                        let fuente = document.querySelector("#fuente");
                        let fechaInicio =
                          document.querySelector("#fechaInicio");
                        let fechaFin = document.querySelector("#fechaFin");
                        let territorializacion = document.querySelector(
                          "#territorializacion"
                        );
                        let metodologia =
                          document.querySelector("#metodologia");
                        let fuentes = document.querySelector("#fuentes");
                        let dias = document.querySelector("#dias");
                        let serie = document.querySelector("#serie");
                        if (
                          metodologia.value.length > 0 &&
                          fuentes.value.length > 0 &&
                          dias.value.length > 0 &&
                          serie.value.length > 0
                        ) {
                          fetch(
                            "http://127.0.0.1:3900/api/fichaTecnicaMedicion/agregar",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                              body: `formula=${formula.value}&unidad=${
                                unidad.value
                              }&periodicidad=${periodicidad.value}&valor=${
                                valor.value
                              }&fechaBase=${fechaBase.value}&fuenteBase=${
                                fuente.value
                              }&fechaBaseInicio=${
                                fechaInicio.value
                              }&fechaBaseFin=${
                                fechaFin.value
                              }&territorializacion=${
                                territorializacion.value
                              }&metodologia=${metodologia.value}&fuentes=${
                                fuentes.value
                              }&dias_rezago=${dias.value}&serie=${
                                serie.value
                              }&idIndicador=${localStorage.getItem(
                                "idIndicador"
                              )}`,
                            }
                          )
                            .then((response) => {
                              return response.json();
                            })
                            .then((res) => {});
                        } else {
                          alert("Datos Incompletos");
                        }
                      }}
                    >
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Fórmula de cálculo
                        </label>
                        <textarea
                          className="form-control"
                          id="formula"
                          rows="2"
                          disabled
                          value={localStorage.getItem("formula")}
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>

                      <div className="row mb-3">
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Unidad de medida
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            id="unidad"
                          >
                            <option value="Acuerdos">Acuerdos</option>
                            <option value="Habitantes">Habitantes</option>
                            <option value="Hectareas">Hectareas</option>
                            <option value="Kilometros">Kilometros</option>
                            <option value="Kilos">Kilos</option>
                            <option value="Metros">Metros</option>
                            <option value="Millas">Millas</option>
                            <option value="Personas">Personas</option>
                            <option value="Porcentaje">Porcentaje</option>
                            <option value="Tasa">Tasa</option>
                            <option value="Toneladas">Toneladas</option>
                            <option value="Unidad Productiva Rural">
                              Unidad Productiva Rural
                            </option>
                            <option value="Indice">Indice</option>
                          </select>
                        </div>
                        <div className="col-4 d-flex">
                          <div className="form-check m-auto">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id=""
                            />
                            <label className="form-check-label" htmlFor="">
                              Otra medida
                            </label>
                          </div>
                        </div>
                        <div className="col-4">
                          {" "}
                          <label htmlFor="" className="form-label">
                            ¿Cúal?
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Peridicidad de medición
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="periodicidad"
                        >
                          <option value="Mensual">Mensual</option>
                          <option value="Bimestral">Bimestral</option>
                          <option value="Trimestral">Trimestral</option>
                          <option value="Semestral">Semestral</option>
                          <option value="Anual">Anual</option>
                        </select>
                      </div>
                      <h6 className="mb-2">Linea Base</h6>
                      <div className="row mb-3">
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Valor
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            id="valor"
                            value={localStorage.getItem("valorBase")}
                          />
                        </div>
                        <div className="col-4">
                          {" "}
                          <label htmlFor="" className="form-label">
                            Fecha de la línea base
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            id="fechaBase"
                            value={localStorage.getItem("fechaBase")}
                          />
                        </div>
                        <div className="col-4">
                          {" "}
                          <label htmlFor="" className="form-label">
                            Fuente de la línea base
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            id="fuente"
                            value={localStorage.getItem("fuente")}
                          />
                        </div>
                      </div>
                      <h6 className="mb-2 ">Tiempo de ejecución</h6>
                      <div className="row mb-3">
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Inicio
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            id="fechaInicio"
                            value={localStorage.getItem("fechaInicio")}
                          />
                        </div>
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Fin
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            id="fechaFin"
                            value={localStorage.getItem("fechaFin")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Territorialización del indicador
                          </label>
                          <select
                            className="form-select w-25"
                            aria-label="Default select example"
                            id="territorializacion"
                          >
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-4">
                          <label htmlFor="" className="form-label">
                            Nivel
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="1">...</option>
                            <option value="2">...</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlTextareaMetod"
                            className="form-label"
                          >
                            Metodologia de medición
                          </label>
                          <textarea
                            className="form-control "
                            id="metodologia"
                            rows="2"
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Fuentes de información
                          </label>
                          <textarea
                            className="form-control "
                            id="fuentes"
                            rows="2"
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Dias de rezago
                          </label>
                          <input
                            type="number"
                            className="form-control w-25"
                            id="dias"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Serie disponible
                          </label>
                          <textarea
                            className="form-control "
                            id="serie"
                            rows="2"
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-end">
                          <button className="btn btn-primary m-1">
                            Guardar
                          </button>
                          <button className="btn btn-secondary m-1">
                            Cancelar
                          </button>
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
                        <h5>Meta Total del Producto</h5>
                        <h5>Tipo de Anualización: CRECIENTE</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show "
                    id="responsable"
                    role="tabpanel"
                    aria-labelledby="responsable-tab"
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        let entidad = document.querySelector("#entidad");
                        let funcionario =
                          document.querySelector("#funcionario");
                        let cargo = document.querySelector("#cargo");
                        let dependencia =
                          document.querySelector("#dependencia");
                        let roles = document.querySelector("#roles");
                        let correo = document.querySelector("#correo");
                        let telefono = document.querySelector("#telefono");
                        if (
                          entidad.value.length > 0 &&
                          funcionario.value.length > 0 &&
                          cargo.value.length > 0 &&
                          dependencia.value.length > 0 &&
                          roles.value.length > 0 &&
                          correo.value.length > 0 &&
                          telefono.value.length > 0
                        ) {
                          fetch(
                            "http://127.0.0.1:3900/api/fichaTecnicaResponsable/agregar",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                              body: `entidad=${entidad.value}&funcionario=${
                                funcionario.value
                              }&cargo=${cargo.value}&dependencia=${
                                dependencia.value
                              }&roles=${roles.value}&correo=${
                                correo.value
                              }&telefono=${
                                telefono.value
                              }&idIndicador=${localStorage.getItem(
                                "idIndicador"
                              )}`,
                            }
                          )
                            .then((response) => {
                              return response.json();
                            })
                            .then((res) => {});
                        } else {
                          alert("Datos Incompletos");
                        }
                      }}
                    >
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Entidad
                          </label>
                          <textarea
                            className="form-control"
                            id="entidad"
                            rows="2"
                            disabled
                            value={entidad}
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Nombre Funcionario
                          </label>
                          <input
                            id="funcionario"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Cargo
                          </label>
                          <input
                            id="cargo"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Dependencia
                          </label>
                          <input
                            id="dependencia"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Roles
                          </label>
                          <input
                            id="roles"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Correo electronico
                          </label>
                          <input
                            id="correo"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label htmlFor="" className="form-label">
                            Telefono
                          </label>
                          <input
                            id="telefono"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <button type="sumit" className="btn btn-primary m-1">
                          Guardar
                        </button>
                        <button className="btn btn-secondary m-1">
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="aprobacion"
                    role="tabpanel"
                    aria-labelledby="aprobacion-tab"
                  >
                    <div className="card shadow m-3">
                      <div className="card-body">
                        {(() => {
                          //Desicion para controlar el contenido del div de interacciones
                          if (publicar == 0) {
                            return (
                              <>
                                <div className="row">
                                  <div className="col">
                                    <h6>
                                      El indicador esta listo para publicarse.
                                    </h6>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col d-flex justify-content-center">
                                    <button
                                      className="btn btn-primary  m-2 p-2 "
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalId"
                                    >
                                      <i className="fa fa-save"></i> Publicar
                                    </button>
                                  </div>
                                </div>

                                <div
                                  class="modal fade"
                                  id="modalId"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="modalTitleId"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5
                                          class="modal-title"
                                          id="modalTitleId"
                                        >
                                          Publicación del Indicador
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <div className="mb-3">
                                          <label
                                            for="exampleInputPassword1"
                                            className="form-label"
                                          >
                                            Justificación{" "}
                                            <b className="text-danger">*</b>
                                          </label>
                                          <textarea
                                            className="form-control"
                                            name=""
                                            id="justificacion"
                                            rows="5"
                                            style={{ resize: "none" }}
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            let justificacion =
                                              document.querySelector(
                                                "#justificacion"
                                              );
                                            if (
                                              justificacion.value.length > 0
                                            ) {
                                              setPublicar(1);
                                              localStorage.setItem(
                                                "justificacion",
                                                justificacion.value
                                              );
                                            } else {
                                              alert(
                                                "llenar el campo por favor"
                                              );
                                            }
                                          }}
                                        >
                                          Guardar
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Cancelar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          } else {
                            if (publicar == 1) {
                              return (
                                <>
                                  <div className="row">
                                    <div className="col">
                                      <h6>
                                        El indicador esta publicado, pendiente
                                        por aprobación.
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col d-flex justify-content-center">
                                      <button
                                        className="btn btn-primary m-2 p-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#confirmarPubli"
                                      >
                                        <i className="fa fa-save "></i> Aprobar
                                      </button>
                                    </div>
                                  </div>

                                  <div
                                    class="modal fade"
                                    id="confirmarPubli"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="modalTitleId"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <form onSubmit={(e) => {}}>
                                          <div class="modal-header">
                                            <h5
                                              class="modal-title"
                                              id="modalTitleId"
                                            >
                                              Aprobación del Indicador
                                            </h5>
                                            <button
                                              type="button"
                                              class="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div class="modal-body">
                                            <div className="mb-3">
                                              <label
                                                for="exampleInputPassword1"
                                                className="form-label"
                                              >
                                                Estado{" "}
                                                <b className="text-danger">*</b>
                                              </label>
                                              <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                id="estado"
                                              >
                                                <option value="Aprobada">
                                                  Aprobada
                                                </option>
                                                <option value="Rechazada">
                                                  Rechazada
                                                </option>
                                              </select>
                                            </div>
                                            <div className="mb-3">
                                              <label
                                                for="exampleInputPassword1"
                                                className="form-label"
                                              >
                                                Observaciones{" "}
                                                <b className="text-danger">*</b>
                                              </label>
                                              <textarea
                                                className="form-control"
                                                name=""
                                                id="observaciones"
                                                rows="5"
                                                style={{ resize: "none" }}
                                              ></textarea>
                                            </div>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-primary"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                let fechaActual = new Date();
                                                // Formatear la fecha en el formato que necesitas (por ejemplo, YYYY-MM-DD)
                                                let fechaFormateada =
                                                  fechaActual
                                                    .toISOString()
                                                    .split("T")[0];
                                                let Observaciones =
                                                  document.querySelector(
                                                    "#observaciones"
                                                  );
                                                let estado =
                                                  document.querySelector(
                                                    "#estado"
                                                  );
                                                if (
                                                  Observaciones.value.length > 0
                                                ) {
                                                  fetch(
                                                    "http://127.0.0.1:3900/api/fichaTecnicaAprobacion/agregar",
                                                    {
                                                      method: "POST",
                                                      headers: {
                                                        "Content-Type":
                                                          "application/x-www-form-urlencoded",
                                                      },
                                                      body: `fecha=${fechaFormateada}&funcionario=${
                                                        funcionario.value
                                                      }&usuario=${"TODO::"}&estado=${
                                                        estado.value
                                                      }&observaciones=${
                                                        Observaciones.value
                                                      }&idIndicador=${localStorage.getItem(
                                                        "idIndicador"
                                                      )}&justificacion=${localStorage.getItem(
                                                        "justificacion"
                                                      )}`,
                                                    }
                                                  )
                                                    .then((response) => {
                                                      return response.json();
                                                    })
                                                    .then((res) => {
                                                      let tableBody =
                                                        document.querySelector(
                                                          "#tablaFin"
                                                        );
                                                      tableBody.innerHTML = "";
                                                      let row =
                                                        tableBody.insertRow(-1);
                                                      let cellFecha =
                                                        row.insertCell(0);
                                                      let cellUsuario =
                                                        row.insertCell(1);
                                                      let cellEstado =
                                                        row.insertCell(2);
                                                      let cellObservaciones =
                                                        row.insertCell(3);
                                                      cellFecha.innerHTML =
                                                        fechaFormateada; // Reemplaza item.fecha con la propiedad correcta de tu objeto que contiene la fecha
                                                      cellUsuario.innerHTML =
                                                        "TODO::"; // Reemplaza item.usuario con la propiedad correcta de tu objeto que contiene el usuario
                                                      cellEstado.innerHTML =
                                                        estado.value; // Reemplaza item.estadoValidacion con la propiedad correcta de tu objeto que contiene el estado de validación
                                                      cellObservaciones.innerHTML =
                                                        Observaciones.value;
                                                      if (
                                                        localStorage.getItem(
                                                          "tipo"
                                                        ) == "Producto"
                                                      ) {
                                                        fetch(
                                                          `http://127.0.0.1:3900/api/productoIndicador/editar/${localStorage.getItem(
                                                            "idIndicador"
                                                          )}`,
                                                          {
                                                            method: "PUT",
                                                            headers: {
                                                              "Content-Type":
                                                                "application/x-www-form-urlencoded",
                                                            },
                                                            body: `estado=${estado.value}`,
                                                          }
                                                        )
                                                          .then((response) => {
                                                            return response.json();
                                                          })
                                                          .then((res) => {});
                                                      }
                                                    });
                                                } else {
                                                  alert("Datos Incompletos");
                                                }
                                                setPublicar(1);
                                              }}
                                            >
                                              Guardar
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Cancelar
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            }
                          }
                        })()}
                      </div>
                    </div>
                    <div className="card shadow m-3">
                      <div className="card-header py-3 d-flex">
                        <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                          Aprobación del indicador
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellspacing="0"
                          >
                            <thead>
                              <tr>
                                <th>Fecha</th>
                                <th>Usuario</th>
                                <th>Estado Validacion</th>
                                <th>Observaciones</th>
                              </tr>
                            </thead>

                            <tbody id="tablaFin"></tbody>
                          </table>
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

export default CrearFichaTecnica;
