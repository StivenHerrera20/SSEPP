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

const RegistroRecursosEjecutados = ({
  controlDetalle,
  setControlDetalle,
  objetivo,
}) => {
  const [resultados, setResultados] = useState([]);
  const [resultados2, setResultados2] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("idImb"));
    if (objetivo && objetivo.id) {
      fetch(`http://127.0.0.1:3900/api/productoIndicador/listarTodos`)
        .then((response) => response.json())
        .then((data) => {
          const encontrados = data.filter(
            (item) => item.id == localStorage.getItem("idImb")
          );
          console.log("Resultados filtrados:", encontrados);
          setResultados2(encontrados);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setResultados([]);
        });
    }
  }, [objetivo]);

  useEffect(() => {
    if (objetivo && objetivo.id) {
      fetch(
        `http://127.0.0.1:3900/api/productoHasCosto//listarCosto/${objetivo.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setResultados(data.resultado); // Guardamos solo el array resultado en setResultados
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setResultados([]);
        });
    }
  }, [objetivo]);

  // Preparar datos para la gráfica de barras
  const prepareChartData = () => {
    const labels = resultados.map((item) => item.year); // Array de años
    const dataEstimado = resultados.map((item) => item.estimado); // Array de costos estimados
    const dataEjecutado = resultados.map((item) => item.ejecutado); // Array de recursos ejecutados

    return {
      labels: labels,
      datasets: [
        {
          label: "Costo Estimado",
          data: dataEstimado,
          backgroundColor: "aqua",
          borderColor: "black",
          borderWidth: 1,
        },
        {
          label: "Recursos Ejecutados",
          data: dataEjecutado,
          backgroundColor: "green",
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
  };

  const [data, setData] = useState(prepareChartData());

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
        display: true,
        position: "top",
      },
    },
  });

  // Calcular recursos ejecutados acumulados
  const calculateRecursosAcumulados = () => {
    let acumulado = 0;
    return resultados.map((item) => {
      acumulado += item.ejecutado;
      return acumulado;
    });
  };

  // Actualizar el gráfico cuando cambian los datos
  useEffect(() => {
    setData(prepareChartData());
  }, [resultados]);

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
              <div className="col-12 d-flex">
                <p className="me-2">Nombre del Indicador:</p>
                <p>{localStorage.getItem("nombImb")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex">
                <p className="me-2">Tipo de Anualización:</p>
                {resultados2.length > 0 && (
                  <p>{resultados2[0].tipo_anulacion}</p>
                )}
              </div>
            </div>
            <div className="row mt-2 mb-1">
              <h5>
                <b>Tiempo de Ejecución</b>
              </h5>
            </div>
            <div className="row">
              <div className="col-5 d-flex">
                <p>Inicio: </p>
                {resultados2.length > 0 && (
                  <p className="ms-2">{resultados2[0].inicio}</p>
                )}
              </div>
              <div className="col-5 d-flex">
                <p>Fin: </p>
                {resultados2.length > 0 && (
                  <p className="ms-2">{resultados2[0].fin}</p>
                )}
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
                          <th>Costo Estimado</th>
                          <th>Recursos Ejecutados</th>
                          <th>Recursos Ejecutados Acumulados</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultados.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.year}</td>
                            <td>{item.estimado}</td>
                            <td>{item.ejecutado}</td>
                            <td>{calculateRecursosAcumulados()[index]}</td>
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
    </>
  );
};

export default RegistroRecursosEjecutados;
