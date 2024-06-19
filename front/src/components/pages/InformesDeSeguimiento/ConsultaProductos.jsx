import React, { useState, useEffect } from "react";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import logo from "../../../assets/images/FooterUno.png";

const ConsultaProductos = () => {
  const [politicas, setPoliticas] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [idPolitica, setIdPolitica] = useState(0);
  const [totalProductos, setTotalProductos] = useState([]);
  const [politicaSeleccionada, setPoliticaSeleccionada] = useState(null);
  const [sector, setSector] = useState("");
  const [entidad, setEntidad] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3900/api/politicasPublicas/listarTodos")
      .then((response) => response.json())
      .then((data) => {
        setPoliticas(data);
      })
      .catch((error) => {
        console.error("Error fetching politicas:", error);
      });
  }, []);

  useEffect(() => {
    if (politicaSeleccionada) {
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

  const traerData = () => {
    fetch(
      `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listarTodos/${idPolitica}`
    )
      .then((response) => response.json())
      .then((data) => {
        setObjetivos(data);

        // Crear un array de promesas para obtener el número de productos por cada objetivo
        const promises = data.map((objetivo) =>
          fetch(
            `http://127.0.0.1:3900/api/productoDatosGenerales/listarTodos/${objetivo.id}`
          )
            .then((response) => response.json())
            .then((data) => data.resultado.count)
        );

        // Esperar a que todas las promesas se resuelvan y luego actualizar el estado de totalProductos
        Promise.all(promises)
          .then((counts) => {
            setTotalProductos(counts);
            generarPDF();
          })
          .catch((error) => {
            console.error("Error fetching totalProductos:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching objetivos:", error);
      });
  };

  const generarPDF = () => {
    if (objetivos.length > 0 && totalProductos.length > 0) {
      const doc = new jsPDF();

      // Logo
      doc.addImage(logo, "PNG", 10, 10, 40, 40);

      // Título
      doc.setFontSize(15);
      doc.text("Informe De Productos Asociados A La Política", 60, 30);

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

      doc.setFont(undefined, "bold").text(`Fecha de Impresión :`, 15, 80);
      const fechaHoy = new Date();
      const dia = fechaHoy.getDate();
      const mes = fechaHoy.getMonth() + 1;
      const año = fechaHoy.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${año}`;
      doc.setFont("helvetica", "normal").text(`${fechaFormateada}`, 58, 80);

      // Crear la tabla utilizando jspdf-autotable
      autoTable(doc, {
        theme: "grid",
        margin: { top: 90 },
        columnStyles: {
          0: { cellWidth: 60 },
          1: { cellWidth: 40 },
          2: { cellWidth: 40 },
          3: { cellWidth: 40 },
        },
        head: [
          [
            "Objetivo Específico",
            "# Productos",
            "Avance Promedio (Actual)",
            "Avance Promedio",
          ],
        ],
        body: objetivos.map((objetivo, index) => [
          objetivo.objetivo,
          totalProductos[index], // Aquí se pueden agregar datos correspondientes a # Productos si es necesario
          "", // Aquí se pueden agregar datos correspondientes a Avance Promedio (Actual)
          "aaaa", // Aquí se pueden agregar datos correspondientes a Avance Promedio
        ]),
        startY: 95, // Ajusta esta posición vertical según sea necesario
      });

      // Guardar el PDF
      doc.save(`reporteEjecutivo${Date.now()}.pdf`);
    }
  };

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
                  id="politicaPublicaInfoEjecutivo"
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    setIdPolitica(parseInt(selectedId));
                    const selectedPolitica = politicas.find(
                      (p) => p.id === parseInt(selectedId)
                    );
                    setPoliticaSeleccionada(selectedPolitica);
                  }}
                >
                  <option value="0">Seleccione una política</option>
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

export default ConsultaProductos;
