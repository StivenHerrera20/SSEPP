import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SeguimientoTecnico from "./SeguimientoTecnico";
import TablaSeguimientoTecnico from "./TablaSeguimientoTecnico";
import TablaCostos from "./TablaCostos";
import Costos from "./Costos";
import AvanceCualitativo from "./AvanceCualitativo";

const CargueAvance = () => {
  const [controladorTabla, setControladorTabla] = useState(1);
  useEffect(() => {}, []);
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
                    <label htmlFor="" className="form-label">
                      Politica Pública
                    </label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows="2"
                      style={{ resize: "none" }}
                      disabled
                      defaultValue={localStorage.getItem("politicaSeg")}
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
                      defaultValue={localStorage.getItem("objetivoSeg")}
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
                      defaultValue={""}
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
                      defaultValue={""}
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
                      defaultValue={localStorage.getItem("nombreIndSeg")}
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
                      defaultValue={""}
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
                      value={localStorage.getItem("anualizacionSef")}
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
                      value={""}
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
                      value={""}
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
                      value={""}
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
                      value={""}
                    />
                  </div>
                  <div className="row mb-3">
                    <h6>Tiempo de Ejecución</h6>
                    <div className="col-6 ps-0">
                      <label htmlFor="" className="form-label">
                        Inicio
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        disabled
                        value={localStorage.getItem("inicioSeg")}
                      />
                    </div>
                    <div className="col-6 pe-0 ">
                      <label htmlFor="" className="form-label">
                        Fin
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        disabled
                        value={localStorage.getItem("finSeg")}
                      />
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
                        value={localStorage.getItem("valorSeg")}
                      />
                    </div>
                    <div className="col-6 pe-0 ">
                      <label htmlFor="" className="form-label">
                        Fecha de la Línea Base
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        disabled
                        value={localStorage.getItem("fechaBaseSeg")}
                      />
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
                      value={localStorage.getItem("fuenteSeg")}
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
                        onClick={() => {
                          setControladorTabla(1);
                        }}
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
                        onClick={() => {
                          setControladorTabla(2);
                        }}
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
                        onClick={() => {
                          setControladorTabla(3);
                        }}
                      >
                        Avance Cualitativo
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
                      <SeguimientoTecnico></SeguimientoTecnico>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="costos"
                      role="tabpanel"
                      aria-labelledby="costos-tab"
                    >
                      <Costos></Costos>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="avanceCualitativo"
                      role="tabpanel"
                      aria-labelledby="avanceCualitativo-tab"
                    >
                      <AvanceCualitativo></AvanceCualitativo>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        {(() => {
          if (controladorTabla === 1) {
            return (
              <>
                <TablaSeguimientoTecnico></TablaSeguimientoTecnico>
              </>
            );
          } else if (controladorTabla === 2) {
            return (
              <>
                <TablaCostos></TablaCostos>
              </>
            );
          } else if (controladorTabla === 3) {
            return <></>;
          }
        })()}
      </div>
    </>
  );
};

export default CargueAvance;
