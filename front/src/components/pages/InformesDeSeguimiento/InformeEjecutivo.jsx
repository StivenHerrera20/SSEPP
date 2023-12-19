import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PDF from "./PDF";
const InformeEjecutivo = () => {
  const navigate = useNavigate();

  const [rangoImportancia, setRangoImportancia] = useState(100);
  useEffect(() => {}, []);
  const cambiar = () => {
    let rangoI = document.getElementById("rango");
    setRangoImportancia(rangoI.value);
  };

  const generarPDF = () => {
    navigate("/pdf");
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta Informe Ejecutivo
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
                  id="politicaPublicaInfoEjecutivo"
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
                  id="objetivoEspecificoInfoEjecutivo"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Sector Responsable
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="sectorResponsableInfoEjecutivo"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Entidad Responsable
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="entidadResponsableInfoEjecutivo"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Rango de importancia relativa : 0% - {rangoImportancia}%
                </label>
                <input
                  type="range"
                  className="form-range"
                  min={1}
                  max={100}
                  onChange={cambiar}
                  defaultValue={100}
                  id="rango"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Metas ODS
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="metasODSInfoEjecutivo"
                ></select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Enfoques
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="enfoquesInfoEjecutivo"
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
                  id="periodoCorteInfoEjecutivoMes"
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
                  id="periodoCorteInfoEjecutivoAño"
                ></select>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="btn btn-primary" onClick={generarPDF}>
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformeEjecutivo;
