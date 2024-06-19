import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/FooterUno.png";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";

const SeguimientoCualitativo = () => {
  const navigate = useNavigate();
  const [politicas, setPoliticas] = useState([]);
  const [politicaSeleccionada, setPoliticaSeleccionada] = useState(null);
  const [objetivos, setObjetivos] = useState([]);
  const [sector, setSector] = useState("");
  const [entidad, setEntidad] = useState("");
  const [importanciaRelativa, setImportanciaRelativa] = useState("");
  const [idObjEsp, setIdObjEsp] = useState(0);
  const [rangoImportancia, setRangoImportancia] = useState(100);
  const [anualizacion, setAnualizacion] = useState([]);
  const [resultado, setResultado] = useState([]);
  const [producto, setProducto] = useState([]);
  const [producto2, setProducto2] = useState([]);
  const [enfoques, setEnfoques] = useState("");
  const [analisisGen, setAnalisisGen] = useState("");
  const [analisisEnf, setAnalisisEnf] = useState("");
  const [analisisGen2, setAnalisisGen2] = useState("");
  const [analisisEnf2, setAnalisisEnf2] = useState("");
  const [metaTotal, setMetaTotal] = useState(0);
  const [metaActuak, setMetaActual] = useState(0);
  const [avance, setAvance] = useState(0);
  const [avanceActual, setAvanceActual] = useState(0);
  const [estimados, setEstimados] = useState(0);
  const [disponible, setDisponibles] = useState(0);
  const [prodInd, setProdInd] = useState([]);
  const [resInd, setResInd] = useState([]);

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
        const encontrado = data.filter((item) => item.id_objetivo === idObjEsp);
        console.log("encontrado", encontrado);
        setProdInd(encontrado);

        // Una vez que se obtienen los productos, obtener los análisis correspondientes
        let arrAnalisisGen = [];
        let arrAnalisisEnf = [];
        let fetchPromises = [];

        encontrado.forEach((producto) => {
          let fetchPromise = fetch(
            `http://127.0.0.1:3900/api/avanceCualitativo/listarTodos/${producto.id}`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("data", data);
              arrAnalisisGen.push(data.resultado.rows[0].analisis_general);
              arrAnalisisEnf.push(data.resultado.rows[0].analisis_enfoques);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });

          fetchPromises.push(fetchPromise);
        });

        // Esperar a que todas las promesas de fetch se resuelvan
        Promise.all(fetchPromises)
          .then(() => {
            // Una vez que se han completado todas las solicitudes, actualizar los estados
            setAnalisisGen(arrAnalisisGen);
            setAnalisisEnf(arrAnalisisEnf);
          })
          .catch((error) => {
            console.error("Error executing fetch promises:", error);
          });
      });

    fetch(
      `http://127.0.0.1:3900/api/productoDatosGenerales/listarTodos/${idObjEsp}`
    )
      .then((response) => response.json())
      .then((data) => {
        const encontrados = data.resultado.rows.map((item) => ({
          nombre_resultado: item.nombre_resultado,
          id_objetivo: item.id_objetivo,
        }));
        console.log("encontradis", encontrados);
        if (encontrados.length > 0) {
          const nombres = encontrados
            .map((item) => item.nombre_resultado)
            .join(", ");
          setProducto(nombres);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    generarPDF();
  };

  const generarPDF = () => {
    console.log("resInd", resInd);
    console.log("producto2", producto2);
    console.log("analisisGen2", analisisGen2);
    console.log("analisisEnf2", analisisEnf2);
    if (sector && entidad && prodInd.length > 0) {
      const doc = new jsPDF();

      // Logo
      doc.addImage(logo, "PNG", 10, 10, 40, 40);

      // Titulo
      doc.setFontSize(25);
      doc.text("Informe De Seguimiento Cualitativo De La Política", 60, 30);

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

      doc.setFont(undefined, "bold").text(`Fecha de Impresión :`, 40, 80);
      const fechaHoy = new Date();
      const dia = fechaHoy.getDate();
      const mes = fechaHoy.getMonth() + 1;
      const año = fechaHoy.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${año}`;
      doc.setFont("helvetica", "normal").text(`${fechaFormateada}`, 84, 80);

      // Obtener el valor seleccionado del objetivo específico
      const obj = document.querySelector(
        "#objetivoEspecificoInfoEjecutivo"
      ).value;

      // Iterar sobre los productos encontrados y crear un cuadro para cada uno
      prodInd.forEach((producto, index) => {
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
            ["Objetivo Especifico:", obj],
            ["Indicador:", producto.nombre],
            ["Tipo Indicador:", "Producto"],
            ["Analisis General:", analisisGen[index]], // Aquí obtienes el análisis general correspondiente al producto
            ["Analisis Enfoques:", analisisEnf[index]], // Aquí obtienes el análisis de enfoques correspondiente al producto
          ],
          startY: index === 0 ? 90 : doc.autoTable.previous.finalY + 10, // Controla la posición vertical del cuadro
        });
      });

      doc.save(`reporteEjecutivo${Date.now()}.pdf`);
    }
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta Seguimiento Cualitativo
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

export default SeguimientoCualitativo;

/* import React, { useState, useEffect } from "react";

const SeguimientoCualitativo = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Consulta Informe Seguimiento Cualitativo de la Política Pública
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
                  id="politicaPublicaSeguimientoCualitativo"
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
                  id="objetivoEspecificoSeguimientoCualitativo"
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
                  id="sectorResponsableSeguimientoCualitativo"
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
                  id="entidadResponsableSeguimientoCualitativo"
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
                  id="periodoCorteSeguimientoCualitativoMes"
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
                  id="periodoCorteSeguimientoCualitativoAño"
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

export default SeguimientoCualitativo;
 */
