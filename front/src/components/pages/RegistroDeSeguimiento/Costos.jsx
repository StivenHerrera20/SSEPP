import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
const Costos = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Estimado",
        data: [],
        responsive: true,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Disponible",
        data: [],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  const [config, setConfig] = useState({
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  const [enfoques, setEnfoques] = useState([]);
  const [estimado, setEstimado] = useState(0);
  const [acumulados, setAcumulados] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("tiposSeg") == "producto") {
      fetch(
        `http://127.0.0.1:3900/api/productoDatosGeneralesHasEnfoques/listar/${localStorage.getItem(
          "idEnfoquesSeg"
        )}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          let array = [];
          for (let i = 0; i < doc.resultado.rows.length; i++) {
            array.push(doc.resultado.rows[i].enfoque);
          }
          setEnfoques(array);
        });
    } else if (localStorage.getItem("tiposSeg") == "resultado") {
      fetch(
        `http://127.0.0.1:3900/api/resultadoDatosGeneralesHasEnfoques/listar/${localStorage.getItem(
          "idEnfoquesSeg"
        )}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          let array = [];
          for (let i = 0; i < doc.resultado.rows.length; i++) {
            array.push(doc.resultado.rows[i].enfoque);
          }
          setEnfoques(array);
        });
    }
    fetch(
      `http://127.0.0.1:3900/api/productoHasCosto/listarCosto/${localStorage.getItem(
        "idObjSeg"
      )}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        console.log(apiData);
        let years = [];
        let dataUno = [];
        let dataDos = [];
        for (let i = 0; i < apiData.resultado.length; i++) {
          years.push(apiData.resultado[i].year);
          dataUno.push(apiData.resultado[i].estimado);
          dataDos.push(apiData.resultado[i].ejecutado);
        }
        let datos = {
          labels: years,
          datasets: [
            {
              label: "Estimado",
              data: dataUno,
              responsive: true,
              backgroundColor: "aqua",
              borderColor: "black",
              borderWidth: 1,
            },
            {
              label: "Disponible",
              data: dataDos,
              backgroundColor: "green",
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        };
        setData(datos);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);
  let fin = localStorage.getItem("finSeg");
  let inicio = localStorage.getItem("inicioSeg");
  let yearFin = fin.split("-");
  let totalFin = yearFin[0];
  let yearInicio = inicio.split("-");
  let totalInicio = yearInicio[0];
  const opciones = [];
  for (let i = totalInicio; i <= totalFin; i++) {
    opciones.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const traerEstimado = async (year) => {
    try {
      let bb = 0;
      const response = await fetch(
        `http://127.0.0.1:3900/api/productoHasCosto/traerEstimado/${localStorage.getItem(
          "idObjSeg"
        )}/${year}`
      );
      const doc = await response.json();

      if (doc.resultado && doc.resultado.length > 0) {
        /* console.log(doc.resultado[0].estimado); */
        bb = doc.resultado[0].estimado;
      }

      return bb;
    } catch (error) {
      console.error("Hubo un error:", error);
      return 0; // O retorna un valor predeterminado en caso de error
    }
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary fa fa-plus"
            data-bs-toggle="modal"
            data-bs-target="#agregarCosto"
          ></button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/*Inicio grafica*/}
          <Bar data={data} options={config} />
          {/*Fin grafica*/}
        </div>
      </div>
      <div
        className="modal fade"
        id="agregarCosto"
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
                Agregar Avance
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
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Mes del Periodo
                  </label>
                  <select name="" id="mes" className="form-select">
                    <option value="Enero">ENERO</option>
                    <option value="Febrero">FEBRERO</option>
                    <option value="Marzo">MARZO</option>
                    <option value="Abril">ABRIL</option>
                    <option value="Mayo">MAYO</option>
                    <option value="Junio">JUNIO</option>
                    <option value="Julio">JULIO</option>
                    <option value="Agosto">AGOSTO</option>
                    <option value="Septiembre">SEPTIEMBRE</option>
                    <option value="Octubre">OCTUBRE</option>
                    <option value="Noviembre">NOVIEMBRE</option>
                    <option value="Diciembre">DICIEMBRE</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Año del Periodo
                  </label>
                  <select name="" id="year" className="form-select">
                    {opciones}
                  </select>
                </div>
                <div className="col-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Recurso Ejecutado
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      id="recurso"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>
                </div>
                <div className="col-3 d-flex align-items-end">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={(e) => {
                      e.preventDefault();
                      let recurso = document.querySelector("#recurso");
                      if (recurso.value.length > 0) {
                        let observacion =
                          document.querySelector("#observacion");
                        let mes = document.querySelector("#mes");
                        let year = document.querySelector("#year");
                        mes.setAttribute("disabled", true);
                        year.setAttribute("disabled", true);
                        recurso.setAttribute("disabled", true);
                        observacion.removeAttribute("disabled");
                        localStorage.setItem("recursoSeg", recurso.value);
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    Validar Avance
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Enfoques
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
                    disabled
                    defaultValue={enfoques}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Observación
                  </label>
                  <textarea
                    name=""
                    id="observacion"
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
                    disabled
                  ></textarea>
                </div>
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  let fechaActual = new Date();
                  // Formatear la fecha en el formato que necesitas (por ejemplo, YYYY-MM-DD)
                  let fechaFormateada = fechaActual.toISOString().split("T")[0];
                  let mes = document.querySelector("#mes");
                  let year = document.querySelector("#year");
                  let recurso = document.querySelector("#recurso");
                  let observacion = document.querySelector("#observacion");
                  async function obtenerEstimado() {
                    let yearValue = year.value;
                    let aa = await traerEstimado(yearValue);
                    return aa;
                  }
                  obtenerEstimado().then((est) => {
                    setEstimado(est);

                    fetch(
                      `http://127.0.0.1:3900/api/avanceCostos/traerEjecutado/${localStorage.getItem(
                        "idIndicadorSeg"
                      )}/${year.value}`
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((doc) => {
                        let suma = 0;
                        if (doc.resultado[0].total == null) {
                          suma = 0 + parseInt(recurso.value);
                        } else {
                          suma =
                            parseInt(doc.resultado[0].total) +
                            parseInt(recurso.value);
                        }
                        if (observacion.value.length > 0) {
                          fetch(
                            `http://127.0.0.1:3900/api/productoHasCosto/editarEjecutado/${localStorage.getItem(
                              "idObjSeg"
                            )}/${year.value}`,
                            {
                              method: "PUT",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                              body: `ejecutado=${suma}`,
                            }
                          )
                            .then((response) => {
                              return response.json();
                            })
                            .then((res) => {});
                          fetch(
                            "http://127.0.0.1:3900/api/avanceCostos/agregar",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                              body: `fecha=${fechaFormateada}&periodo=${
                                mes.value + " " + year.value
                              }&costo_estimado=${est}&recursos_ejecutados=${
                                recurso.value
                              }&recursos_ejecutados_acumulados=${suma}&observacion=${
                                observacion.value
                              }&idIndicador=${localStorage.getItem(
                                "idIndicadorSeg"
                              )}&idObjetivo=${localStorage.getItem(
                                "idObjSeg"
                              )}&year=${year.value}`,
                            }
                          )
                            .then((response) => {
                              return response.json();
                            })
                            .then((res) => {
                              Swal.fire({
                                title: "Buen trabajo!",
                                text: "Insertado correctamente!",
                                icon: "success",
                              });
                              fetch(
                                `http://127.0.0.1:3900/api/productoHasCosto/listarCosto/${localStorage.getItem(
                                  "idObjSeg"
                                )}`
                              )
                                .then((response) => response.json())
                                .then((apiData) => {
                                  console.log(apiData);
                                  let years = [];
                                  let dataUno = [];
                                  let dataDos = [];
                                  for (
                                    let i = 0;
                                    i < apiData.resultado.length;
                                    i++
                                  ) {
                                    years.push(apiData.resultado[i].year);
                                    dataUno.push(apiData.resultado[i].estimado);
                                    dataDos.push(
                                      apiData.resultado[i].ejecutado
                                    );
                                  }
                                  let datos = {
                                    labels: years,
                                    datasets: [
                                      {
                                        label: "Estimado",
                                        data: dataUno,
                                        responsive: true,
                                        backgroundColor: "aqua",
                                        borderColor: "black",
                                        borderWidth: 1,
                                      },
                                      {
                                        label: "Disponible",
                                        data: dataDos,
                                        backgroundColor: "green",
                                        borderColor: "black",
                                        borderWidth: 1,
                                      },
                                    ],
                                  };
                                  setData(datos);
                                  console.log(data);
                                })
                                .catch((error) => {
                                  console.error(
                                    "Error al obtener datos de la API:",
                                    error
                                  );
                                });
                              window.location.reload();
                            });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "Ingresa todos los datos",
                          });
                        }
                      });
                  });
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Costos;
