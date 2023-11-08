import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
const CrearFichaTecnica = ({ controlBI, setControlBI }) => {
  const [enable, setEnable] = useState("");
  const [publicar, setPublicar] = useState(0);
  useEffect(() => {}, []);

  let items = [
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
  ];
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body d-flex">
          <button
            className="btn btn-primary "
            onClick={(e) => {
              e.preventDefault();
              setControlBI(0);
            }}
          >
            Indicadores
          </button>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            {" "}
            Crear Ficha Técnica
          </h2>
        </div>
        <hr className="sidebar-divider my-0 " />

        <div className="row mt-2">
          <div className="col">
            <div className="card-body">
              <div className="card card-header py-0 px-0">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="informacionGeneral-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#informacionGeneral"
                      type="button"
                      role="tab"
                      aria-controls="informacionGeneral"
                      aria-selected="true"
                    >
                      Información General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="medicion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#medicion"
                      type="button"
                      role="tab"
                      aria-controls="medicion"
                      aria-selected="false"
                    >
                      Medición
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
                      Metas
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="responsable-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#responsable"
                      type="button"
                      role="tab"
                      aria-controls="responsable"
                      aria-selected="false"
                    >
                      Responsable
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="aprobacion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#aprobacion"
                      type="button"
                      role="tab"
                      aria-controls="aprobacion"
                      aria-selected="false"
                    >
                      Aprobación
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card card-body px-0 py-0">
                <div className="tab-content  p-2" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="informacionGeneral"
                    role="tabpanel"
                    aria-labelledby="informacionGeneral-tab"
                  >
                    <div className="row">
                      <div className="col-8">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Nombre del Indicador
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            disabled
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea2"
                            className="form-label"
                          >
                            Politica pública asociada
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea2"
                            rows="2"
                            style={{ resize: "none" }}
                            disabled
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Objetivo especifico asociado
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea3"
                            rows="2"
                            disabled
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Resultado
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea3"
                            rows="2"
                            disabled
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea3"
                            className="form-label"
                          >
                            Producto
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea3"
                            rows="2"
                            disabled
                            style={{ resize: "none" }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Sector Responsable
                          </label>
                          <select
                            disabled
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="1">...</option>
                            <option value="2">...</option>
                            <option value="3">...</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Entidad Responsable
                          </label>
                          <select
                            disabled
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option value="1">...</option>
                            <option value="2">...</option>
                            <option value="3">...</option>
                          </select>
                        </div>
                        <div className="mb-1">
                          <h6>Plan Distrital de Desarrollo - PDD</h6>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-4">
                              <label htmlFor="" className="form-label">
                                Plan de Desarrollo
                              </label>
                              <select
                                disabled
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">...</option>
                                <option value="2">...</option>
                                <option value="3">...</option>
                              </select>
                            </div>
                            <div className="col-4">
                              <label htmlFor="" className="form-label">
                                Indicador PDD
                              </label>
                              <select
                                disabled
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">...</option>
                                <option value="2">...</option>
                                <option value="3">...</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <form action="">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlTextareaDesProd"
                              className="form-label"
                            >
                              Descripcion de Producto
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextareaDesProd"
                              rows="2"
                              style={{ resize: "none" }}
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleFormControlTextareaAspectCons"
                              className="form-label"
                            >
                              Aspectos a considerar para el desarrollo del
                              producto
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextareaAspectCons"
                              rows="2"
                              style={{ resize: "none" }}
                            ></textarea>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              type="sumit"
                              className="btn btn-primary m-1"
                            >
                              Guardar
                            </button>
                            <button className="btn btn-secondary m-1">
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="medicion"
                    role="tabpanel"
                    aria-labelledby="medicion-tab"
                  >
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Fórmula de cálculo
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        disabled
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Unidad de medida
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">...</option>
                          <option value="2">...</option>
                          <option value="3">...</option>
                        </select>
                      </div>
                      <div className="col-4 d-flex">
                        <div className="form-check m-auto">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id=""
                          />
                          <label className="form-check-label" htmlFor="">
                            Otra medida
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        {" "}
                        <label htmlFor="" className="form-label">
                          ¿Cúal?
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Peridicidad de medición
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1">...</option>
                        <option value="2">...</option>
                        <option value="3">...</option>
                      </select>
                    </div>
                    <h6 className="mb-2">Linea Base</h6>
                    <div className="row mb-3">
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Valor
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                      <div className="col-4">
                        {" "}
                        <label htmlFor="" className="form-label">
                          Fecha de la línea base
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                      <div className="col-4">
                        {" "}
                        <label htmlFor="" className="form-label">
                          Fuente de la línea base
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>
                    <h6 className="mb-2 ">Tiempo de ejecución</h6>
                    <div className="row mb-3">
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Inicio
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Fin
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Territorialización del indicador
                        </label>
                        <select
                          className="form-select w-25"
                          aria-label="Default select example"
                        >
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </select>
                      </div>
                      <div className="col-4">
                        <label htmlFor="" className="form-label">
                          Nivel
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">...</option>
                          <option value="2">...</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label
                          htmlFor="exampleFormControlTextareaMetod"
                          className="form-label"
                        >
                          Metodologia de medición
                        </label>
                        <textarea
                          className="form-control "
                          id="exampleFormControlTextareaMetod"
                          rows="2"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label
                          htmlFor="exampleFormControlTextarea3"
                          className="form-label"
                        >
                          Fuentes de información
                        </label>
                        <textarea
                          className="form-control "
                          id="exampleFormControlTextarea3"
                          rows="2"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label
                          htmlFor="exampleFormControlTextarea3"
                          className="form-label"
                        >
                          Dias de rezago
                        </label>
                        <input type="number" className="form-control w-25" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label
                          htmlFor="exampleFormControlTextarea3"
                          className="form-label"
                        >
                          Serie disponible
                        </label>
                        <textarea
                          className="form-control "
                          id="exampleFormControlTextarea3"
                          rows="2"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary m-1">Guardar</button>
                        <button className="btn btn-secondary m-1">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="meta"
                    role="tabpanel"
                    aria-labelledby="meta-tab"
                  >
                    <div className="row mt-3 mb-3">
                      <div className="col-9 w-100">
                        <div style={{ height: "950px" }}>
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
                      </div>
                      <div className="col-3">
                        <h1>80</h1>
                        <h5>Meta Total del Producto</h5>
                        <h5>Tipo de Anualización: CRECIENTE</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show "
                    id="responsable"
                    role="tabpanel"
                    aria-labelledby="responsable-tab"
                  >
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Entidad
                        </label>
                        <select
                          disabled
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">...</option>
                          <option value="2">...</option>
                          <option value="3">...</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Nombre Funcionario
                        </label>
                        <select
                          disabled
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">...</option>
                          <option value="2">...</option>
                          <option value="3">...</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Cargo
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Dependencia
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Roles
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Correo electronico
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="" className="form-label">
                          Telefono
                        </label>
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button type="sumit" className="btn btn-primary m-1">
                        Guardar
                      </button>
                      <button className="btn btn-secondary m-1">
                        Cancelar
                      </button>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="aprobacion"
                    role="tabpanel"
                    aria-labelledby="aprobacion-tab"
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
                                    <h6>
                                      El indicador esta listo para publicarse.
                                    </h6>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col d-flex justify-content-center">
                                    <button
                                      className="btn btn-primary  m-2 p-2 "
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalId"
                                    >
                                      <i className="fa fa-save"></i> Publicar
                                    </button>
                                  </div>
                                </div>

                                <div
                                  class="modal fade"
                                  id="modalId"
                                  tabindex="-1"
                                  role="dialog"
                                  aria-labelledby="modalTitleId"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5
                                          class="modal-title"
                                          id="modalTitleId"
                                        >
                                          Publicación del Indicador
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <div className="mb-3">
                                          <label
                                            for="exampleInputPassword1"
                                            className="form-label"
                                          >
                                            Justificación{" "}
                                            <b className="text-danger">*</b>
                                          </label>
                                          <textarea
                                            className="form-control"
                                            name=""
                                            id="descripcionDocumentosAdopcion"
                                            rows="5"
                                            style={{ resize: "none" }}
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                        >
                                          Guardar
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setPublicar(1);
                                          }}
                                        >
                                          Cancelar
                                        </button>
                                      </div>
                                    </div>
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
                                        El indicador esta publicado, pendiente
                                        por aprobación.
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col d-flex justify-content-center">
                                      <button
                                        className="btn btn-primary m-2 p-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#confirmarPubli"
                                      >
                                        <i className="fa fa-save "></i> Aprobar
                                      </button>
                                    </div>
                                  </div>

                                  <div
                                    class="modal fade"
                                    id="confirmarPubli"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="modalTitleId"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5
                                            class="modal-title"
                                            id="modalTitleId"
                                          >
                                            Aprobación del Indicador
                                          </h5>
                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div class="modal-body">
                                          <div className="mb-3">
                                            <label
                                              for="exampleInputPassword1"
                                              className="form-label"
                                            >
                                              Estado{" "}
                                              <b className="text-danger">*</b>
                                            </label>
                                            <select
                                              className="form-select"
                                              aria-label="Default select example"
                                            >
                                              <option value="1">
                                                Aprobada
                                              </option>
                                              <option value="2">
                                                Rechazada
                                              </option>
                                            </select>
                                          </div>
                                          <div className="mb-3">
                                            <label
                                              for="exampleInputPassword1"
                                              className="form-label"
                                            >
                                              Justificación{" "}
                                              <b className="text-danger">*</b>
                                            </label>
                                            <textarea
                                              className="form-control"
                                              name=""
                                              id="descripcionDocumentosAdopcion"
                                              rows="5"
                                              style={{ resize: "none" }}
                                            ></textarea>
                                          </div>
                                        </div>
                                        <div class="modal-footer">
                                          <button
                                            type="button"
                                            class="btn btn-primary"
                                          >
                                            Guardar
                                          </button>
                                          <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setPublicar(1);
                                            }}
                                          >
                                            Cancelar
                                          </button>
                                        </div>
                                      </div>
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
                          Aprobación del indicador
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
                                <th>Fecha</th>
                                <th>Usuario</th>
                                <th>Estado Validacion</th>
                                <th>Observaciones</th>
                              </tr>
                            </thead>

                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearFichaTecnica;
