import React, { useState, useEffect } from "react";
import { Outlet, NavLink, redirect } from "react-router-dom";
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
import logo from "../../../assets/images/LogoSEGUIPOP.png";
import footerUno from "../../../assets/images/FooterUno.png";
import footerDos from "../../../assets/images/FooterDos.png";
import { Container } from "react-bootstrap";

const IndexParametrizacion = () => {
  const [control, setControl] = useState(1);

  useEffect(() => {}, []);
  return (
    <>
      <div id="wrapper">
        <nav
          className="navbar-nav bg-primary sidebar sidebar-dark"
          /* style={{ height: window.innerHeight + 226 }} */
          id="accordionSidebar"
        >
          <NavLink
            className="sidebar-brand d-flex align-items-center justify-content-center "
            to="/inicio"
            style={{ height: "7rem" }}
          >
            <div className="text-monospace mx-3">Parametrizacion</div>
          </NavLink>

          <hr className="sidebar-divider my-0" />

          <div
            style={{
              scrollbarWidth: "none",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(1);
              }}
            >
              <NavLink to="sector" className="nav-link" aria-current="page">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Sector</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(2);
              }}
            >
              <NavLink to="entidad" className="nav-link" aria-current="page">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Entidad</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(3);
              }}
            >
              <NavLink
                to="documentosDeAdopcion"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Documentos de adopción</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(4);
              }}
            >
              <NavLink
                to="unidadesDeMedida"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Unidades de Medida</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(5);
              }}
            >
              <NavLink
                to="rangoSemaforo"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Rango Semáforo</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>Enfoque</span>
              </button>
              <div
                className="collapse w-100 my-0 mx-0 text-center"
                id="collapseExample"
              >
                <li
                  className="nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    setControl(6);
                  }}
                >
                  <NavLink
                    to="enfoqueNivelUno"
                    className="nav-link w-100"
                    aria-current="page"
                  >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Nivel 1</span>
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    setControl(7);
                  }}
                >
                  <NavLink
                    to="enfoqueNivelDos"
                    className="nav-link w-100"
                    aria-current="page"
                  >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Nivel 2</span>
                  </NavLink>
                </li>

                <li
                  className="nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    setControl(8);
                  }}
                >
                  <NavLink
                    to="enfoqueNivelTres"
                    className="nav-link w-100"
                    aria-current="page"
                  >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Nivel 3</span>
                  </NavLink>
                </li>

                <li
                  className="nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    setControl(9);
                  }}
                >
                  {" "}
                  <NavLink
                    to="enfoqueNivelCuatro"
                    className="nav-link w-100"
                    aria-current="page"
                  >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Nivel 4</span>
                  </NavLink>
                </li>
              </div>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(10);
              }}
            >
              <NavLink to="metaODS" className="nav-link" aria-current="page">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Meta ODS</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(11);
              }}
            >
              <NavLink
                to="documentosAsociados"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Documentos asociados</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(12);
              }}
            >
              <NavLink
                to="fuentesDeFinanciacion"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Fuentes de Financiación</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(13);
              }}
            >
              <NavLink
                to="desarrolloSostenible"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Objetivo de Desarrollo Sostenible</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(14);
              }}
            >
              <NavLink
                to="nivelTerritorializacion"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Nivel de Territorialización</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(15);
              }}
            >
              <NavLink
                to="planDesarrollo"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Plan de Desarrollo</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(16);
              }}
            >
              <NavLink
                to="indicadorPlanDesarrollo"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Indicador Plan de Desarrollo</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(17);
              }}
            >
              <NavLink to="parametros" className="nav-link" aria-current="page">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Parametros</span>
              </NavLink>
            </li>
          </div>
        </nav>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
              style={{ height: "7rem" }}
            >
              <h2 className="d-flex">
                <NavLink
                  to="/inicio"
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" }}
                >
                  Inicio
                </NavLink>{" "}
                <a
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" , cursor: "pointer" }}
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
              </h2>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <img src={logo} alt="" className="img-fluid" width={200} />
                </li>
              </ul>
            </nav>

            <div className="container-fluid ">
              {
                //Control de seleccion
              }
              {/* {(() => {
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
              })()} */}
              <Outlet />
            </div>
          </div>
          <footer className="sticky-footer bg-white py-0">
            <div className="container my-2 py-0">
              <div className="copyright text-center my-0 d-flex justify-content-center">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <img
                    src={footerUno}
                    alt=""
                    className="img-fluid"
                    width={60}
                  />
                </div>
                <div className="col-4 text-start ">
                  <p className="py-0 my-2">www.cartago.gov.co</p>
                  <p className="py-0 my-2">
                    CAM CENTRO DE ADMINISTRACIÓN MUNICIPAL
                  </p>
                  <p className="py-0 my-2">
                    Calle 8 No.6-52, Teléfono: (2)- 2114101
                  </p>
                  <p className="py-0 my-2">Código Postal: 762021</p>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <img
                    src={footerDos}
                    alt=""
                    className="img-fluid"
                    width={60}
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default IndexParametrizacion;
