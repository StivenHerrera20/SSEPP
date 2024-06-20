import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import graph from "../../assets/images/graph.png";
import indicadores from "../../assets/images/indicadores.png";
import informes from "../../assets/images/informes.png";
import megafono from "../../assets/images/megafono.png";
import portaPapeles from "../../assets/images/portaPapeles.png";
import seguimiento from "../../assets/images/seguimiento.png";
import logo from "../../assets/images/LogoSEGUIPOP.png";
import footerUno from "../../assets/images/FooterUno.png";
import footerDos from "../../assets/images/FooterDos.png";

const Index = () => {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content pb-5">
            <nav
              style={{ height: "7rem" }}
              className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <img src={logo} alt="" className="img-fluid" width={200} />
                </li>
              </ul>
            </nav>
            <div className="container-fluid">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="text-center">
                    Sistema de Seguimiento y Evaluación de Políticas Públicas
                  </h2>
                </div>
              </div>
              <div className="row">
                <NavLink to="parametrizacion"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                >
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          <img src={graph} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Parametrización
                    </h3>
                  </div>
                  </NavLink>
                <NavLink to="politicasPublicas"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                                  >
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          {/* <!-- <i className="fas fa-chart-area fa-5x text-gray-300"></i> --> */}
                          <img src={megafono} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Politica pública
                    </h3>
                  </div>
                </NavLink>
                <NavLink to="plandeaccion"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                                  >
                  <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          <img src={portaPapeles} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Plan de acción
                    </h3>
                  </div>
                </NavLink>
                <NavLink to="bateriadeindicadores"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                                  >
                  <div className="card border-left-dark shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          {/* <!-- <i className="fas fa-chart-area fa-5x text-gray-300"></i> --> */}
                          <img src={indicadores} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Bateria de indicadores
                    </h3>
                  </div>
                </NavLink>
                <NavLink to="registrodeseguimiento"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                                  >
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          {/* <!-- <i className="fas fa-chart-area fa-5x text-gray-300"></i> --> */}
                          <img src={seguimiento} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Registro de seguimiento
                    </h3>
                  </div>
                </NavLink>

                <NavLink to="informesdeseguimiento"
                  className="col-xl-4 col-md-6 mb-4 optionsCard "
                  style={{textDecoration: "none"}}
                                  >
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto text-center m-auto">
                          {/* <i className="fas fa-chart-area fa-5x text-gray-300"></i> */}
                          <img src={informes} alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-secondary">
                      Informes de seguimientos
                    </h3>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <footer className="sticky-footer bg-white py-0 ">
            <div className="container my-2 py-0">
              <div className="copyright text-center my-0 d-flex justify-content-center align-items-center">
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

export default Index;
