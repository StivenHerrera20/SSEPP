import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/FooterUno.png";
import "bootstrap";
import jsPDF from "jspdf";
const PDF = () => {
  useEffect(() => {
    console.log("sdas");
    let doc = new jsPDF("p", "pt", "a2");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("informe.pdf");
      },
    });
  }, []);

  /* esta molestando la redireccion, cuando lo termine lo re dirije */
  /* setTimeout(() => {
    window.location = "/inicio/informesdeseguimiento";
  }, 5000); */
  return (
    <>
      <div className="col-12">
        <div className="col-12">
          <div className="container-fluid text-black" id="content">
            <div className="row">
              <div className="col-1">
                <img src={logo} alt="" width={100} />
              </div>
              <div className="col-10 d-flex justify-content-center pt-5 ms-3">
                <h3 className="mx-3">INFORME</h3>{" "}
                <h3 className="mx-3">EJECUTIVO</h3>{" "}
                <h3 className="ms-3 me-2">DE</h3> <h3 className="mx-2">LA</h3>{" "}
                <h3 className="ms-3">POLÍTICA</h3>
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
                <div className="bg-secondary  border-pdf border-head-pdf">
                  <div className="col-12 d-flex ">
                    <b className="me-2">Objetivo Especifico:</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic, similique?
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
                <div className="bg-secondary fw-bold col-2 border-pdf py-3">
                  Tipo Indicador
                </div>
                <div className="text-uppercase col-2 border-y-pdf py-3">
                  Resultado
                </div>
                <div className="bg-secondary fw-bold col-2 border-pdf py-3">
                  Tipo Anualización
                </div>
                <div className="text-uppercase col-2 border-y-pdf py-3">
                  Lorem
                </div>
                <div className="bg-secondary fw-bold col-2 border-pdf py-3">
                  Periodicidad
                </div>
                <div className="text-uppercase col-2 border-y-pdf border-end-pdf py-3">
                  SEMESTRAL
                </div>
              </div>
              {/* Fila 3 */}
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2 border-start-pdf py-3">
                  Resultado
                </div>
                <div className=" col-10  border-end-pdf border-bottom-pdf py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, optio!
                </div>
              </div>
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2 border-start-pdf py-3">
                  Indicador
                </div>
                <div className=" col-10  border-end-pdf border-bottom-pdf py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, optio!
                </div>
              </div>
              {/* Fila 4 */}
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2 border-start-pdf py-3">
                  Enfoques Asociables
                </div>
                <div className="text-uppercase col-10  border-end-pdf border-bottom-pdf py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, optio!
                </div>
              </div>
              {/* Fila 5 */}
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2 border-start-pdf py-3">
                  ODS
                </div>
                <div className=" col-10  border-end-pdf border-bottom-pdf py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, optio!
                </div>
              </div>
              {/* Fila 6 */}
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2 border-start-pdf py-3">
                  Unidad de medida
                </div>
                <div className=" col-10  border-end-pdf border-bottom-pdf py-3">
                  Porcentaje
                </div>
              </div>
              {/* Fila 7 */}
              <div className="row my-0 py-0">
                <div className="bg-secondary fw-bold col-2  py-3 border-start-pdf">
                  Importancia Relativa
                </div>
                <div className=" col-1  py-3 border-bottom-pdf border-end-pdf">
                  32%
                </div>
                <div className="bg-secondary fw-bold col-2  py-3 border-bottom-pdf border-end-pdf">
                  Meta Total
                </div>
                <div className=" col-1  py-3 border-bottom-pdf border-end-pdf">
                  100
                </div>
                <div className="bg-secondary fw-bold col-2  py-3 border-bottom-pdf border-end-pdf">
                  Avance Acumulado
                </div>
                <div className=" col-1   py-3 border-bottom-pdf border-end-pdf">
                  0,00
                </div>
                <div className="bg-secondary fw-bold col-2  py-3 border-bottom-pdf border-end-pdf">
                  % Acumulado
                </div>
                <div className=" col-1  border-end-pdf py-3 border-bottom-pdf">
                  0,00
                </div>
              </div>
              {/* Fila 8 */}
              <div className="row my-0 py-0">
                <div className="col-2 border-end-pdf"></div>
                <div className=" col-2 bg-secondary fw-bold  py-3 border-bottom-pdf border-end-pdf">
                  Vigencia
                </div>
                <div className=" col-2 bg-secondary fw-bold py-3 border-bottom-pdf border-end-pdf">
                  Meta Año Actual
                </div>
                <div className=" col-2 bg-secondary fw-bold py-3 border-bottom-pdf border-end-pdf">
                  Avance Año Actual
                </div>
                <div className="bg-secondary fw-bold col-2  py-3 border-bottom-pdf border-end-pdf">
                  % Avance
                </div>
              </div>
              {/* Fila 9 */}
              <div className="row my-0 py-0">
                <div className="col-2 border-end-pdf"></div>
                <div className=" col-2   py-3 border-bottom-pdf border-end-pdf"></div>
                <div className=" col-2  py-3 border-bottom-pdf border-end-pdf"></div>
                <div className=" col-2  py-3 border-bottom-pdf border-end-pdf"></div>
                <div className=" col-2  py-3 border-bottom-pdf border-end-pdf"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDF;
