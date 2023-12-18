import React, { useEffect, useRef, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registra los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

const AvanceIndicadores = ({ controlDetalle, setControlDetalle }) => {
  const data = {
    labels: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: false,
        text: "8%",
        fontSize: 20,
      },
      legend: {
        display: false,
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="card shadow mb-2">
        <div className="card-body ">
          <div className="row d-flex justify-content-end mb-3">
            <div className="col-2">
              <button
                className="btn btn-secondary w-100"
                onClick={() => {
                  setControlDetalle(2);
                }}
              >
                Regresar
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              {/* Card izquierda */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Objetivo
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow mb-2">
                        <div className="card-body ">
                          <div className="row">
                            {/* texto del objetivo especifico */}
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Numquam nemo consequuntur
                            </p>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-7">
                              <p className="d-flex align-items-center ">
                                Lorem, ipsum dolor.
                              </p>
                            </div>
                            <div className="col-5   ">
                              <h4>0%</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              {/* Card Medio */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Resultado
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow mb-2">
                        <div className="card-body ">
                          <div className="row">
                            {/* texto del Resultado */}
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Numquam nemo consequuntur
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              {/* Card derecha */}
              <div className="card shadow mb-2 h-100">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Avance de indicadores de producto
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row h-75 my-0 py-0 ">
                    {/* Aca va la grafica */}
                    <div className="text-center align-self-center">
                      <Doughnut data={data} options={options} />
                    </div>
                  </div>
                  <div className="row mb-3 h-25">
                    <div className="alert-info text-center align-self-end p-3">
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow mb-2 h-100">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Indicadores de Producto
                  </h4>
                </div>
                <div className="card-body ">
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
                          <th>Descripción</th>
                          <th>Avance</th>
                          <th className="text-center">Detalle Avances</th>
                          <th className="text-center">Detalle Costos</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td></td>
                          <td>Lorem ipsum dolor sit amet.</td>
                          <td>0%</td>
                          <td className="text-center">
                            <button
                              className="btn btn-primary bi bi-search"
                              onClick={() => {
                                setControlDetalle(4);
                              }}
                            ></button>
                          </td>
                          <td className="text-center">
                            <button className="btn btn-primary bi bi-search"></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default AvanceIndicadores;
