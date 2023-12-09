import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJS.register(LinearScale, CategoryScale, Tooltip, Legend, BarElement);
import { Bar } from "react-chartjs-2";

const Producto = () => {
  const [enable, setEnable] = useState("");
  const [sector, setSectores] = useState([]);
  const [enfoque, setEnfoque] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [entidad, setEntidades] = useState([]);
  const [objetivos, setObjetivos] = useState([]);
  const [enfoqueCheckedItems, setEnfoqueCheckedItems] = useState([]);
  const [objetivosCheckedItems, setObjetivosCheckedItems] = useState([]);
  const [Plan, setPlan] = useState([]);
  const [Indicador, setIndicador] = useState([]);
  const [fechaInicio, setFechaInicio] = useState(0);
  const [fechaFin, setFechaFin] = useState(0);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState([]);
  const [meta, setMeta] = useState([]);
  const [totalMeta, setTotalMeta] = useState("0.00");
  const [totalSuma, setTotalSuma] = useState(0);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Estimado",
        data: [],
        responsive: true,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Disponible",
        data: [],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  const [config, setConfig] = useState({
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/productoHasCosto/listarCosto/${localStorage.getItem(
        "idObjetivo"
      )}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        let years = [];
        let dataUno = [];
        let dataDos = [];
        for (let i = 0; i < apiData.resultado.length; i++) {
          years.push(apiData.resultado[i].year);
          dataUno.push(apiData.resultado[i].estimado);
          dataDos.push(apiData.resultado[i].disponible);
        }
        console.log(dataUno);
        let datos = {
          labels: years,
          datasets: [
            {
              label: "Estimado",
              data: dataUno,
              responsive: true,
              backgroundColor: "aqua",
              borderColor: "black",
              borderWidth: 1,
            },
            {
              label: "Disponible",
              data: dataDos,
              backgroundColor: "green",
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        };
        setData(datos);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
    // Este efecto se ejecuta solo una vez al montar el componente
    // Aquí puedes usar 'data' para lo que necesites, como mostrarlo en gráficos
    /*  console.log(data); */
    fetch("http://127.0.0.1:3900/api/planDeDesarrollo/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setIndicador(doc);
      });
    fetch(
      "http://127.0.0.1:3900/api/productoHasCosto/traerTotal/" +
        localStorage.getItem("idObjetivo")
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setTotalSuma(doc.resultado[0].total);
      });
    fetch("http://127.0.0.1:3900/api/plan/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPlan(doc);
      });
    fetch("http://127.0.0.1:3900/api/entidad/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
      });
    fetch(`http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEnfoque(doc);
      });
    fetch(`http://127.0.0.1:3900/api/desarrolloSostenible/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setObjetivos(doc);
      });
    fetch(
      `http://127.0.0.1:3900/api/politicasPublicas/traerFechas/?nombre=${localStorage.getItem(
        "nombre"
      )}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setFechaInicio(doc.resultado[0].fecha_inicio.slice(0, 4));
        setFechaFin(doc.resultado[0].fecha_fin.slice(0, 4));
      });
    fetch(
      `http://127.0.0.1:3900/api/prodcuctoHasMeta/listarMeta/` +
        localStorage.getItem("idObjetivo")
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setMeta(doc.resultado);
        if (doc.resultado.length > 0) {
          const generarItems = () => {
            if (fechaInicio && fechaFin) {
              let resta = fechaFin - fechaInicio;
              const generatedItems = [];
              for (let i = 0; i <= resta; i++) {
                const year = parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                generatedItems.push({
                  title: year.toString(), // Establece el año como título
                  cardDetailedText: doc.resultado[i].meta, // Establece el valor por defecto "000"
                });
              }
              return generatedItems;
            }
            return [];
          };
          const itemsGenerated = generarItems();
          setItems(itemsGenerated);
          setTotalMeta(doc.resultado[doc.resultado.length - 1].meta);
        } else {
          const generarItems = () => {
            if (fechaInicio && fechaFin) {
              let resta = fechaFin - fechaInicio;
              const generatedItems = [];
              for (let i = 0; i <= resta; i++) {
                const year = parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                generatedItems.push({
                  title: year.toString(), // Establece el año como título
                  cardDetailedText: "000", // Establece el valor por defecto "000"
                });
              }
              return generatedItems;
            }
            return [];
          };
          const itemsGenerated = generarItems();
          setItems(itemsGenerated);
          setTotalMeta("000");
        }
      });
  }, [fechaInicio, fechaFin]);
  useEffect(() => {
    // Actualiza 'config' solo cuando 'data' cambie
    setConfig({
      ...config,
      data: data,
    });
  }, [data]);
  const renderYears = () => {
    const updateTotalMeta = (index, value) => {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Solo actualiza totalMeta si es el último input modificado
      if (index === items.length - 1) {
        setTotalMeta(value);
      }
    };

    return items.map((item, index) => (
      <div key={index} className="mb-3">
        <label htmlFor="" className="form-label">
          {item.title}
        </label>
        <input
          type="text"
          className="form-control"
          defaultValue={item.cardDetailedText}
          onChange={(e) => updateTotalMeta(index, e.target.value)}
        />
      </div>
    ));
  };
  let yearsCostos = [];
  const total = (fechaInicio, fechaFin) => {
    fechaInicio = parseInt(fechaInicio);
    fechaFin = parseInt(fechaFin);
    for (let i = fechaInicio; i <= fechaFin; i++) {
      yearsCostos.push(i);
    }
  };

  const YearCostoItem = ({ item, index, guardarDatos }) => {
    const [costoEstimado, setCostoEstimado] = useState(0);
    const [recursoDisponible, setRecursoDisponible] = useState(0);
    const [fuentesSeleccionadas, setFuentesSeleccionadas] = useState([]);
    const [fuentesDisponibles, setFuentesDisponibles] = useState([
      "SGP - SISTEMA GENERAL DE PARTICIPACIONES",
      "RP - RECURSOS PROPIOS",
      "PAE - PLAN DE ALIMENTACION ESCOLAR",
      "SGR REGALÍAS",
      "COOPERACIÓN",
      "DONACIÓN",
      "CRÉDITO",
      "OTROS",
    ]);
    const handleGuardar = () => {
      guardarDatos(
        item,
        costoEstimado,
        recursoDisponible,
        fuentesSeleccionadas
      );
    };

    const handleClickFuenteDisponible = (fuente) => {
      const newFuentesDisponibles = fuentesDisponibles.filter(
        (item) => item !== fuente
      );
      setFuentesDisponibles(newFuentesDisponibles);
      setFuentesSeleccionadas([...fuentesSeleccionadas, fuente]);
    };

    const handleClickFuenteSeleccionada = (fuente) => {
      const newFuentesSeleccionadas = fuentesSeleccionadas.filter(
        (item) => item !== fuente
      );
      setFuentesSeleccionadas(newFuentesSeleccionadas);
      setFuentesDisponibles([...fuentesDisponibles, fuente]);
    };

    return (
      <div className="row mb-3 mt-3" key={index}>
        <div className="col-1">
          <h5>Año</h5>
          <b>
            <h3>{item}</h3>
          </b>
        </div>
        <div className="col-2">
          <label htmlFor={`costoEstimado${index}`} className="form-label">
            Costo Estimado
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              placeholder="0,00"
              id={`costoEstimado${index}`}
              value={costoEstimado}
              onChange={(e) => setCostoEstimado(e.target.value)}
            />
          </div>
        </div>
        <div className="col-2">
          <label for="exampleInputPassword1" className="form-label">
            Recurso Disponible
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              placeholder="0,00"
              value={recursoDisponible}
              onChange={(e) => setRecursoDisponible(e.target.value)}
            />
          </div>
        </div>
        {/* Resto de tu estructura para mostrar los datos */}
        <div className="col-3">
          <label for="exampleInputPassword1" className="form-label">
            Fuentes Disponibles
          </label>
          <div
            className="card card-body"
            style={{
              height: "90px",
              scrollbarWidth: "none",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            {fuentesDisponibles.map((fuente, idx) => (
              <button
                key={idx}
                className="btn my-0 py-0 text-dark"
                onClick={() => handleClickFuenteDisponible(fuente)}
              >
                {fuente}
              </button>
            ))}
          </div>
        </div>
        {/* Resto de tu estructura para mostrar los datos */}
        <div className="col-3">
          <label for="exampleInputPassword1" className="form-label">
            Fuentes Seleccionadas
          </label>
          <div
            className="card card-body"
            style={{
              height: "90px",
              scrollbarWidth: "none",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            {fuentesSeleccionadas.map((fuente, idx) => (
              <button
                key={idx}
                className="btn my-0 py-0 text-dark"
                onClick={() => handleClickFuenteSeleccionada(fuente)}
              >
                {fuente}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleGuardar} className="btn btn-primary">
          Guardar
        </button>
      </div>
    );
  };
  const [dataCostos, setDataCostos] = useState({});

  const handleGuardar = async () => {
    try {
      for (const year in dataCostos) {
        const costoEstimado = dataCostos[year].costoEstimado;
        const recursoDisponible = dataCostos[year].recursoDisponible;
        const fuentesSeleccionadas = dataCostos[year].fuentesSeleccionadas;

        const responseCosto = await fetch(
          "http://127.0.0.1:3900/api/productoHasCosto/agregar",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `year=${year}&estimado=${costoEstimado}&disponible=${recursoDisponible}&id_objetivo=${localStorage.getItem(
              "idObjetivo"
            )}`,
          }
        );

        const dataCosto = await responseCosto.json();
        const idCosto = dataCosto.doc[0].max;

        for (let i = 0; i < fuentesSeleccionadas.length; i++) {
          const responseFuente = await fetch(
            "http://127.0.0.1:3900/api/productoCostoHasFuentes/agregar",
            {
              method: "POST",
              body: `fuente=${fuentesSeleccionadas[i]}&id_producto_has_costo=${idCosto}`,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const dataFuente = await responseFuente.json();
          // Maneja la respuesta del servidor para la fuente si es necesario
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const guardarDatos = (
    year,
    costoEstimado,
    recursoDisponible,
    fuentesSeleccionadas
  ) => {
    setDataCostos((prevData) => ({
      ...prevData,
      [year]: { costoEstimado, recursoDisponible, fuentesSeleccionadas },
    }));
  };
  const renderYearsCostos = () => {
    total(fechaInicio, fechaFin);
    return yearsCostos.map((item, index) => (
      <YearCostoItem
        key={index}
        item={item}
        index={index}
        guardarDatos={guardarDatos}
      />
    ));
  };
  const handleEnfoqueCheckboxChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setEnfoqueCheckedItems([...enfoqueCheckedItems, value]);
    } else {
      const updatedItems = enfoqueCheckedItems.filter((item) => item !== value);
      setEnfoqueCheckedItems(updatedItems);
    }
  };

  // Función para manejar cambios en los checkboxes de 'objetivos'
  const handleObjetivosCheckboxChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setObjetivosCheckedItems([...objetivosCheckedItems, value]);
    } else {
      const updatedItems = objetivosCheckedItems.filter(
        (item) => item !== value
      );
      setObjetivosCheckedItems(updatedItems);
    }
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/enfoqueNivelUno/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setEnfoque(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(`http://127.0.0.1:3900/api/enfoqueNivelUno/listarTodos`)
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setEnfoque(doc);
        });
    }
  };
  const handleSearchDos = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/desarrolloSostenible/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setObjetivos(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(`http://127.0.0.1:3900/api/desarrolloSostenible/listarTodos`)
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setObjetivos(doc);
        });
    }
  };
  /* let items = [
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
    {
      title: "2020",
      cardDetailedText: "000",
    },
  ]; */

  /* const data = {
    labels: [2015, 2016, 2017, 2018, 2019],
    datasets: [
      {
        label: "Estimado",
        data: [1, 2, 3, 4, 5],
        responsive: true,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Disponible",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  }; */

  return (
    <>
      <div className="card card-body">
        <div className="card card-header py-0 px-0">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="datosGenerales-tab"
                data-bs-toggle="tab"
                data-bs-target="#datosGenerales"
                type="button"
                role="tab"
                aria-controls="datosGenerales"
                aria-selected="true"
              >
                Datos Generales
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="indicador-tab"
                data-bs-toggle="tab"
                data-bs-target="#indicador"
                type="button"
                role="tab"
                aria-controls="indicador"
                aria-selected="false"
              >
                Indicador
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="meta-tab"
                data-bs-toggle="tab"
                data-bs-target="#meta"
                type="button"
                role="tab"
                aria-controls="meta"
                aria-selected="false"
              >
                Meta
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="costos-tab"
                data-bs-toggle="tab"
                data-bs-target="#costos"
                type="button"
                role="tab"
                aria-controls="costos"
                aria-selected="false"
              >
                Costos
              </button>
            </li>
          </ul>
        </div>
        <div className="card card-body px-0 py-0">
          <div className="tab-content  p-2" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="datosGenerales"
              role="tabpanel"
              aria-labelledby="datosGenerales-tab"
            >
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  let nombre = document.querySelector("#nombreResultado");
                  let nombreProducto =
                    document.querySelector("#nombreProducto");
                  let sector = document.querySelector("#sectorResponsable");
                  let entidad = document.querySelector("#entidadResponsable");
                  let id = localStorage.getItem("idObjetivo");
                  const importancia = document.querySelector("#importancia");
                  if (
                    nombre.value.length > 0 &&
                    nombreProducto.value.length > 0 &&
                    sector.value.length > 0 &&
                    entidad.value.length > 0 &&
                    id.length > 0 &&
                    importancia.value.length > 0
                  ) {
                    fetch(
                      "http://127.0.0.1:3900/api/productoDatosGenerales/agregar",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `nombre_resultado=${
                          nombre.value
                        }&nombre_producto=${
                          nombreProducto.value
                        }&importancia_relativa=${
                          importancia.value
                        }%&sector_responsable=${
                          sector.value
                        }&entidad_responsable=${
                          entidad.value
                        }&id_objetivo=${id}&politica=${localStorage.getItem(
                          "nombre"
                        )}&objetivo=${localStorage.getItem("objetivo")}`,
                      }
                    )
                      .then((response) => {
                        return response.json();
                      })
                      .then((res) => {
                        let idResultado = res.doc[0].max;
                        fetch(
                          "http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/editar/" +
                            localStorage.getItem("idObjetivo"),
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `importancia_relativa=${importancia.value}%`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                        /* for (let i = 0; i < checkboxes.length; i++) {
                          // Envía los valores seleccionados al servidor, por ejemplo, como un JSON en el cuerpo de la solicitud
                          fetch(
                            "http://127.0.0.1:3900/api/resultadoDatosGeneralesHasEnfoques/agregar",
                            {
                              method: "POST",
                              body: `enfoque=${checkboxes[i].value}&id_resultado_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor
                            })
                            .catch((error) => {
                              // Maneja errores
                            });
                        } */
                        enfoqueCheckedItems.forEach((value) => {
                          fetch(
                            `http://127.0.0.1:3900/api/productoDatosGeneralesHasEnfoques/agregar`,
                            {
                              method: "POST",
                              body: `enfoque=${value}&id_producto_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor si es necesario
                            })
                            .catch((error) => {
                              // Maneja errores si los hay
                            });
                        });
                        objetivosCheckedItems.forEach((value) => {
                          fetch(
                            `http://127.0.0.1:3900/api/productoDatosGeneralesHasObjetivos/agregar`,
                            {
                              method: "POST",
                              body: `objetivo=${value}&id_producto_datos_generales=${idResultado}`,
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              // Maneja la respuesta del servidor si es necesario
                            })
                            .catch((error) => {
                              // Maneja errores si los hay
                            });
                        });
                      });
                  } else {
                    alert("Revisar los datos");
                  }
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Objetivo Especifico
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    disabled
                    defaultValue={localStorage.getItem("objetivo")}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea2"
                    className="form-label"
                  >
                    Nombre del Resultado
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreResultado"
                    rows="2"
                    style={{ resize: "none" }}
                    defaultValue={localStorage.getItem("nombreResultado")}
                    disabled
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea3"
                    className="form-label"
                  >
                    Nombre del Producto <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreProducto"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Importancia relativa <b className="text-danger">*</b>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="importancia"
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Sector Responsable <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="sectorResponsable"
                  >
                    {sector.map((element) => (
                      <option
                        key={element.id}
                        value={element.Nombre}
                        id="sector"
                      >
                        {element.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Entidad Responsable <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="entidadResponsable"
                  >
                    {entidad.map((element) => (
                      <option
                        key={element.id}
                        value={element.Nombre}
                        id="Entidad"
                      >
                        {element.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label "
                  >
                    Enfoques <b className="text-danger">*</b>
                  </label>
                  <div className="card w-75 px-0 bg-primary">
                    <div
                      className="card m-2 p-3 "
                      style={{
                        scrollbarWidth: "none",
                        overflow: "auto",
                        overflowX: "hidden",
                        height: "150px",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Buscar..."
                        onChange={handleSearch}
                      />
                      <div className="form-check">
                        {enfoque.map((element) => (
                          <div className="form-check" key={element.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={element.Nombre}
                              id={`checkbox-${element.id}`}
                              onChange={handleEnfoqueCheckboxChange}
                              checked={enfoqueCheckedItems.includes(
                                element.Nombre
                              )}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${element.id}`}
                            >
                              {element.Nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label "
                  >
                    Objetivos de Desarrollo Sostenible{" "}
                    <b className="text-danger">*</b>
                  </label>
                  <div className="card w-75 px-0 bg-primary">
                    <div
                      className="card m-2 p-3 "
                      style={{
                        scrollbarWidth: "none",
                        overflow: "auto",
                        overflowX: "hidden",
                        height: "150px",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Buscar..."
                        onChange={handleSearchDos}
                      />
                      <div className="form-check">
                        {objetivos.map((element) => (
                          <div className="form-check" key={element.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={element.Nombre}
                              id={`checkbox-${element.id}`}
                              onChange={handleObjetivosCheckboxChange}
                              checked={objetivosCheckedItems.includes(
                                element.Nombre
                              )}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${element.id}`}
                            >
                              {element.Nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary m-2">Guardar</button>
                    <button className="btn btn-secondary m-2">Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="indicador"
              role="tabpanel"
              aria-labelledby="indicador-tab"
            >
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  let nombreIndicador =
                    document.querySelector("#nombreIndicador");
                  let formulaIndicador =
                    document.querySelector("#formulaIndicador");
                  let tipoAnulacion = document.querySelector("#tipoAnulacion");
                  let aplicaIndicador =
                    document.querySelector("#aplicaIndicador");
                  let pdd = document.querySelector("#pdd");
                  let indicadorPdd = document.querySelector("#indicadorPdd");
                  let fechaInicio = document.querySelector("#fechaInicio");
                  let fechaFin = document.querySelector("#fechaFin");
                  let disponible = document.querySelector("#disponible");
                  let fechaBase = document.querySelector("#fechaBase");
                  let fuenteIndicador =
                    document.querySelector("#fuenteIndicador");
                  let estaDisponible = disponible.checked;
                  let valorIndicador =
                    document.querySelector("#valorIndicador");
                  if (!estaDisponible) {
                    if (aplicaIndicador.value == "Si") {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        pdd.value.length > 0 &&
                        indicadorPdd.value.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/productoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=${pdd.value}&indicador_pdd=${
                              indicadorPdd.value
                            }&inicio=${fechaInicio.value}&fin=${
                              fechaFin.value
                            }&disponible=Si&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}&politica=${localStorage.getItem(
                              "nombre"
                            )}&objetivo=${localStorage.getItem("objetivo")}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    } else {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/productoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=N/A&indicador_pdd=N/A&inicio=${
                              fechaInicio.value
                            }&fin=${fechaFin.value}&disponible=Si&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    }
                  } else {
                    if (aplicaIndicador.value == "Si") {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        pdd.value.length > 0 &&
                        indicadorPdd.value.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/productoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=${pdd.value}&indicador_pdd=${
                              indicadorPdd.value
                            }&inicio=${fechaInicio.value}&fin=${
                              fechaFin.value
                            }&disponible=No&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    } else {
                      if (
                        nombreIndicador.value.length > 0 &&
                        formulaIndicador.value.length > 0 &&
                        tipoAnulacion.value.length > 0 &&
                        aplicaIndicador.length > 0 &&
                        fechaInicio.value.length > 0 &&
                        fechaFin.value.length > 0 &&
                        valorIndicador.value.length > 0 &&
                        fechaBase.value.length > 0 &&
                        fuenteIndicador.value.length > 0
                      ) {
                        fetch(
                          "http://127.0.0.1:3900/api/productoIndicador/agregar",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            body: `nombre=${nombreIndicador.value}&formula=${
                              formulaIndicador.value
                            }&tipo_anulacion=${tipoAnulacion.value}&aplica=${
                              aplicaIndicador.value
                            }&plan_de_desarrollo=N/A&indicador_pdd=N/A&inicio=${
                              fechaInicio.value
                            }&fin=${fechaFin.value}&disponible=No&valor=${
                              valorIndicador.value
                            }&fecha_base=${fechaBase.value}&fuente=${
                              fuenteIndicador.value
                            }&id_objetivo=${localStorage.getItem(
                              "idObjetivo"
                            )}`,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {});
                      }
                    }
                  }
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea4"
                    className="form-label"
                  >
                    Nombre del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="nombreIndicador"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea5"
                    className="form-label"
                  >
                    Formula del Indicador <b className="text-danger">*</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="formulaIndicador"
                    rows="2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Tipo de Anulación <b className="text-danger">*</b>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipoAnulacion"
                  >
                    <option value="Creciente">Creciente</option>
                    <option value="Decreciente">Decreciente</option>
                    <option value="Constante">Constante</option>
                  </select>
                </div>
                <div className="row mb-3">
                  <div className="col-4">
                    <label htmlFor="" className="form-label">
                      Aplica Indicador PDD? <b className="text-danger">*</b>
                    </label>
                    <select
                      className="form-select w-50"
                      aria-label="Default select example"
                      id="aplicaIndicador"
                    >
                      <option
                        value="Si"
                        /* onClick={() => {
                          setEnable("false");
                        }} */
                      >
                        Si
                      </option>
                      <option
                        value="No"
                        onClick={() => {
                          setEnable("true");
                        }}
                      >
                        No
                      </option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="form-label">
                      Plan de Desarrollo
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      disabled={enable}
                      id="pdd"
                    >
                      {Plan.map((element) => (
                        <option key={element.id} value={element.Nombre}>
                          {element.Nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-5">
                    <label htmlFor="" className="form-label">
                      Indicador PDD
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      disabled={enable}
                      id="indicadorPdd"
                    >
                      {Indicador.map((element) => (
                        <option key={element.id} value={element.Nombre}>
                          {element.Nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <h6 className="mb-3 ">Tiempo de ejecución</h6>
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Inicio <b className="text-danger">*</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaInicio"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="" className="form-label">
                      Fin <b className="text-danger">*</b>
                    </label>
                    <input type="date" className="form-control" id="fechaFin" />
                  </div>
                </div>
                <div className="row mb-3 d-flex align-items-center m-auto">
                  <div className="col-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="disponible"
                      />
                      <label className="form-check-label" htmlFor="">
                        No disponible
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="form-label">
                      Valor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="valorIndicador"
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="" className="form-label">
                      Fecha de la linea base
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaBase"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Fuente de la linea base
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      id="fuenteIndicador"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary m-2">Guardar</button>
                    <button className="btn btn-secondary m-2">Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="meta"
              role="tabpanel"
              aria-labelledby="meta-tab"
            >
              <div className="row mt-3 mb-3">
                <div className="col-9 w-100">
                  {items.length > 0 && (
                    <div style={{ height: "950px" }}>
                      {/* {console.log(items)} */}
                      <Chrono
                        items={items}
                        theme={{
                          primary: "#4e73df",
                          secondary: "#36b9cc",
                          titleColor: "black",
                          titleColorActive: "black",
                        }}
                        mode="VERTICAL_ALTERNATING"
                        hideControls
                        cardHeight={"20px"}
                      />
                    </div>
                  )}
                  {items.length == 0 && <p>Vaciooo</p>}
                </div>
                <div className="col-3">
                  <h1>{totalMeta}</h1>
                  <h5>Meta Total del resultado</h5>
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-primary bi bi-pencil"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      ></button>
                    </div>

                    <div
                      className="modal fade"
                      id="modalId"
                      tabIndex="-1"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      role="dialog"
                      aria-labelledby="modalTitleId"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                      >
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            let total = document.querySelector("#totalMeta");
                            if (total.value.length > 0) {
                              let j = 0;
                              for (let i = fechaInicio; i <= fechaFin; i++) {
                                fetch(
                                  "http://127.0.0.1:3900/api/prodcuctoHasMeta/agregar",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type":
                                        "application/x-www-form-urlencoded",
                                    },
                                    body: `year=${i}&meta=${
                                      values[j]
                                    }&meta_total=${
                                      total.value
                                    }&id_objetivo=${localStorage.getItem(
                                      "idObjetivo"
                                    )}`,
                                  }
                                )
                                  .then((response) => {
                                    return response.json();
                                  })
                                  .then((res) => {
                                    fetch(
                                      `http://127.0.0.1:3900/api/prodcuctoHasMeta/listarMeta/` +
                                        localStorage.getItem("idObjetivo")
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((doc) => {
                                        const generarItems = () => {
                                          if (fechaInicio && fechaFin) {
                                            let resta = fechaFin - fechaInicio;
                                            const generatedItems = [];
                                            for (let i = 0; i <= resta; i++) {
                                              const year =
                                                parseInt(fechaInicio) + i; // Incrementa el año desde fechaInicio hasta fechaFin
                                              generatedItems.push({
                                                title: year.toString(), // Establece el año como título
                                                cardDetailedText:
                                                  doc.resultado[i].meta, // Establece el valor por defecto "000"
                                              });
                                            }
                                            return generatedItems;
                                          }
                                          return [];
                                        };
                                        const itemsGenerated = generarItems();
                                        setItems(itemsGenerated);
                                        renderYears();
                                      });
                                  });
                                j++;
                              }
                            } else {
                              alert("No hay datos");
                            }
                          }}
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="modalTitleId">
                                Registrar Metas
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="mb-3">
                                Tipo anualización:{" "}
                                {localStorage.getItem("tipo")}
                              </div>
                              <div className="mb-3">
                                Linea Base: {localStorage.getItem("linea")}
                              </div>
                              {renderYears()}
                              <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                  Meta total Resultado
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="0,00"
                                  value={totalMeta}
                                  disabled
                                  id="totalMeta"
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cancelar
                              </button>
                              <button type="submit" className="btn btn-primary">
                                Guardar
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="costos"
              role="tabpanel"
              aria-labelledby="costos-tab"
            >
              <h1>{totalSuma}</h1>
              <h5>
                Costo Total Estimado del Producto, Valores en Millones de Pesos
              </h5>
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
                      {/* {alert(data)} */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
