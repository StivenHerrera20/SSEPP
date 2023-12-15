import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const AvanceCualitativo = () => {
  const [enfoques, setEnfoques] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(5);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [avances, setAvances] = useState([]);
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
    const filtro = localStorage.getItem("idIndicadorSeg");
    fetch(
      `http://127.0.0.1:3900/api/avanceCualitativo/listarTabla?page=${pagina}&size=${fila}&filtro=${filtro}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setAvances(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
  }, [pagina, fila]);
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
  const selectPagina = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistros;
    let nRegistrosPP = selectedValue;
    setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/avanceCualitativo/listarTabla?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setAvances(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
  };
  const handleSiguiente = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const handleAnterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
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
            data-bs-target="#agregarAvanceCualitativo"
          ></button>
        </div>
        <div className="col d-flex justify-content-end">
          <select
            name=""
            id="numeroFilas"
            className="form-select ms-3 w-25"
            onChange={selectPagina}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option selected value="5">
              5
            </option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th className="align-middle text-center">Fecha</th>
                  <th className="align-middle text-center">Mes</th>
                  <th className="align-middle text-center">Año</th>
                  <th className="align-middle text-center">
                    Análisis Cualitativo General
                  </th>
                  <th className="align-middle text-center">
                    Análisis Cualitativo Enfoques
                  </th>
                  <th className="align-middle text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>
                  <td>27/05/2020</td>
                  <td>ENERO</td>
                  <td>2020</td>
                  <td>...</td>
                  <td>...</td>
                  <td className="text-center">
                    <button className="btn btn-success fa fa-pencil"></button>
                  </td>
                </tr> */}
                {avances.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.fecha}</td>
                      <td>{res.mes}</td>
                      <td>{res.year}</td>
                      <td>{res.analisis_general}</td>
                      <td>{res.analisis_enfoques}</td>
                      <td className="text-center">
                        <button className="btn btn-success fa fa-pencil"></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            className="btn btn-secondary m-2"
            variant="primary"
            onClick={handleAnterior}
          >
            Anterior
          </Button>
          <Button
            className="btn btn-secondary m-2"
            variant="primary"
            onClick={handleSiguiente}
          >
            Siguiente
          </Button>
        </div>
      </div>
      <div
        className="modal fade"
        id="agregarAvanceCualitativo"
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
                Agregar Avance Cualitativo
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
                <div className="col-5">
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
                <div className="col-5">
                  <label for="exampleInputPassword1" className="form-label">
                    Año del Periodo
                  </label>
                  <select name="" id="year" className="form-select">
                    {opciones}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Análisis Cualitativo General
                  </label>
                  <textarea
                    name=""
                    id="analisisCualitativoGeneral"
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputPassword1" className="form-label">
                    Enfoques
                  </label>
                  {console.log(enfoques)}
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
                    Análisis Cualitativo de Enfoques
                  </label>
                  <textarea
                    name=""
                    id="analisisCualitativoEnfoques"
                    rows="3"
                    style={{ resize: "none" }}
                    className="form-control"
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
                  let fechaFormateada = fechaActual.toISOString().split("T")[0];
                  let mes = document.querySelector("#mes");
                  let year = document.querySelector("#year");
                  let analisisCualitativoGeneral = document.querySelector(
                    "#analisisCualitativoGeneral"
                  );
                  let analisisCualitativoEnfoques = document.querySelector(
                    "#analisisCualitativoEnfoques"
                  );
                  if (
                    analisisCualitativoGeneral.value.length > 0 &&
                    analisisCualitativoEnfoques.value.length > 0
                  ) {
                    fetch(
                      "http://127.0.0.1:3900/api/avanceCualitativo/agregar",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `fecha=${fechaFormateada}&mes=${mes.value}&year=${
                          year.value
                        }&analisis_general=${
                          analisisCualitativoGeneral.value
                        }&analisis_enfoques=${
                          analisisCualitativoEnfoques.value
                        }&idIndicador=${localStorage.getItem(
                          "idIndicadorSeg"
                        )}&idObjetivo=${localStorage.getItem("idObjSeg")}`,
                      }
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((doc) => {
                        fetch(
                          `http://127.0.0.1:3900/api/avanceCualitativo/listarTabla?page=${pagina}&size=${fila}&filtro=${localStorage.getItem(
                            "idIndicadorSeg"
                          )}`
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((doc) => {
                            setAvances(doc.desarrollo);
                            setTotalRegistros(doc.total);
                            setTotalPaginas(Math.ceil(doc.total / fila));
                          });
                      });
                  } else {
                    alert("Datos Incompletos");
                  }
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

export default AvanceCualitativo;
