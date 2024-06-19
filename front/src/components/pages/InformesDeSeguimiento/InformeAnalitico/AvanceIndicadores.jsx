import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Registra los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const AvanceIndicadores = ({
  controlDetalle,
  setControlDetalle,
  objetivo,
  resultado,
}) => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (objetivo && objetivo.id) {
      fetch(`http://127.0.0.1:3900/api/productoIndicador/listarTodos`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Datos recibidos:", data);
          const encontrados = data.filter(
            (item) => item.id_objetivo === objetivo.id
          );
          console.log("Resultados filtrados:", encontrados);
          setResultados(encontrados);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setResultados([]);
        });
    }
  }, [objetivo]);

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
    <div className="card shadow mb-2">
      <div className="card-body">
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
          <div className="col-4">
            {/* Card izquierda */}
            <div className="card shadow mb-2">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Objetivo
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card shadow mb-2">
                      <div className="card-body">
                        <div className="row">
                          <p>{localStorage.getItem("nomObj")}</p>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-8">
                            <p className="d-flex align-items-center">
                              Importancia relativa
                            </p>
                          </div>
                          <div className="col-4">
                            <h2>{localStorage.getItem("impObj")}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            {/* Card Medio */}
            <div className="card shadow mb-2">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Resultado
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card shadow mb-2">
                      <div className="card-body">
                        <div className="row">
                          <p>{localStorage.getItem("res")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            {/* Card derecha */}
            <div className="card shadow mb-2 h-100">
              <div className="card-header py-3 d-flex">
                <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                  Avance de indicadores de producto
                </h4>
              </div>
              <div className="card-body">
                <div className="row h-75 my-0 py-0">
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
                        <th>Avance</th>
                        <th className="text-center">Detalle Costos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultados.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.nombre}</td>
                          <td>???</td>
                          <td className="text-center">
                            <button
                              className="btn btn-primary bi bi-search"
                              onClick={() => {
                                localStorage.setItem("nombImb", item.nombre);
                                localStorage.setItem("idImb", item.id);
                                setControlDetalle(4);
                              }}
                            ></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvanceIndicadores;
