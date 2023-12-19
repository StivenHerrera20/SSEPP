import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../../assets/css/style.css";
import Swal from "sweetalert2";
const AgregarPoliticaPublica = ({ setControlPP, controlPP }) => {
  const [objetivoGeneral, setObjetivoGeneral] = useState(0);
  const [publicar, setPublicar] = useState(0);

  const [show, setShow] = useState(false);
  const [insercion, setIncersion] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDos, setShowDos] = useState(false);
  const handleCloseDos = () => setShowDos(false);
  const handleShowDos = () => setShowDos(true);

  const [showTres, setShowTres] = useState(false);
  const handleCloseTres = () => setShowTres(false);
  const handleShowTres = () => setShowTres(true);

  const [showCuatro, setShowCuatro] = useState(false);
  const handleCloseCuatro = () => setShowCuatro(false);
  const handleShowCuatro = () => setShowCuatro(true);

  const [showCinco, setShowCinco] = useState(false);
  const handleCloseCinco = () => setShowCinco(false);
  const handleShowCinco = () => setShowCinco(true);
  const [sector, setSectores] = useState([]);
  const [entidad, setEntidades] = useState([]);
  const [idPolitica, setmaxIdPolitica] = useState([]);
  const [objetivosEspecificos, setobjetivosEspecificos] = useState([]);
  const [documentosDeAdopcion, setdocumentosDeAdopcion] = useState([]);
  const [documentosAsociados, setdocumentosAsociados] = useState([]);
  const [pubPolitica, setPubPolitica] = useState([]);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [fila, setFila] = useState(5);
  const [busqueda, setBusqueda] = useState(0);
  const [pagina, setPagina] = useState(0);
  const [totalRegistrosEspecificos, setTotalRegistrosEspecificos] = useState(0);
  const [totalPaginasEspecificos, setTotalPaginasEspecificos] = useState(0);
  const [filaEspecificos, setFilaEspecificos] = useState(5);
  const [busquedaEspecificos, setBusquedaEspecificos] = useState(0);
  const [paginaEspecificos, setPaginaEspecificos] = useState(0);
  const [totalRegistrosAsociados, setTotalRegistrosAsociados] = useState(0);
  const [totalPaginasAsociados, setTotalPaginasAsociados] = useState(0);
  const [filaAsociados, setFilaAsociados] = useState(5);
  const [busquedaAsociados, setBusquedaAsociados] = useState(0);
  const [paginaAsociados, setPaginaAsociados] = useState(0);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/documentosAsociadosPP/listar?page=${paginaAsociados}&size=${filaAsociados}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setdocumentosAsociados(doc.desarrollo);
        setTotalRegistrosAsociados(doc.total);
        setTotalPaginasAsociados(Math.ceil(doc.total / filaAsociados));
      });
    fetch("http://127.0.0.1:3900/api/sector/listarTodos")
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setSectores(doc);
      });
    fetch(`http://127.0.0.1:3900/api/entidad/listarTodos`)
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setEntidades(doc);
      });
    fetch(
      `http://127.0.0.1:3900/api/documentoDeAdopcionPP/listar?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setdocumentosDeAdopcion(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
  }, [pagina, fila, paginaAsociados, filaAsociados]);
  const selectPagina = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistros;
    let nRegistrosPP = selectedValue;
    setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/documentoDeAdopcionPP/listar?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setdocumentosDeAdopcion(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
  };
  const selectPaginaAsociados = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistrosAsociados;
    let nRegistrosPP = selectedValue;
    setTotalPaginasAsociados(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/documentosAsociadosPP/listar?page=" +
        paginaAsociados +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setdocumentosAsociados(doc.desarrollo);
        setFilaAsociados(parseInt(selectedValue));
      });
  };
  const handleSearchAsociados = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/documentosAsociadosPP/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setdocumentosAsociados(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/documentosAsociadosPP/listar?page=${paginaAsociados}&size=${filaAsociados}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setdocumentosAsociados(doc.desarrollo);
        });
    }
  };
  /* const selectPaginaEspecificos = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistrosEspecificos;
    let nRegistrosPP = selectedValue;
    setTotalPaginasAsociados(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listar?page=" +
        paginaEspecificos +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setobjetivosEspecificos(doc.desarrollo);
        setFilaEspecificos(parseInt(selectedValue));
      });
  }; */
  const handleSearchEspecificos = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setobjetivosEspecificos(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listar?page=${paginaEspecificos}&size=${filaEspecificos}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setobjetivosEspecificos(doc.desarrollo);
        });
    }
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/documentoDeAdopcionPP/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setdocumentosDeAdopcion(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/documentoDeAdopcionPP/listar?page=${pagina}&size=${fila}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setdocumentosDeAdopcion(doc.desarrollo);
        });
    }
  };
  const handleSiguiente = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const handleAnterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };
  const handleSiguienteAsociados = () => {
    if (paginaAsociados < totalPaginasAsociados - 1) {
      setPaginaAsociados(paginaAsociados + 1);
    }
  };

  const handleAnteriorAsociados = () => {
    if (paginaAsociados > 0) {
      setPaginaAsociados(paginaAsociados - 1);
    }
  };
  /*  const handleSiguienteEspecificos = () => {
    if (paginaEspecificos < totalPaginasEspecificos - 1) {
      setPaginaEspecificos(paginaEspecificos + 1);
    }
  };

  const handleAnteriorEspecificos = () => {
    if (paginaEspecificos > 0) {
      setPaginaEspecificos(paginaEspecificos - 1);
    }
  }; */
  const handleDownload = (documento) => {
    const link = document.createElement("a");
    link.href = "http://127.0.0.1:3900/images/" + documento;
    link.download = `NombreDeArchivo`; // Puedes establecer el nombre del archivo aquí
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body d-flex">
          <button
            className="btn btn-primary "
            onClick={(e) => {
              e.preventDefault();
              setControlPP(0);
            }}
          >
            Politicas Publicas
          </button>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {" "}
            Proceso de Creación de Política Pública
          </h2>
        </div>
        <hr className="sidebar-divider my-0 " />
        <div className="card-body">
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
                id="documentosAdopcion-tab"
                data-bs-toggle="tab"
                data-bs-target="#documentosAdopcion"
                type="button"
                role="tab"
                aria-controls="documentosAdopcion"
                aria-selected="false"
              >
                Documentos de Adopción
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="objetivos-tab"
                data-bs-toggle="tab"
                data-bs-target="#objetivos"
                type="button"
                role="tab"
                aria-controls="objetivos"
                aria-selected="false"
              >
                Objetivos
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="documentosAsociados-tab"
                data-bs-toggle="tab"
                data-bs-target="#documentosAsociados"
                type="button"
                role="tab"
                aria-controls="documentosAsociados"
                aria-selected="false"
              >
                Documentos Asociados
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="publicacion-tab"
                data-bs-toggle="tab"
                data-bs-target="#publicacion"
                type="button"
                role="tab"
                aria-controls="publicacion"
                aria-selected="false"
              >
                Publicación
              </button>
            </li>
          </ul>
          <div className="tab-content border p-2" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="datosGenerales"
              role="tabpanel"
              aria-labelledby="datosGenerales-tab"
            >
              <div className="container-fluid">
                <form
                  action=""
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let nombre = document.querySelector("#nomPolitica");
                    let nemotecnico = document.querySelector("#nemotecnico");
                    let years = document.querySelector("#years");
                    let fechaInicio = document.querySelector("#fechaInicio");
                    let fechaFin = document.querySelector("#fechaFin");
                    let sectorLider = document.querySelector("#sectorLiderPP");
                    let costo = document.querySelector("#costoPP");
                    let imagen = document.querySelector("#imagen");
                    let fechaAprobacion =
                      document.querySelector("#fechaAprobacion");
                    let entidadLider =
                      document.querySelector("#entidadLiderPP");
                    if (
                      nombre.value.length > 0 &&
                      nemotecnico.value.length > 0 &&
                      years.value.length > 0 &&
                      fechaInicio.value.length > 0 &&
                      fechaFin.value.length > 0 &&
                      sectorLider.value.length > 0 &&
                      costo.value.length > 0 &&
                      fechaAprobacion.value.length &&
                      entidadLider.length > 0
                    ) {
                      const formData = new FormData();
                      formData.append("nombre", nombre.value);
                      formData.append("nemotecnico", nemotecnico.value);
                      formData.append("years", years.value);
                      formData.append("fecha_inicio", fechaInicio.value);
                      formData.append("fecha_fin", fechaFin.value);
                      formData.append("sector_lider", sectorLider.value);
                      formData.append("entidad_lider", entidadLider.value);
                      formData.append("costo", costo.value);
                      formData.append(
                        "fecha_aprobacion",
                        fechaAprobacion.value
                      );
                      formData.append("imagen", imagen.files[0]); // Aquí se adjunta el archivo de imagen

                      formData.append("estado", "por aprobar");
                      fetch(
                        "http://127.0.0.1:3900/api/politicasPublicas/agregar",
                        {
                          method: "POST",
                          body: formData,
                        }
                      )
                        .then((response) => {
                          return response.json();
                        })
                        .then((res) => {
                          setIncersion(true);
                          const checkboxes = document.querySelectorAll(
                            'input[type="checkbox"]:checked'
                          );
                          let idPolitica = res.doc[0].max;
                          for (let i = 0; i < checkboxes.length; i++) {
                            // Envía los valores seleccionados al servidor, por ejemplo, como un JSON en el cuerpo de la solicitud
                            fetch(
                              "http://127.0.0.1:3900/api/politicaHasSectores/agregar",
                              {
                                method: "POST",
                                body: `sector=${checkboxes[i].value}&id_politica=${idPolitica}`,
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                              }
                            )
                              .then((response) => response.json())
                              .then((data) => {
                                Swal.fire({
                                  title: "Buen trabajo!",
                                  text: "Agregado correctamente!",
                                  icon: "success",
                                });
                              })
                              .catch((error) => {
                                Swal.fire({
                                  icon: "error",
                                  title: "Error!",
                                  text: "Ha ocurrido un error",
                                });
                              });
                          }
                        });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Error!",
                        text: "Ingresa todos los datos",
                      });
                    }
                  }}
                >
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Nombre de la politica <b className="text-danger">*</b>
                      </label>
                      <textarea
                        className="form-control"
                        name=""
                        id="nomPolitica"
                        rows="2"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Nemotécnico - Documento CONPES D.C.N{" "}
                        <b className="text-danger">*</b>
                      </label>
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="form-control w-25 me-3"
                          id="nemotecnico"
                        />
                        <input
                          type="number"
                          className="form-control w-25 "
                          placeholder="Años"
                          id="years"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label ms-4"
                      >
                        Vigencia de la politica
                      </label>
                      <div className="col d-flex">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label w-25 text-center"
                        >
                          Inicio <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          className="form-control w-50 "
                          id="fechaInicio"
                        />
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label w-25 text-center"
                        >
                          Fin <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          className="form-control w-50"
                          id="fechaFin"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Sector lider <b className="text-danger">*</b>
                      </label>
                      <select
                        name=""
                        id="sectorLiderPP"
                        className="form-select"
                      >
                        {sector.map((element) => (
                          <option
                            key={element.id}
                            value={element.Nombre}
                            id="sectorLider"
                          >
                            {element.Nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Entidad lider <b className="text-danger">*</b>
                      </label>
                      <select
                        name=""
                        id="entidadLiderPP"
                        className="form-select"
                      >
                        {entidad.map((element) => (
                          <option
                            key={element.id}
                            value={element.Nombre}
                            id="sectorEntidad"
                          >
                            {element.Nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Costo total de la politica{" "}
                        <b className="text-danger">*</b>
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          id="costoPP"
                        />
                      </div>
                    </div>
                    <div className="col-5 ms-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label "
                      >
                        Fecha aprobación <b className="text-danger">*</b>
                      </label>
                      <input
                        type="date"
                        className="form-control w-50"
                        id="fechaAprobacion"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label "
                      >
                        Imagen
                      </label>
                      <input
                        type="file"
                        name="imagen"
                        id="imagen"
                        className="form-control w-50"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label "
                    >
                      Sectores corresponsables
                    </label>
                    <div className="card w-50 px-0 bg-primary">
                      <div
                        className="card m-2 p-3 "
                        style={{
                          scrollbarWidth: "none",
                          overflow: "auto",
                          overflowX: "hidden",
                          height: "150px",
                        }}
                      >
                        {sector.map((sector) => (
                          <div className="form-check" key={sector.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={sector.Nombre}
                              id={`checkbox-${sector.id}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${sector.id}`}
                            >
                              {sector.Nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr className="sidebar-divider my-0 " />
                  <div className="row mb-3">
                    <div className="col d-flex justify-content-end">
                      <button className="btn btn-secondary m-2">Guardar</button>
                      <button className="btn btn-secondary m-2">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="documentosAdopcion"
              role="tabpanel"
              aria-labelledby="documentosAdopcion-tab"
            >
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex">
                  <Button
                    className="btn btn-primary fa fa-plus"
                    variant="primary"
                    onClick={handleShow}
                  ></Button>
                  <div>
                    <select
                      name=""
                      id="numeroFilas"
                      className="form-select ms-3"
                      onChange={selectPagina}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option defaultValue="5" value="5">
                        5
                      </option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Documento de adopción
                  </h2>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Buscar..."
                      id="txtTabla"
                      onChange={handleSearch}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tipo Documento</th>
                          <th>Número</th>
                          <th>Año</th>
                          <th>Nombre del Documento</th>
                          <th className="text-center">Descargar</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        {documentosDeAdopcion.map((res) => {
                          return (
                            <tr key={res.id}>
                              <td>{res.id}</td>
                              <td>{res.tipo}</td>
                              <td>{res.numero}</td>
                              <td>{res.year}</td>
                              <td>{res.nombre}</td>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="btn btn-warning fa fa-download "
                                  onClick={() => handleDownload(res.documento)}
                                ></button>
                              </td>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="btn btn-danger fa fa-trash "
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fetch(
                                      "http://127.0.0.1:3900/api/documentoDeAdopcionPP/eliminar/" +
                                        e.target.parentElement.parentElement
                                          .children[0].textContent,
                                      { method: "DELETE" }
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((res) => {
                                        Swal.fire({
                                          title: "Buen trabajo!",
                                          text: "Eliminado correctamente!",
                                          icon: "success",
                                        });
                                        fetch(
                                          `http://127.0.0.1:3900/api/documentoDeAdopcionPP/listar?page=${pagina}&size=${fila}`
                                        )
                                          .then((response) => {
                                            return response.json();
                                          })
                                          .then((doc) => {
                                            setdocumentosDeAdopcion(
                                              doc.desarrollo
                                            );
                                            setTotalRegistros(doc.total);
                                            setTotalPaginas(
                                              Math.ceil(doc.total / fila)
                                            );
                                          });
                                      });
                                  }}
                                ></button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <Button
                      className="btn btn-primary m-2"
                      variant="primary"
                      onClick={handleAnterior}
                    >
                      Anterior
                    </Button>
                    <Button
                      className="btn btn-primary m-2"
                      variant="primary"
                      onClick={handleSiguiente}
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Documento Adopción</Modal.Title>
                  </Modal.Header>
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      let tipoDocumento =
                        document.querySelector("#tipoDocumento");
                      let numero = document.querySelector("#numero");
                      let year = document.querySelector("#year");
                      let descripcionDocumentosAdopcion =
                        document.querySelector(
                          "#descripcionDocumentosAdopcion"
                        );
                      let documento = document.querySelector("#documento");
                      if (
                        tipoDocumento.value.length > 0 &&
                        numero.value.length > 0 &&
                        year.value.length > 0 &&
                        descripcionDocumentosAdopcion.value.length > 0
                      ) {
                        const formData = new FormData();
                        formData.append("tipo", tipoDocumento.value);
                        formData.append("numero", numero.value);
                        formData.append("year", year.value);
                        formData.append(
                          "nombre",
                          descripcionDocumentosAdopcion.value
                        );
                        formData.append("documento", documento.files[0]);
                        fetch(
                          "http://127.0.0.1:3900/api/documentoDeAdopcionPP/agregar",
                          {
                            method: "POST",
                            body: formData,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {
                            Swal.fire({
                              title: "Buen trabajo!",
                              text: "Agregado correctamente!",
                              icon: "success",
                            });
                            fetch(
                              `http://127.0.0.1:3900/api/documentoDeAdopcionPP/listar?page=${pagina}&size=${fila}`
                            )
                              .then((response) => {
                                return response.json();
                              })
                              .then((doc) => {
                                setdocumentosDeAdopcion(doc.desarrollo);
                                setTotalRegistros(doc.total);
                                setTotalPaginas(Math.ceil(doc.total / fila));
                              });
                          });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    <Modal.Body>
                      <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">
                          Tipo de documento <b className="text-danger">*</b>
                        </label>
                        <select
                          name=""
                          id="tipoDocumento"
                          className="form-select"
                        >
                          <option value="Ley">Ley</option>
                          <option value="Decreto">Decreto</option>
                          <option value="Resolución">Resolución</option>
                          <option value="Ordenanza">Ordenanza</option>
                          <option value="Acuerdo">Acuerdo</option>
                          <option value="Compes">Compes</option>
                          <option value="Directiva">Directiva</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">
                          Número <b className="text-danger">*</b>
                        </label>
                        <input
                          type="text"
                          id="numero"
                          className="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">
                          Año <b className="text-danger">*</b>
                        </label>
                        <input
                          type="number"
                          id="year"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Nombre del documento <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="descripcionDocumentosAdopcion"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label "
                        >
                          Documento <b className="text-danger">*</b>
                        </label>
                        <input
                          type="file"
                          id="documento"
                          className="form-control"
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handleClose}
                      >
                        Guardar
                      </Button>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="objetivos"
              role="tabpanel"
              aria-labelledby="objetivos-tab"
            >
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex">
                  {(() => {
                    //Desicion para controlar el contenido del div de interacciones
                    if (objetivoGeneral == 0) {
                      return (
                        <Button
                          className="btn btn-primary fa fa-plus"
                          variant="primary"
                          onClick={handleShowDos}
                        ></Button>
                      );
                    } else {
                      if (objetivoGeneral == 1) {
                        return (
                          <Button
                            className="btn btn-primary fa fa-pencil"
                            variant="primary"
                            onClick={handleShowDos}
                          ></Button>
                        );
                      }
                    }
                  })()}

                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Objetivo General
                  </h2>
                </div>
                <div className="card-body">
                  <p id="objetivo">
                    Aún no se ha creado Objetivo General para esta Politica
                  </p>
                </div>
                <Modal show={showDos} onHide={handleCloseDos}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Objetivo General</Modal.Title>
                  </Modal.Header>
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const objetivo =
                        document.querySelector("#objetivoGeneral");
                      if (objetivo.value.length > 0) {
                        fetch(
                          "http://127.0.0.1:3900/api/politicasPublicas/maximo/id"
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {
                            let id = res.maximo;
                            fetch(
                              "http://127.0.0.1:3900/api/PPHasObjetivoGeneral/agregar",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                body: `objetivo=${objetivo.value}&id_politica=${id}`,
                              }
                            )
                              .then((response) => {
                                return response.json();
                              })
                              .then((res) => {
                                setObjetivoGeneral(1);
                                Swal.fire({
                                  title: "Buen trabajo!",
                                  text: "Agregado correctamente!",
                                  icon: "success",
                                });
                                let objetivoP =
                                  document.querySelector("#objetivo");
                                objetivoP.innerHTML = objetivo.value;
                              });
                          });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Descripción Objetivo <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="objetivoGeneral"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={() => {
                          handleCloseDos();
                        }}
                      >
                        Guardar
                      </Button>
                      <Button variant="secondary" onClick={handleCloseDos}>
                        Cancelar
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex">
                  {(() => {
                    //Desicion para controlar el contenido del div de interacciones
                    if (objetivoGeneral == 0) {
                      return <></>;
                    } else {
                      if (objetivoGeneral == 1) {
                        return (
                          <Button
                            className="btn btn-primary fa fa-plus"
                            variant="primary"
                            onClick={handleShowTres}
                          ></Button>
                        );
                      }
                    }
                  })()}
                  {/* <div>
                    <select
                      name=""
                      id="numeroFilas"
                      className="form-select ms-3"
                      onChange={selectPaginaEspecificos}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option defaultValue="5" value="5">
                        5
                      </option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div> */}
                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Objetivos Especificos
                  </h2>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Buscar..."
                      id="txtTabla"
                      onChange={handleSearchEspecificos}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th hidden>#</th>
                          <th>Descripción del Objetivo</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        {objetivosEspecificos.map((res) => {
                          return (
                            <tr key={res.id}>
                              <td hidden>{res.id}</td>
                              <td>{res.objetivo}</td>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="btn btn-danger fa fa-trash "
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fetch(
                                      "http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/eliminar/" +
                                        e.target.parentElement.parentElement
                                          .children[0].textContent,
                                      { method: "DELETE" }
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((res) => {
                                        Swal.fire({
                                          title: "Buen trabajo!",
                                          text: "Eliminado correctamente!",
                                          icon: "success",
                                        });
                                        fetch(
                                          `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listar?page=${paginaEspecificos}&size=${filaEspecificos}`
                                        )
                                          .then((response) => {
                                            return response.json();
                                          })
                                          .then((doc) => {
                                            setobjetivosEspecificos(
                                              doc.desarrollo
                                            );
                                            setTotalRegistrosEspecificos(
                                              doc.total
                                            );
                                            setTotalPaginasEspecificos(
                                              Math.ceil(
                                                doc.total / filaEspecificos
                                              )
                                            );
                                          });
                                      });
                                  }}
                                ></button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <Button
                    className="btn btn-primary"
                    variant="primary"
                    onClick={handleAnteriorEspecificos}
                  >
                    Anterior
                  </Button>
                  <Button
                    className="btn btn-primary"
                    variant="primary"
                    onClick={handleSiguienteEspecificos}
                  >
                    Siguiente
                  </Button> */}
                </div>
                <Modal show={showTres} onHide={handleCloseTres}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Objetivo Especifico</Modal.Title>
                  </Modal.Header>
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const objetivo = document.querySelector(
                        "#objetivoEspecifico"
                      );
                      if (objetivo.value.length > 0) {
                        fetch(
                          "http://127.0.0.1:3900/api/politicasPublicas/maximo/id"
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {
                            let id = res.maximo;
                            fetch(
                              "http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/agregar",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                body: `objetivo=${objetivo.value}&id_politica=${id}`,
                              }
                            )
                              .then((response) => {
                                return response.json();
                              })
                              .then((res) => {
                                Swal.fire({
                                  title: "Buen trabajo!",
                                  text: "Agregado correctamente!",
                                  icon: "success",
                                });
                                fetch(
                                  `http://127.0.0.1:3900/api/PPHasObjetivoEspecifico/listar?page=${paginaEspecificos}&size=${filaEspecificos}`
                                )
                                  .then((response) => {
                                    return response.json();
                                  })
                                  .then((doc) => {
                                    setobjetivosEspecificos(doc.desarrollo);
                                    setTotalRegistrosEspecificos(doc.total);
                                    setTotalPaginasEspecificos(
                                      Math.ceil(doc.total / filaEspecificos)
                                    );
                                  });
                              });
                          });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Descripción Objetivo <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="objetivoEspecifico"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handleCloseTres}
                      >
                        Guardar
                      </Button>
                      <Button variant="secondary" onClick={handleCloseTres}>
                        Cancelar
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="documentosAsociados"
              role="tabpanel"
              aria-labelledby="documentosAsociados-tab"
            >
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex">
                  <Button
                    className="btn btn-primary fa fa-plus"
                    variant="primary"
                    onClick={handleShowCuatro}
                  ></Button>
                  <div>
                    <select
                      name=""
                      id="numeroFilas"
                      className="form-select ms-3"
                      onChange={selectPaginaAsociados}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option defaultValue="5" value="5">
                        5
                      </option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Documentos Asociados
                  </h2>
                  <div>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Buscar..."
                      id="txtTabla"
                      onChange={handleSearchAsociados}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nombre del Documento</th>
                          <th>Tipo Documento</th>
                          <th className="text-center">Descargar</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        {documentosAsociados.map((res) => {
                          return (
                            <tr key={res.id}>
                              <td>{res.id}</td>
                              <td>{res.nombre}</td>
                              <td>{res.tipo_documento}</td>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="btn btn-warning fa fa-download "
                                  onClick={() => handleDownload(res.documento)}
                                ></button>
                              </td>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="btn btn-danger fa fa-trash "
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fetch(
                                      "http://127.0.0.1:3900/api/documentosAsociadosPP/eliminar/" +
                                        e.target.parentElement.parentElement
                                          .children[0].textContent,
                                      { method: "DELETE" }
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((res) => {
                                        Swal.fire({
                                          title: "Buen trabajo!",
                                          text: "Eliminado correctamente!",
                                          icon: "success",
                                        });
                                        fetch(
                                          `http://127.0.0.1:3900/api/documentosAsociadosPP/listar?page=${paginaAsociados}&size=${filaAsociados}`
                                        )
                                          .then((response) => {
                                            return response.json();
                                          })
                                          .then((doc) => {
                                            setdocumentosAsociados(
                                              doc.desarrollo
                                            );
                                            setTotalRegistrosAsociados(
                                              doc.total
                                            );
                                            setTotalPaginasAsociados(
                                              Math.ceil(
                                                doc.total / filaAsociados
                                              )
                                            );
                                          });
                                      });
                                  }}
                                ></button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <Button
                      className="btn btn-primary m-2"
                      variant="primary"
                      onClick={handleAnteriorAsociados}
                    >
                      Anterior
                    </Button>
                    <Button
                      className="btn btn-primary m-2"
                      variant="primary"
                      onClick={handleSiguienteAsociados}
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
                <Modal show={showCuatro} onHide={handleCloseCuatro}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Documento Asociados</Modal.Title>
                  </Modal.Header>
                  <form
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      let tipoDocumentoAsociado = document.querySelector(
                        "#tipoDocumentoAsociado"
                      );
                      let nombreDocumentoAsociado = document.querySelector(
                        "#nombreDocumentoAsociado"
                      );
                      let documentoAsociado =
                        document.querySelector("#documentoAsociado");
                      if (
                        tipoDocumentoAsociado.value.length > 0 &&
                        nombreDocumentoAsociado.value.length > 0
                      ) {
                        const formData = new FormData();
                        formData.append(
                          "tipo_documento",
                          tipoDocumentoAsociado.value
                        );
                        formData.append(
                          "nombre",
                          nombreDocumentoAsociado.value
                        );
                        formData.append(
                          "documento",
                          documentoAsociado.files[0]
                        );
                        fetch(
                          "http://127.0.0.1:3900/api/documentosAsociadosPP/agregar",
                          {
                            method: "POST",
                            body: formData,
                          }
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {
                            Swal.fire({
                              title: "Buen trabajo!",
                              text: "Agregado correctamente!",
                              icon: "success",
                            });
                            fetch(
                              `http://127.0.0.1:3900/api/documentosAsociadosPP/listar?page=${paginaAsociados}&size=${filaAsociados}`
                            )
                              .then((response) => {
                                return response.json();
                              })
                              .then((doc) => {
                                setdocumentosAsociados(doc.desarrollo);
                                setTotalRegistrosAsociados(doc.total);
                                setTotalPaginasAsociados(
                                  Math.ceil(doc.total / filaAsociados)
                                );
                              });
                          });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    <Modal.Body>
                      <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">
                          Tipo de documento <b className="text-danger">*</b>
                        </label>
                        <select
                          name=""
                          id="tipoDocumentoAsociado"
                          className="form-select"
                        >
                          <option value="Ley">Ley</option>
                          <option value="Decreto">Decreto</option>
                          <option value="Resolución">Resolución</option>
                          <option value="Ordenanza">Ordenanza</option>
                          <option value="Acuerdo">Acuerdo</option>
                          <option value="Compes">Compes</option>
                          <option value="Directiva">Directiva</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Nombre del documento
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="nombreDocumentoAsociado"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label "
                        >
                          Documento
                        </label>
                        <input
                          type="file"
                          name=""
                          id="documentoAsociado"
                          className="form-control"
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handleCloseCuatro}
                      >
                        Guardar
                      </Button>
                      <Button variant="secondary" onClick={handleCloseCuatro}>
                        Cancelar
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="publicacion"
              role="tabpanel"
              aria-labelledby="publicacion-tab"
            >
              <div className="card shadow m-3">
                <div className="card-body">
                  {(() => {
                    //Desicion para controlar el contenido del div de interacciones
                    if (publicar == 0) {
                      return (
                        <>
                          <div className="row">
                            <div className="col">
                              <h6>¿Desea realizar la publicación?</h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col d-flex justify-content-center">
                              <button
                                className="btn btn-primary  m-2 p-2"
                                onClick={handleShowCinco}
                              >
                                <i className="fa fa-save"></i> Publicar
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    } else {
                      if (publicar == 1) {
                        return (
                          <>
                            <div className="row">
                              <div className="col">
                                <h6>
                                  Esta politica esta pendiente de aprobación
                                </h6>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-center">
                                <button
                                  className="btn btn-primary m-2 p-2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fetch(
                                      "http://127.0.0.1:3900/api/politicasPublicas/maximo/id"
                                    )
                                      .then((response) => {
                                        return response.json();
                                      })
                                      .then((res) => {
                                        let id = res.maximo;
                                        fetch(
                                          `http://127.0.0.1:3900/api/politicasPublicas/editar/${id}`,
                                          {
                                            method: "PUT",
                                            headers: {
                                              "Content-Type":
                                                "application/x-www-form-urlencoded",
                                            },
                                            body: `estado=Aprobado`,
                                          }
                                        )
                                          .then((response) => {
                                            return response.json();
                                          })
                                          .then((res) => {
                                            setTimeout(() => {
                                              Swal.fire({
                                                title: "Buen trabajo!",
                                                text: "Aprobado correctamente!",
                                                icon: "success",
                                              });
                                              window.location.reload();
                                            }, 1000);
                                          });
                                      });
                                  }}
                                >
                                  <i className="fa fa-check "></i> Aprobar
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      }
                    }
                  })()}
                </div>
              </div>
              <div className="card shadow m-3">
                <div className="card-header py-3 d-flex">
                  <h4 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Versiones de la Política
                  </h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Versión</th>
                          <th>Fecha</th>
                          <th>
                            Entrada en vigencia en versiones de la política
                          </th>
                          <th>Justificación</th>
                        </tr>
                      </thead>

                      <tbody>
                        {pubPolitica.map((res) => {
                          return (
                            <tr key={res.id}>
                              <td>{res.version}</td>
                              <td>{res.fecha}</td>
                              <td>{res.vigencia}</td>
                              <td>{res.justificacion}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <Modal show={showCinco} onHide={handleCloseCinco}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Publicación de Política Pública</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      let justificacion =
                        document.querySelector("#justificacion");
                      let vigencia = document.querySelector("#vigencia");
                      let version = document.querySelector("#version");
                      if (
                        justificacion.value.length > 0 &&
                        vigencia.value.length > 0 &&
                        version.value.length > 0
                      ) {
                        setPublicar(1);
                        fetch(
                          "http://127.0.0.1:3900/api/politicasPublicas/maximo/id"
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((res) => {
                            let id = res.maximo;
                            let fechaActual = new Date();
                            // Formatear la fecha en el formato que necesitas (por ejemplo, YYYY-MM-DD)
                            let fechaFormateada = fechaActual
                              .toISOString()
                              .split("T")[0];
                            fetch(
                              "http://127.0.0.1:3900/api/publicacionPolitica/agregar",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                body: `version=${version.value}&fecha=${fechaFormateada}&vigencia=${vigencia.value}&justificacion=${justificacion.value}&idPolitica=${id}`,
                              }
                            )
                              .then((response) => {
                                return response.json();
                              })
                              .then((res) => {
                                Swal.fire({
                                  title: "Buen trabajo!",
                                  text: "Publicado correctamente!",
                                  icon: "success",
                                });
                                fetch(
                                  `http://127.0.0.1:3900/api/publicacionPolitica/listar/${id}`
                                )
                                  .then((response) => {
                                    return response.json();
                                  })
                                  .then((doc) => {
                                    setPubPolitica(doc);
                                  });
                              });
                          });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Error!",
                          text: "Ingresa todos los datos",
                        });
                      }
                    }}
                  >
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Justificación <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="justificacion"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Versión <b className="text-danger">*</b>
                        </label>
                        <input
                          className="form-control"
                          name=""
                          id="version"
                        ></input>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label "
                        >
                          Entrada en vigencia en versiones de la política{" "}
                          <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          name=""
                          id="vigencia"
                          className="form-control"
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={() => {
                          handleCloseCinco();
                        }}
                      >
                        Guardar
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleCloseCinco();
                        }}
                      >
                        Cancelar
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarPoliticaPublica;
