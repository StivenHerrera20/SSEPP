import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/FooterUno.png";

/* import PDF from "./PDF";
import pdfDown from "../../../assets/document/InformePoliticaPublica.pdf"; */
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

const InformeEjecutivo = () => {
  const navigate = useNavigate();
  const [politica, setPolitica] = useState([]);
  const [objetivo, setObjetivo] = useState([]);
  const [sector, setSector] = useState([]);
  const [entidad, setEntidad] = useState([]);

  const [rangoImportancia, setRangoImportancia] = useState(100);
  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/politicasPublicas/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPolitica(doc);
      });
    console.log("Sector actualizado:", sector);
    console.log("Entidad actualizada:", entidad);
  }, [sector, entidad]);
  const cambiar = () => {
    let rangoI = document.getElementById("rango");
    setRangoImportancia(rangoI.value);
  };
  const traerObjetivos = async (selectedId) => {
    try {
      const responseObjetivos = await fetch(
        `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/traerObjetivos?id=${selectedId}`
      );
      const objetivosData = await responseObjetivos.json();
      setObjetivo(objetivosData.resultado);

      const responseSectorEntidad = await fetch(
        `http://127.0.0.1:3900/api/politicasPublicas/traerSector?id=${selectedId}`
      );
      const sectorEntidadData = await responseSectorEntidad.json();
      setSector(sectorEntidadData.resultado[0].sector_lider);
      setEntidad(sectorEntidadData.resultado[0].entidad_lider);
      console.log(sector);
      console.log(entidad);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
    doc.setFont("helvetica", "normal").text(`Prueba`, 50, 60);

    doc.setFont(undefined, "bold").text(`Sector Responsable :`, 15, 70);
    //Nombre Sector Responsable
    doc.setFont("helvetica", "normal").text(`CONGRESO`, 60, 70);

    doc.setFont(undefined, "bold").text(`Entidad Responsable :`, 108, 70);
    //Nombre Entidad Responsable
    doc.setFont("helvetica", "normal").text(`Despacho del Alcalde`, 155, 70);

    doc.setFont(undefined, "bold").text(`Periodo de Corte :`, 15, 80);
    //Nombre Periodo de corte
    doc.setFont("helvetica", "normal").text(`Ene. 2024`, 54, 80);

    doc.setFont(undefined, "bold").text(`Fecha de Impresión :`, 108, 80);
    //Nombre Fecha de Impresión
    doc.setFont("helvetica", "normal").text(`30 Ene. 2024`, 152, 80);

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
        ["Objetivo Especifico:", "Prueba 1"],
        ["Importancia Relativa:", "45%"],
        /* ["Tipo Indicador:", " Lorem, ipsum."], */
        ["Tipo Anualización:", "Creciente"],
        ["Periodicidad:", "Mensual"],
        ["Resultado:", "pruebaImp"],
        /* ["Indicador:", " Lorem, ipsum."], */
        [
          "Enfoques Asociables:",
          "01. Enfoque de derechos humanos en políticas públicas,02. Enfoque de género en políticas públicas",
        ],
        /* ["ODS:", " Lorem, ipsum."], */
        ["Unidad de Medida:", " Acuerdos"],
        /* ["Importancia Relativa:", " Lorem, ipsum."], */
        ["Meta Total:", " 800"],
        ["Avance Acumulado:", " 9"],
        ["% Acumulado:", " 0%"],
        /* ["Vigencia:", " Lorem, ipsum."], */
        ["Meta Año Actual:", "400"],
        ["Avance Año Actual:", "0%"],
        /* ["% Avance:", " Lorem, ipsum."], */
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
                  onChange={(e) => traerObjetivos(e.target.value)}
                >
                  {politica.map((element) => (
                    <option
                      key={element.id}
                      value={element.id}
                      id="politicaPublica"
                    >
                      {element.nombre}
                    </option>
                  ))}
                </select>
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
                >
                  {objetivo.map((element) => (
                    <option
                      key={element.id}
                      value={element.objetivo}
                      id="politicaPublica"
                    >
                      {element.objetivo}
                    </option>
                  ))}
                </select>
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
                >
                  <option value={{ sector }}>{sector}</option>
                </select>
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
                >
                  <option value={{ entidad }}>{entidad}</option>
                </select>
              </div>
            </div>
            {/*<div className="row mb-3">
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
            </div>*/}
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
