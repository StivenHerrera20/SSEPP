import React, { useState, useEffect } from "react";

const ConsultaProductos = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta de Productos
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
                  id="politicaPublicaConsultaProductos"
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
                  id="objetivoEspecificoConsultaProductos"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Sector Lider
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="sectorLiderConsultaProductos"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Entidad Lider
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="entidadLiderConsultaProductos"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="" className="form-label">
                Periodo de corte
              </label>
              <div className="col d-flex">
                <select
                  className="form-select w-25 me-2"
                  aria-label="Default select example"
                  id="periodoCorteConsultaProductosMes"
                >
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
                <select
                  className="form-select w-25"
                  aria-label="Default select example"
                  id="periodoCorteConsultaProductosAño"
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

export default ConsultaProductos;
