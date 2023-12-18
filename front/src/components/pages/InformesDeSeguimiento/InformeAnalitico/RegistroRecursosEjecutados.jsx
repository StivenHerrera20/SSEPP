import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJS.register(LinearScale, CategoryScale, Tooltip, Legend, BarElement);

const RegistroRecursosEjecutados = ({ controlDetalle, setControlDetalle }) => {
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
  });

  return (
    <>
      <div className="card shadow mb-2">
        <div className="card-body ">
          <div className="row d-flex justify-content-end mb-3">
            <div className="col-2">
              <button
                className="btn btn-secondary w-100"
                onClick={() => {
                  setControlDetalle(3);
                }}
              >
                Regresar
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="row">
              {" "}
              <div className="col-12 d-flex">
                <p className="me-2">Nombre del Indicador:</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="row">
              {" "}
              <div className="col-12 d-flex ">
                <p className="me-2">Tipo de Anualización:</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="row mt-2 mb-1">
              <h5>
                <b>Tiempo de Ejecución</b>
              </h5>
            </div>
            <div className="row">
              {" "}
              <div className="col-5 d-flex">
                <p>Inicio: </p>
                <p className="ms-2">2019-12-01</p>
              </div>
              <div className="col-5 d-flex">
                <p>Fin: </p>
                <p className="ms-2">2030-12-01</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex">
                <b className="me-2">Linea Base:</b>
                <b>ND</b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow mb-2 h-100">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Registro de Recursos Ejecutados
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="my-2">
                    <Bar data={data} options={config} />
                  </div>

                  <div className="table-responsive mt-4">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fecha</th>
                          <th>Periodo Reportado</th>
                          <th>Costo Estimado</th>
                          <th>Recursos Ejecutados</th>
                          <th>Recursos Ejecutados Acumulados</th>
                          <th>Obsevación</th>
                        </tr>
                      </thead>

                      <tbody></tbody>
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

export default RegistroRecursosEjecutados;
