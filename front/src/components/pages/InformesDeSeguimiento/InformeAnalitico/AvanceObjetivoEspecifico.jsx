import React, { useState, useEffect } from "react";

const AvanceObjetivoEspecifico = ({ controlDetalle, setControlDetalle }) => {
  return (
    <>
      <div className="card shadow mb-2">
        <div className="card-body ">
          <div className="row d-flex justify-content-end mb-3">
            <div className="col-2">
              <button
                className="btn btn-secondary w-100"
                onClick={() => {
                  setControlDetalle(1);
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
                            <div className="col-8">
                              <p className="d-flex align-items-center ">
                                Lorem, ipsum dolor.
                              </p>
                            </div>
                            <div className="col-4">
                              <h2>0%</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              {/* Card derecha */}
              <div className="card shadow mb-2 h-100">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Avance de indicadores de resultado
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row h-75 my-0 py-0 ">
                    <h1 className="text-center align-self-center">0</h1>
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
                    Indicadores de Resultado
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
                          <th className="text-center">Producto</th>
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
                                setControlDetalle(3);
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

export default AvanceObjetivoEspecifico;
