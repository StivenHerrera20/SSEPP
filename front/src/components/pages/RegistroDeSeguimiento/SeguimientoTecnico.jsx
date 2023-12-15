import React, { useState, useEffect } from "react";
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
const SeguimientoTecnico = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Meta",
        data: [],
        responsive: true,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Ejecutado",
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
  /* const data = {
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
  }; */
  useEffect(() => {
    if (localStorage.getItem("tiposSeg") == "producto") {
      fetch(
        `http://127.0.0.1:3900/api/prodcuctoHasMeta/listarMeta/${localStorage.getItem(
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
            dataUno.push(apiData.resultado[i].meta);
            dataDos.push(apiData.resultado[i].ejecutado);
          }
          let datos = {
            labels: years,
            datasets: [
              {
                label: "Meta",
                data: dataUno,
                responsive: true,
                backgroundColor: "aqua",
                borderColor: "black",
                borderWidth: 1,
              },
              {
                label: "Ejecutado",
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
    } else if (localStorage.getItem("tiposSeg") == "resultado") {
      fetch(
        `http://127.0.0.1:3900/api/resultadoHasMeta/listarMeta/${localStorage.getItem(
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
            dataUno.push(apiData.resultado[i].metas);
            dataDos.push(apiData.resultado[i].ejecutado);
          }
          let datos = {
            labels: years,
            datasets: [
              {
                label: "Meta",
                data: dataUno,
                responsive: true,
                backgroundColor: "aqua",
                borderColor: "black",
                borderWidth: 1,
              },
              {
                label: "Ejecutado",
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
    }
  }, []);
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary fa fa-plus"
            data-bs-toggle="modal"
            data-bs-target="#agregarAvance"
          ></button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h6>Avance Acumulado</h6>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "25%" }}>
              25%
            </div>
          </div>
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
        id="agregarAvance"
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
                  <select name="" id="" className="form-select">
                    <option value="enero">ENERO</option>
                    <option value="febrero">FEBRERO</option>
                    <option value="marzo">MARZO</option>
                    <option value="abril">ABRIL</option>
                    <option value="mayo">MAYO</option>
                    <option value="junio">JUNIO</option>
                    <option value="julio">JULIO</option>
                    <option value="agosto">AGOSTO</option>
                    <option value="septiembre">SEPTIEMBRE</option>
                    <option value="octubre">OCTUBRE</option>
                    <option value="noviembre">NOVIEMBRE</option>
                    <option value="diciembre">DICIEMBRE</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Año del Periodo
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="enero">...</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Avance del Periodo
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-3 d-flex align-items-end">
                  <button type="button" className="btn btn-primary w-100">
                    Validar Avance
                  </button>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  {" "}
                  <label for="exampleInputPassword1" className="form-label">
                    Porcentaje de Avance Año
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="col-6">
                  {" "}
                  <label for="exampleInputPassword1" className="form-label">
                    Porcentaje de Avance Acumulado
                  </label>
                  <input type="text" className="form-control" disabled />
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
                    rows="5"
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
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeguimientoTecnico;
