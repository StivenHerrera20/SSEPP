import React, { useState, useEffect } from "react";

const HojaDeVidaIndicador = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Hoja de Vida del Indicador
          </h2>
        </div>
        <div className="card-body">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Politica Pública
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="politicaPublicaHojaVidaIndicador"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Objetivo Especifico
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="objetivoEspecificoHojaVidaIndicador"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Tipo Indicador
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipoIndicadorHojaVidaIndicador"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Indicador
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="indicadorHojaVidaIndicador"
                ></select>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="btn btn-primary">Consultar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HojaDeVidaIndicador;
