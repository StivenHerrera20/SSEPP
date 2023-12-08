import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
const Costo = ({ renderYearsCostos, handleGuardar, data, config }) => {
  return (
    <>
      <h1>0,00</h1>
      <h5>Costo Total Estimado del Producto, Valores en Millones de Pesos</h5>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary bi bi-pencil"
            data-bs-toggle="modal"
            data-bs-target="#costosProducto"
          ></button>
        </div>
        {
          <div className="row">
            <div className="col">
              {/*Inicio grafica*/}
              {alert(data)}
              <Bar data={data} options={config} />
              {/*Fin grafica*/}
            </div>
          </div>
        }
        {/* Inicio Modal de los costos */}
        <div
          className="modal fade"
          id="costosProducto"
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
                  Registrar Costos de Producto
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
                  <b>Valores en Millones de Pesos</b>
                </div>
                <hr className="bg-black mx-0 my-0" />
                {renderYearsCostos()}
                <hr className="bg-black mx-0 my-0" />
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
                  id="enviarDatos"
                  onClick={handleGuardar}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Modal de los costos */}
      </div>
    </>
  );
};

export default Costo;
