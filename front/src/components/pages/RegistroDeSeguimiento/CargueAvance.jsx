import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CargueAvance = () => {
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
                  (Nombre de politica publica)
                </div>
              </div>
            </div>
            <div className="col-8">
              {/* {(() => {
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
                })()} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CargueAvance;
