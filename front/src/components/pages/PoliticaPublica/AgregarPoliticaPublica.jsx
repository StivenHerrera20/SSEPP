import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../../assets/css/style.css";
const AgregarPoliticaPublica = ({ setControlPP, controlPP }) => {
  const [objetivoGeneral, setObjetivoGeneral] = useState(0);
  const [publicar, setPublicar] = useState(0);

  const [show, setShow] = useState(false);
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

  useEffect(() => {}, []);
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
                <div className="row mb-3">
                  <div className="col">
                    <label for="exampleInputPassword1" className="form-label">
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
                    <label for="exampleInputPassword1" className="form-label">
                      Nemotécnico - Documento CONPES D.C.N{" "}
                      <b className="text-danger">*</b>
                    </label>
                    <div className="col d-flex">
                      <input type="text" className="form-control w-25 me-3" />
                      <input
                        type="number"
                        className="form-control w-25 "
                        placeholder="Años"
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <label
                      for="exampleInputPassword1"
                      className="form-label ms-4"
                    >
                      Vigencia de la politica
                    </label>
                    <div className="col d-flex">
                      <label
                        for="exampleInputPassword1"
                        className="form-label w-25 text-center"
                      >
                        Inicio <b className="text-danger">*</b>
                      </label>
                      <input type="date" className="form-control w-50 " />
                      <label
                        for="exampleInputPassword1"
                        className="form-label w-25 text-center"
                      >
                        Fin <b className="text-danger">*</b>
                      </label>
                      <input type="date" className="form-control w-50" />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label for="exampleInputPassword1" className="form-label">
                      Sector lider <b className="text-danger">*</b>
                    </label>
                    <select name="" id="" className="form-select"></select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label for="exampleInputPassword1" className="form-label">
                      Entidad lider <b className="text-danger">*</b>
                    </label>
                    <select name="" id="" className="form-select"></select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4">
                    <label for="exampleInputPassword1" className="form-label">
                      Costo total de la politica{" "}
                      <b className="text-danger">*</b>
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                  </div>
                  <div className="col-5 ms-4">
                    <label for="exampleInputPassword1" className="form-label ">
                      Fecha aprobación <b className="text-danger">*</b>
                    </label>
                    <input type="date" className="form-control w-50" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label for="exampleInputPassword1" className="form-label ">
                      Imagen
                    </label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="form-control w-50"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="exampleInputPassword1" className="form-label ">
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
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Gobierno
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Gestión Pública
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Educación
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Ambiente
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Cultura Recreación y Deporte
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Desarrollo Económico, Industris y Turismo
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector Hacienda
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Sector
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="sidebar-divider my-0 " />
                <div className="row mb-3">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary m-2">Guardar</button>
                    <button className="btn btn-secondary m-2">Cancelar</button>
                  </div>
                </div>
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

                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Documento de adopción
                  </h2>
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
                          <th>Tipo Documento</th>
                          <th>Número</th>
                          <th>Año</th>
                          <th>Nombre del Documento</th>
                          <th className="text-center">Descargar</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Documento CONPES D.C</td>
                          <td>03</td>
                          <td>2019</td>
                          <td>
                            Politica Pública Distrital de Servicio a la
                            Ciudadania
                          </td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-warning fa fa-download "></button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-danger fa fa-trash "></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Documento Adopción</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Tipo de documento <b className="text-danger">*</b>
                        </label>
                        <select name="" id="" className="form-select">
                          <option value="">Documento CONPES D.C</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Número <b className="text-danger">*</b>
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Año <b className="text-danger">*</b>
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
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
                          for="exampleInputPassword1"
                          className="form-label "
                        >
                          Documento <b className="text-danger">*</b>
                        </label>
                        <input
                          type="file"
                          name=""
                          id=""
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
                  Aún no se ha creado Objetivo General para esta Politica
                </div>
                <Modal show={showDos} onHide={handleCloseDos}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Objetivo General</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Descripción Objetivo <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="descripcionDocumentosAdopcion"
                          rows="5"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handleCloseDos}
                      >
                        Guardar
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setObjetivoGeneral(1);
                          handleCloseDos();
                        }}
                      >
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

                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Objetivos Especificos
                  </h2>
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
                          <th>Descripción del Objetivo</th>
                          <th className="text-center">Editar</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            Aumentar los niveles de interacción entre el
                            ciudadano y la Administración Distrital
                          </td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-success fa fa-pencil "></button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-danger fa fa-trash "></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Modal show={showTres} onHide={handleCloseTres}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Objetivo Especifico</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Descripción Objetivo <b className="text-danger">*</b>
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id="descripcionDocumentosAdopcion"
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

                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    Documentos Asociados
                  </h2>
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
                          <th>Nombre del Documento</th>
                          <th>Tipo Documento</th>
                          <th className="text-center">Descargar</th>
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            Politica Pública Distrital de Servicio a la
                            Ciudadania
                          </td>
                          <td>Documento CONPES D.C</td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-warning fa fa-download "></button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-danger fa fa-trash "></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Modal show={showCuatro} onHide={handleCloseCuatro}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Agregar Documento Asociados</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Tipo de documento <b className="text-danger">*</b>
                        </label>
                        <select name="" id="" className="form-select">
                          <option value="">Documento CONPES D.C</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Nombre del documento
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
                          for="exampleInputPassword1"
                          className="form-label "
                        >
                          Documento
                        </label>
                        <input
                          type="file"
                          name=""
                          id=""
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
                              <button className="btn m-2 p-2">
                                <i className="fa fa-close "></i> Omitir
                              </button>
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
                                <button className="btn btn-primary m-2 p-2">
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
                          <th className="text-center">Eliminar</th>
                        </tr>
                      </thead>

                      <tbody></tbody>
                    </table>
                  </div>
                </div>
                <Modal show={showCinco} onHide={handleCloseCinco}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Publicación de Política Pública</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Justificación <b className="text-danger">*</b>
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
                          for="exampleInputPassword1"
                          className="form-label "
                        >
                          Entrada en vigencia en versiones de la política{" "}
                          <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          name=""
                          id=""
                          className="form-control"
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handleCloseCinco}
                      >
                        Guardar
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleCloseCinco();
                          setPublicar(1);
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
