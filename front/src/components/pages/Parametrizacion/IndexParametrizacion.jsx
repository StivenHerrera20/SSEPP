import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Sector from "./Sector";
import Entidad from "./Entidad";
import DocumentosAdopcion from "./DocumentosAdopcion";
import UnidadesMedida from "./UnidadesMedida";
import RangoSemaforo from "./RangoSemaforo";
import Enfoque from "./Enfoque";
import MetaODS from "./MetaODS";
import DocumentosAsociados from "./DocumentosAsociados";
import FuentesFinanciacion from "./FuentesFinanciacion";
import ObjetivoDesarrolloSostenible from "./ObjetivoDesarrolloSostenible";
import NivelTerritorializacion from "./NivelTerritorializacion";
import PlanDesarrollo from "./PlanDesarrollo";
import IndicadorPlanDesarrollo from "./IndicadorPlanDesarrollo";
import Parametros from "./Parametros";
import EnfoqueDos from "./EnfoqueDos";
import EnfoqueTres from "./EnfoqueTres";
import EnfoqueCuatro from "./EnfoqueCuatro";

const IndexParametrizacion = () => {
  const [control, setControl] = useState(0);

  useEffect(() => {}, []);
  return (
    <>
      <div id="wrapper">
        <nav
          class="navbar-nav bg-primary sidebar sidebar-dark"
          style={{ height: window.innerHeight - 200 }}
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center "
            href="/inicio"
          >
            <div className="sidebar-brand-icon rotate-n-15">logo</div>
            <div className="sidebar-brand-text mx-3">SSEPP</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <div
            style={{
              scrollbarWidth: "none",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 1 ? setControl(0) : setControl(1);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Sector</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 2 ? setControl(0) : setControl(2);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Entidad</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 3 ? setControl(0) : setControl(3);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Documentos de adopción</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 4 ? setControl(0) : setControl(4);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Unidades de Medida</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 5 ? setControl(0) : setControl(5);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Rango Semáforo</span>
              </a>
            </li>
            <li className="nav-item">
              <button
                class="nav-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={(e) => {
                  e.preventDefault();
                  control == 6 || control == 7 || control == 8 || control == 9
                    ? setControl(0)
                    : null;
                }}
              >
                <span>Enfoque</span>
              </button>
              <div
                class="collapse w-100 my-0 mx-0 text-center"
                id="collapseExample"
              >
                <a
                  className="nav-link w-100"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    control == 6 ? setControl(0) : setControl(6);
                  }}
                >
                  <i className="bi bi-dash "></i>
                  <span className="text-center">Nivel 1</span>
                </a>
                <a
                  className="nav-link w-100"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    control == 7 ? setControl(0) : setControl(7);
                  }}
                >
                  <i className="bi bi-dash "></i>
                  <span className="text-center">Nivel 2</span>
                </a>
                <a
                  className="nav-link w-100"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    control == 8 ? setControl(0) : setControl(8);
                  }}
                >
                  <i className="bi bi-dash "></i>
                  <span className="text-center">Nivel 3</span>
                </a>
                <a
                  className="nav-link w-100"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    control == 9 ? setControl(0) : setControl(9);
                  }}
                >
                  <i className="bi bi-dash "></i>
                  <span className="text-center">Nivel 4</span>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 10 ? setControl(0) : setControl(10);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Meta ODS</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 11 ? setControl(0) : setControl(11);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Documentos asociados</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 12 ? setControl(0) : setControl(12);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Fuentes de Financiación</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 13 ? setControl(0) : setControl(13);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Objetivo de Desarrollo Sostenible</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 14 ? setControl(0) : setControl(14);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Nivel de Territorialización</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 15 ? setControl(0) : setControl(15);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Plan de Desarrollo</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 16 ? setControl(0) : setControl(16);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Indicador Plan de Desarrollo</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  control == 17 ? setControl(0) : setControl(17);
                }}
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Paramaetros</span>
              </a>
            </li>
          </div>
        </nav>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <h5 className="d-flex">
                <a
                  href="/inicio"
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" }}
                >
                  Inicio
                </a>{" "}
                <a
                  href=""
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" }}
                >
                  / Parametrizacion{" "}
                  {(() => {
                    //Desicion para controlar el contenido del div de interacciones
                    if (control == 0) {
                      return "";
                    } else {
                      if (control == 1) {
                        return "/ Sector";
                      } else {
                        if (control == 2) {
                          return "/ Entidad";
                        } else {
                          if (control == 3) {
                            return "/ Documentos de Adopción";
                          } else {
                            if (control == 4) {
                              return "/ Unidades de Medida";
                            } else {
                              if (control == 5) {
                                return "/ Rango Semáforo";
                              } else {
                                if (control == 6) {
                                  return "/ Enfoque Nivel 1";
                                } else {
                                  if (control == 7) {
                                    return "/ Enfoque Nivel 2";
                                  } else {
                                    if (control == 8) {
                                      return "/ Enfoque Nivel 3";
                                    } else {
                                      if (control == 9) {
                                        return "/ Enfoque Nivel 4";
                                      } else {
                                        if (control == 10) {
                                          return "/ Meta ODS";
                                        } else {
                                          if (control == 11) {
                                            return "/ Documentos Asociados";
                                          } else {
                                            if (control == 12) {
                                              return "/ Fuentes Financiación";
                                            } else {
                                              if (control == 13) {
                                                return "/ Objetivo de Desarrollo Sostenible";
                                              } else {
                                                if (control == 14) {
                                                  return "/ Nivel de Territorialización";
                                                } else {
                                                  if (control == 15) {
                                                    return "/ Plan de Desarrollo";
                                                  } else {
                                                    if (control == 16) {
                                                      return "/ Indicador Plan de Desarrollo";
                                                    } else {
                                                      if (control == 17) {
                                                        return "/ Parametros";
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })()}
                </a>{" "}
              </h5>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a href="#" className="btn btn-icon-split btn-primary">
                    <span className="icon text-white-50">
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="text">Iniciar Sesion</span>
                  </a>
                  {/* <!-- <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small"
                    >Douglas McGee</span
                  >
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>
                 
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i
                      className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    ></i>
                    Logout
                  </a>
                </div> --> */}
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              {
                //Control de seleccion
              }
              {(() => {
                //Desicion para controlar el contenido del div de interacciones
                if (control == 0) {
                  return <h1>Seleccione una opcion</h1>;
                } else {
                  if (control == 1) {
                    return <Sector></Sector>;
                  } else {
                    if (control == 2) {
                      return <Entidad></Entidad>;
                    } else {
                      if (control == 3) {
                        return <DocumentosAdopcion></DocumentosAdopcion>;
                      } else {
                        if (control == 4) {
                          return <UnidadesMedida></UnidadesMedida>;
                        } else {
                          if (control == 5) {
                            return <RangoSemaforo></RangoSemaforo>;
                          } else {
                            if (control == 6) {
                              return <Enfoque></Enfoque>;
                            } else {
                              if (control == 7) {
                                return <EnfoqueDos></EnfoqueDos>;
                              } else {
                                if (control == 8) {
                                  return <EnfoqueTres></EnfoqueTres>;
                                } else {
                                  if (control == 9) {
                                    return <EnfoqueCuatro></EnfoqueCuatro>;
                                  } else {
                                    if (control == 10) {
                                      return <MetaODS></MetaODS>;
                                    } else {
                                      if (control == 11) {
                                        return (
                                          <DocumentosAsociados></DocumentosAsociados>
                                        );
                                      } else {
                                        if (control == 12) {
                                          return (
                                            <FuentesFinanciacion></FuentesFinanciacion>
                                          );
                                        } else {
                                          if (control == 13) {
                                            return (
                                              <ObjetivoDesarrolloSostenible></ObjetivoDesarrolloSostenible>
                                            );
                                          } else {
                                            if (control == 14) {
                                              return (
                                                <NivelTerritorializacion></NivelTerritorializacion>
                                              );
                                            } else {
                                              if (control == 15) {
                                                return (
                                                  <PlanDesarrollo></PlanDesarrollo>
                                                );
                                              } else {
                                                if (control == 16) {
                                                  return (
                                                    <IndicadorPlanDesarrollo></IndicadorPlanDesarrollo>
                                                  );
                                                } else {
                                                  if (control == 17) {
                                                    return (
                                                      <Parametros></Parametros>
                                                    );
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })()}
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default IndexParametrizacion;
