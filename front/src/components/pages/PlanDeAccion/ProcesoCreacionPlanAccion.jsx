import React, { useState, useEffect } from "react";
import Resultado from "./Resultado";
import Producto from "./Producto";

const ProcesoCreacionPlanAccion = () => {
  const [controlObjetivo, setControlObjetivo] = useState(0);
  const [controlRP, setControlRP] = useState(0);
  const [idPolitica, setIdPolitica] = useState([]);
  const [objEsp, setObjEsp] = useState([]);
  const [idObjEsp, setIdObjEsp] = useState([]);
  useEffect(() => {
    let nombre = localStorage.getItem("nombre");
    fetch(
      `http://127.0.0.1:3900/api/politicasPublicas/traerId?nombre=${nombre}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setIdPolitica(doc.resultado[0].id);
      });
    localStorage.setItem("idObjetivo", idObjEsp);
  }, [idObjEsp]);
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body d-flex">
          <button
            className="btn btn-primary "
            onClick={(e) => {
              e.preventDefault();
              setControlPD(0);
            }}
          >
            Plan de Acción
          </button>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {" "}
            Proceso de Creación de Plan de Acción
          </h2>
        </div>
        <hr className="sidebar-divider my-0 " />
        <div className="card-body">
          <div className="row mt-2">
            <div className="col-4">
              <div
                className="card card-header d-flex py-0 px-0"
                style={{
                  height: "3rem",
                }}
              >
                <div
                  className="col py-0 px-0 h-100 d-flex text-center align-middle "
                  style={{
                    height: "3rem",
                  }}
                >
                  <p
                    className="w-50 h-100 px-0 py-0"
                    style={{
                      backgroundColor: "#212D78",
                    }}
                  >
                    <span
                      style={{
                        margin: "0",
                        position: "relative",
                        top: "25%",
                        color: "white",
                      }}
                    >
                      {" "}
                      Plan De Acción
                    </span>
                  </p>
                  <p
                    className="h-100"
                    style={{
                      width: "0",
                      borderLeft: "30px solid #212D78",
                      borderTop: "1.4rem solid transparent",
                      borderBottom: "1.4rem solid transparent",
                    }}
                  ></p>
                </div>
              </div>
              <div className="card card-body">
                <div className="card card-body py-2">Politica Pública</div>
                <div className="card card-header">
                  {localStorage.getItem("nombre")}
                </div>
              </div>
              <div className="card card-body">
                <button
                  className="btn btn-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={(e) => {
                    e.preventDefault();
                    fetch(
                      `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listarTodos/${idPolitica}`
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((doc) => {
                        setObjEsp(doc);
                      });
                  }}
                >
                  Objetivo Especifico #
                </button>
                <div className="collapse" id="collapseExample">
                  <div className="card card-header">
                    {objEsp.map((element) => (
                      <div
                        className="row justify-content-between"
                        key={element.id}
                      >
                        <div
                          className="col-2 h-100 text-center"
                          key={element.id}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id={`obj${element.id}`}
                            key={`${element.id}`}
                            onChange={(e) => {
                              e.preventDefault();
                              setControlObjetivo(1);
                              setIdObjEsp(element.id);
                              localStorage.setItem(
                                "objetivo",
                                element.objetivo
                              );
                              localStorage.setItem(
                                "importancia",
                                element.importancia_relativa
                              );
                            }}
                          />
                        </div>
                        <div className="col-7 border-left border-right h-100 ">
                          {" "}
                          <p className="font-monospace">
                            {element.objetivo}
                          </p>{" "}
                        </div>
                        <div className="col-3 h-100">
                          {" "}
                          <p className="text-secondary text-center">
                            {element.importancia_relativa}
                          </p>{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              {(() => {
                //Desicion para controlar el contenido del div de interacciones
                if (controlObjetivo == 1) {
                  return (
                    <>
                      {" "}
                      <div className="card card-header d-flex py-0 px-0">
                        <div className="row">
                          <div className="col">
                            <button
                              className="btn btn-primary bi bi-plus flex-fill me-2 m-1"
                              onClick={(e) => {
                                e.preventDefault();
                                setControlRP(1);
                              }}
                            >
                              Resultado
                            </button>
                            <button
                              className="btn btn-primary bi bi-plus flex-fill m-1"
                              onClick={(e) => {
                                e.preventDefault();
                                setControlRP(2);
                              }}
                            >
                              Producto
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="row">
                        <div className="col">
                          {(() => {
                            //Desicion para controlar el contenido del div de interacciones
                            if (controlRP == 1) {
                              return <Resultado></Resultado>;
                            } else if (controlRP == 2) {
                              return <Producto></Producto>;
                            }
                          })()}
                        </div>
                      </div>
                    </>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcesoCreacionPlanAccion;
