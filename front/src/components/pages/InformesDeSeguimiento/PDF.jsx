import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/FooterUno.png";
import "bootstrap";
import jsPDF from "jspdf";
const PDF = () => {
  () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("informe.pdf");
      },
    });
    console.log("dsads");
  };
  return (
    <>
      <div className="container-fluid text-black" id="content">
        <div className="row">
          <div className="col-1">
            <img src={logo} alt="" />
          </div>
          <div className="col-9 d-flex justify-content-center pt-5 ms-3">
            <h1 className="text-black">INFORME EJECUTIVO DE LA POLÍTICA</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex ">
            <b className="me-2">Política Pública:</b>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex ">
            <b className="me-2">Objetivos especificos:</b>
            <p>1</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex ">
            <b className="me-2">Sector Responsable:</b>
            <p>Lorem, ipsum.</p>
          </div>
          <div className="col-6 d-flex ">
            <b className="me-2">Entidad Responsable:</b>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex ">
            <b className="me-2">Periodo de Corte:</b>
            <p>2020</p>
          </div>
          <div className="col-6 d-flex ">
            <b className="me-2">Fecha de Impresión:</b>
            <p>Viernes 12 junio 2020</p>
          </div>
        </div>
        <div className="row mb-5">
          {/* El ciclo tiene que ir desde la fila 2 */}
          <div className="row my-0 py-0">
            {/* Fila 1 */}
            <div className="bg-secondary  border border-bottom-0">
              <div className="col-12 d-flex ">
                <b className="me-2">Objetivo Especifico:</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  similique?
                </p>
              </div>
              <div className="col-12 d-flex">
                <b className="me-2">Importancia Relativa:</b>
                <p>32%</p>
              </div>
            </div>
          </div>
          {/* Fila 2 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border py-3">
              Tipo Indicador
            </div>
            <div className="text-uppercase col-2 border-y py-3">Resultado</div>
            <div className="bg-secondary fw-bold col-2 border py-3">
              Tipo Anualización
            </div>
            <div className="text-uppercase col-2 border-y py-3">Lorem</div>
            <div className="bg-secondary fw-bold col-2 border py-3">
              Periodicidad
            </div>
            <div className="text-uppercase col-2 border-y border-end py-3">
              SEMESTRAL
            </div>
          </div>
          {/* Fila 3 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border-start py-3">
              Resultado
            </div>
            <div className=" col-10  border-end border-bottom py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, optio!
            </div>
          </div>
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border-start py-3">
              Indicador
            </div>
            <div className=" col-10  border-end border-bottom py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, optio!
            </div>
          </div>
          {/* Fila 4 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border-start py-3">
              Enfoques Asociables
            </div>
            <div className="text-uppercase col-10  border-end border-bottom py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, optio!
            </div>
          </div>
          {/* Fila 5 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border-start py-3">
              ODS
            </div>
            <div className=" col-10  border-end border-bottom py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, optio!
            </div>
          </div>
          {/* Fila 6 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2 border-start py-3">
              Unidad de medida
            </div>
            <div className=" col-10  border-end border-bottom py-3">
              Porcentaje
            </div>
          </div>
          {/* Fila 7 */}
          <div className="row my-0 py-0">
            <div className="bg-secondary fw-bold col-2  py-3 border-start">
              Importancia Relativa
            </div>
            <div className=" col-1  py-3 border-bottom border-end">32%</div>
            <div className="bg-secondary fw-bold col-2  py-3 border-bottom border-end">
              Meta Total
            </div>
            <div className=" col-1  py-3 border-bottom border-end">100</div>
            <div className="bg-secondary fw-bold col-2  py-3 border-bottom border-end">
              Avance Acumulado
            </div>
            <div className=" col-1   py-3 border-bottom border-end">0,00</div>
            <div className="bg-secondary fw-bold col-2  py-3 border-bottom border-end">
              % Acumulado
            </div>
            <div className=" col-1  border-end py-3 border-bottom">0,00</div>
          </div>
          {/* Fila 8 */}
          <div className="row my-0 py-0">
            <div className="col-2 border-end"></div>
            <div className=" col-2 bg-secondary fw-bold  py-3 border-bottom border-end">
              Vigencia
            </div>
            <div className=" col-2 bg-secondary fw-bold py-3 border-bottom border-end">
              Meta Año Actual
            </div>
            <div className=" col-2 bg-secondary fw-bold py-3 border-bottom border-end">
              Avance Año Actual
            </div>
            <div className="bg-secondary fw-bold col-2  py-3 border-bottom border-end">
              % Avance
            </div>
          </div>
          {/* Fila 9 */}
          <div className="row my-0 py-0">
            <div className="col-2 border-end"></div>
            <div className=" col-2   py-3 border-bottom border-end"></div>
            <div className=" col-2  py-3 border-bottom border-end"></div>
            <div className=" col-2  py-3 border-bottom border-end"></div>
            <div className=" col-2  py-3 border-bottom border-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDF;
