import React, { useState, useEffect } from "react";

const PorcentajeAvancePolitica = ({ controlDetalle, setControlDetalle }) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              {/* Avance de la politica (Porcentaje) */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Avance de la politica
                  </h4>
                </div>
                <div className="card-body ">
                  <h1 className="text-center">0,0%</h1>
                </div>
              </div>
            </div>

            <div className="col-9">
              {/* Porcentaje de avance de los objetivos especificos (card de la derecha) */}
              <div className="card shadow mb-2">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Porcentaje de avance de los objetivos especificos
                  </h4>
                </div>
                <div className="card-body ">
                  <div className="row">
                    <div className="col-6">
                      <div
                        className="card shadow mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setControlDetalle(2);
                        }}
                      >
                        <div className="card-body ">
                          <div className="row">
                            {/* texto del objetivo especifico */}
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Numquam nemo consequuntur sequi
                              ipsa perspiciatis id, officia dignissimos, ad sint
                              eum sapiente facere eligendi quo, quibusdam
                              excepturi dolores animi voluptatibus? Quam.
                            </p>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-9">
                              <p className="d-flex align-items-center">
                                Lorem, ipsum dolor.
                              </p>
                            </div>
                            <div className="col-3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PorcentajeAvancePolitica;
