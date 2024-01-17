import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/FooterUno.png";

/* import PDF from "./PDF";
import pdfDown from "../../../assets/document/InformePoliticaPublica.pdf"; */
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

const InformeEjecutivo = () => {
  const navigate = useNavigate();

  const [rangoImportancia, setRangoImportancia] = useState(100);
  useEffect(() => {}, []);
  const cambiar = () => {
    let rangoI = document.getElementById("rango");
    setRangoImportancia(rangoI.value);
  };

  const generarPDF = () => {
    /* navigate("/pdf"); */

    const doc = new jsPDF();

    //Logo
    doc.addImage(logo, "PNG", 10, 10, 40, 40);

    //Titulo
    //Tamaño de la letra del titulo
    doc.setFontSize(25);
    doc.text("Informe Ejecutivo De La Política", 60, 30);

    //Tamaño de la letra
    doc.setFontSize(12);

    doc.setFont(undefined, "bold").text(`Política Pública :`, 15, 60);
    //Nombre politica publica
    doc.setFont("helvetica", "normal").text(`Lorem, ipsum dolor.`, 50, 60);

    doc.setFont(undefined, "bold").text(`Sector Responsable :`, 15, 70);
    //Nombre Sector Responsable
    doc.setFont("helvetica", "normal").text(`Lorem, ipsum dolor.`, 60, 70);

    doc.setFont(undefined, "bold").text(`Entidad Responsable :`, 108, 70);
    //Nombre Entidad Responsable
    doc.setFont("helvetica", "normal").text(`Lorem, ipsum dolor.`, 155, 70);

    doc.setFont(undefined, "bold").text(`Periodo de Corte :`, 15, 80);
    //Nombre Periodo de corte
    doc.setFont("helvetica", "normal").text(`Lorem, ipsum dolor.`, 54, 80);

    doc.setFont(undefined, "bold").text(`Fecha de Impresión :`, 108, 80);
    //Nombre Fecha de Impresión
    doc.setFont("helvetica", "normal").text(`Lorem, ipsum dolor.`, 152, 80);

    autoTable(doc, {
      theme: "grid",
      columnStyles: {
        0: {
          fillColor: [169, 169, 169],
          fontStyle: "bold",
          textColor: "black",
          cellWidth: 45,
          lineColor: [0, 0, 0],
          halign: "center",
        },
        1: {
          textColor: "black",
          lineColor: [0, 0, 0],
        },
      },
      body: [
        //Aca se cambia el contenido, todo se cambia en la segunda posición de los arrays
        ["Objetivo Especifico:", "Lorem, ipsum dolor."],
        ["Importancia Relativa:", "12%"],
        ["Tipo Indicador:", " Lorem, ipsum."],
        ["Tipo Anualización:", " Lorem, ipsum."],
        ["Periodicidad:", " Lorem, ipsum."],
        ["Resultado:", " Lorem, ipsum."],
        ["Indicador:", " Lorem, ipsum."],
        ["Enfoques Asociables:", " Lorem, ipsum."],
        ["ODS:", " Lorem, ipsum."],
        ["Unidad de Medida:", " Lorem, ipsum."],
        ["Importancia Relativa:", " Lorem, ipsum."],
        ["Meta Total:", " Lorem, ipsum."],
        ["Avance Acumulado:", " Lorem, ipsum."],
        ["% Acumulado:", " Lorem, ipsum."],
        ["Vigencia:", " Lorem, ipsum."],
        ["Meta Año Actual:", " Lorem, ipsum."],
        ["Avance Año Actual:", " Lorem, ipsum."],
        ["% Avance:", " Lorem, ipsum."],
      ],
      startY: 90,
    });

    //La tabla tiene 137 de alto (y) los espacios de separación son de 10
    //ejemplo inicio de la primer tabla esta en 90 el fin de esta es en 227
    //por lo tanto la segunda empieza en 237

    doc.save(`reporteEjecutivo${Date.now()}.pdf`);
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
                {/* <a href={pdfDown} download className="btn btn-primary">
                  Consultar
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformeEjecutivo;
