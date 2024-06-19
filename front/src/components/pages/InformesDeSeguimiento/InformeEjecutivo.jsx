import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/FooterUno.png";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

const InformeEjecutivo = () => {
  const navigate = useNavigate();
  const [politicas, setPoliticas] = useState([]);
  const [politicaSeleccionada, setPoliticaSeleccionada] = useState(null);
  const [objetivos, setObjetivos] = useState([]);
  const [sector, setSector] = useState("");
  const [entidad, setEntidad] = useState("");
  const [importanciaRelativa, setImportanciaRelativa] = useState("");
  const [idObjEsp, setIdObjEsp] = useState(0);
  const [rangoImportancia, setRangoImportancia] = useState(100);
  const [anualizacion, setAnualizacion] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [enfoques, setEnfoques] = useState("");
  const [periodicidad, setPeriodicidad] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [metaTotal, setMetaTotal] = useState(0);
  const [metaActuak, setMetaActual] = useState(0);
  const [avance, setAvance] = useState(0);
  const [avanceActual, setAvanceActual] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/politicasPublicas/listarTodos")
      .then((response) => response.json())
      .then((data) => {
        setPoliticas(data);
      });
  }, []);

  useEffect(() => {
    if (politicaSeleccionada) {
      fetch(
        `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/traerObjetivos?id=${politicaSeleccionada.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setObjetivos(data.resultado);
        });

      fetch(
        `http://127.0.0.1:3900/api/politicasPublicas/traerSector?id=${politicaSeleccionada.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          const sectorEntidad = data.resultado[0];
          setSector(sectorEntidad.sector_lider);
          setEntidad(sectorEntidad.entidad_lider);
        });
    }
  }, [politicaSeleccionada]);

  const cambiar = () => {
    const rangoI = document.getElementById("rango");
    setRangoImportancia(rangoI.value);
  };

  const traerData = () => {
    fetch(`http://127.0.0.1:3900/api/productoIndicador/listarTodos`)
      .then((response) => response.json())
      .then((data) => {
        const encontrado = data.find((item) => item.id_objetivo === idObjEsp);
        if (encontrado) {
          console.log("Tipo de anulacion:", encontrado.tipo_anulacion);
          setAnualizacion(encontrado.tipo_anulacion);
        }
      });
    fetch(`http://127.0.0.1:3900/api/resultadoDatosGenerales/listarTodos`)
      .then((response) => response.json())
      .then((data) => {
        const encontrado = data.find((item) => item.id_objetivo === idObjEsp);
        if (encontrado) {
          setResultado(encontrado.nombre_resultado);
        }
      });
    fetch(`http://127.0.0.1:3900/api/fichaTecnicaMedicion/listar/${idObjEsp}`)
      .then((response) => response.json())
      .then((data) => {
        setPeriodicidad(data.resultado.rows[0].periodicidad);
        setUnidadMedida(data.resultado.rows[0].unidad);
      });
    fetch(`http://127.0.0.1:3900/api/resultadoHasMeta/listarMeta/${idObjEsp}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("ffff", data.resultado);
        setMetaTotal(data.resultado[0].meta_total);
        console.log("metatotal", metaTotal);
        let avanceAcumulado = 0;
        for (let i = 0; i < data.resultado.length; i++) {
          avanceAcumulado =
            parseInt(avanceAcumulado) + parseInt(data.resultado[i].ejecutado);
        }
        setAvance(avanceAcumulado);
        const fechaHoy = new Date();
        const año = fechaHoy.getFullYear();
        const encontrado = data.resultado.find((item) => item.year == año);
        if (encontrado) {
          console.log(encontrado, "aaaaaaa");
          setMetaActual(encontrado.meta);
          setAvanceActual(encontrado.ejecutado);
        }
      });
    fetch(
      `http://127.0.0.1:3900/api/productoDatosGenerales/listarTodos/${idObjEsp}`
    )
      .then((response) => response.json())
      .then((data) => {
        let idDatosGenerales = data.resultado.rows[0].id;
        fetch(
          `http://127.0.0.1:3900/api/productoDatosGeneralesHasEnfoques/listar/${idDatosGenerales}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.resultado.rows);
            let arr = [];
            for (let i = 0; i < data.resultado.rows.length; i++) {
              arr.push(data.resultado.rows[i].enfoque);
            }
            let str = arr.join(",");
            setEnfoques(str);
          });
      });
    generarPDF();
  };

  const generarPDF = () => {
    console.log("aa", avance);
    console.log("bb", metaActuak);
    console.log("cc", avanceActual);
    if (
      anualizacion &&
      resultado &&
      enfoques &&
      periodicidad &&
      unidadMedida &&
      metaTotal &&
      avance &&
      metaActuak &&
      avanceActual
    ) {
      const doc = new jsPDF();

      // Logo
      doc.addImage(logo, "PNG", 10, 10, 40, 40);

      // Titulo
      doc.setFontSize(25);
      doc.text("Informe Ejecutivo De La Política", 60, 30);

      // Tamaño de la letra
      doc.setFontSize(12);

      doc.setFont(undefined, "bold").text(`Política Pública :`, 15, 60);
      doc
        .setFont("helvetica", "normal")
        .text(`${politicaSeleccionada?.nombre}`, 50, 60);

      doc.setFont(undefined, "bold").text(`Sector Responsable :`, 15, 70);
      doc.setFont("helvetica", "normal").text(`${sector}`, 60, 70);

      doc.setFont(undefined, "bold").text(`Entidad Responsable :`, 108, 70);
      doc.setFont("helvetica", "normal").text(`${entidad}`, 155, 70);

      doc.setFont(undefined, "bold").text(`Periodo de Corte :`, 15, 80);
      doc.setFont("helvetica", "normal").text(`Ene. 2024`, 54, 80);

      doc.setFont(undefined, "bold").text(`Fecha de Impresión :`, 108, 80);
      const fechaHoy = new Date();
      const dia = fechaHoy.getDate();
      const mes = fechaHoy.getMonth() + 1;
      const año = fechaHoy.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${año}`;
      doc.setFont("helvetica", "normal").text(`${fechaFormateada}`, 152, 80);
      let obj = document.querySelector("#objetivoEspecificoInfoEjecutivo");
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
          ["Objetivo Especifico:", `${obj.value}`],
          ["Importancia Relativa:", `${importanciaRelativa}`],
          ["Tipo Anualización:", `${anualizacion}`],
          ["Periodicidad:", `${periodicidad}`],
          ["Resultado:", `${resultado}`],
          ["Enfoques Asociables:", `${enfoques}`],
          ["Unidad de Medida:", `${unidadMedida}`],
          ["Meta Total:", `${metaTotal}`],
          ["Avance Acumulado:", `${avance}`],
          ["% Acumulado:", `${parseFloat((avance / metaTotal) * 100)}%`],
          ["Meta Año Actual:", `${metaActuak}`],
          [
            "Avance Año Actual:",
            `${parseFloat((avanceActual / metaActuak) * 100)}%`,
          ],
        ],
        startY: 90,
      });

      doc.save(`reporteEjecutivo${Date.now()}.pdf`);
    }
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
                  Política Pública
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="politicaPublicaInfoEjecutivo"
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    const selectedPolitica = politicas.find(
                      (p) => p.id === parseInt(selectedId)
                    );
                    setPoliticaSeleccionada(selectedPolitica);
                  }}
                >
                  {politicas.map((element) => (
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
                  Objetivo Específico
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="objetivoEspecificoInfoEjecutivo"
                  onChange={(e) => {
                    console.log(objetivos);
                    const objetivoBuscado = e.target.value;
                    const objetivoEncontrado = objetivos.find(
                      (obj) => obj.objetivo === objetivoBuscado
                    );
                    if (objetivoEncontrado) {
                      setImportanciaRelativa(
                        objetivoEncontrado.importancia_relativa
                      );
                      setIdObjEsp(objetivoEncontrado.id);
                    }
                  }}
                >
                  <option value="" disabled selected>
                    Seleccione Uno
                  </option>
                  {objetivos.map((element) => (
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
                  <option value={sector}>{sector}</option>
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
                  <option value={entidad}>{entidad}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="btn btn-primary" onClick={traerData}>
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
