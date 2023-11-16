import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const CargueAvance = () => {
  const data = {
    labels: ["2020", "2021", "2022"],
    datasets: [
      {
        label: "Meta",
        data: [4, 3, 7],
        responsive: true,
        backgroundColor: "#4d72a6",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Ejecutado",
        data: [4, 3, 7],
        backgroundColor: "#74b458 ",
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
      <div className="card shadow mb-4">
        <div className="card-body d-flex">
          <NavLink
            to="/inicio/registrodeseguimiento"
            className="btn btn-primary"
            aria-current="page"
          >
            Indicadores
          </NavLink>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {" "}
            Cargue Información de Avance
          </h2>
        </div>
        <hr className="sidebar-divider my-0 " />
        <div className="card-body">
          <div className="card ">
            <div className="row ">
              <div className="col-5 ">
                <div
                  className="container-fluid "
                  style={{
                    scrollbarWidth: "none",
                    overflow: "auto",
                    overflowX: "hidden",
                    height: "30rem",
                  }}
                >
                  <div className="row mb-3 mt-2">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Politica Pública
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={
                        "Politica Pública de Cultura Ciudadana 2019-2038 "
                      }
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Objetivo Específico
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={"Acción colectiva ... "}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Nombre del Resultado
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={"..."}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Nombre del Producto
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={"..."}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Nombre del Indicador
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={"..."}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Nombre del Funcionario
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={"..."}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tipo de Anualización
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                      value={"DECRECIENTE"}
                    />
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Meta Total del Indicador
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                      value={"500"}
                    />
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Unidad de Medida del Indicador
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                      value={"estrategia"}
                    />
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Días de Rezago
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                      value={"0"}
                    />
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Periodicidad de Medición
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                      value={"ANUAL"}
                    />
                  </div>
                  <div className="row mb-3">
                    <h6>Tiempo de Ejecución</h6>
                    <div className="col-6 ps-0">
                      <label htmlFor="" className="form-label">
                        Inicio
                      </label>
                      <input type="date" className="form-control" disabled />
                    </div>
                    <div className="col-6 pe-0 ">
                      <label htmlFor="" className="form-label">
                        Fin
                      </label>
                      <input type="date" className="form-control" disabled />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <h6>Linea Base</h6>
                    <div className="col-6 ps-0">
                      {" "}
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Valor
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        disabled
                      />
                    </div>
                    <div className="col-6 pe-0 ">
                      <label htmlFor="" className="form-label">
                        Fecha de la Línea Base
                      </label>
                      <input type="date" className="form-control" disabled />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Fuente
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="col-7 pt-2 ">
                <div className="card card-header py-0 px-0  me-3">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="seguimientoTecnico-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#seguimientoTecnico"
                        type="button"
                        role="tab"
                        aria-controls="seguimientoTecnico"
                        aria-selected="true"
                      >
                        Seguimiento Técnico
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
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="avanceCualitativo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#avanceCualitativo"
                        type="button"
                        role="tab"
                        aria-controls="avanceCualitativo"
                        aria-selected="false"
                      >
                        Avanve Cualitativo
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card card-body px-0 py-0 me-3">
                  <div className="tab-content  p-2" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="seguimientoTecnico"
                      role="tabpanel"
                      aria-labelledby="seguimientoTecnico-tab"
                    >
                      <div className="row">
                        <div className="col">
                          <button className="btn btn-primary bi bi-plus"></button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          {/*Inicio grafica*/}
                          <Bar data={data} options={config} />
                          {/*Fin grafica*/}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="costos"
                      role="tabpanel"
                      aria-labelledby="costos-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="avanceCualitativo"
                      role="tabpanel"
                      aria-labelledby="avanceCualitativo-tab"
                    ></div>
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

export default CargueAvance;
