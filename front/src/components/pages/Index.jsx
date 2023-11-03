import React, { useState, useEffect } from "react";
import graph from "../../assets/images/graph.png";
import indicadores from "../../assets/images/indicadores.png";
import informes from "../../assets/images/informes.png";
import megafono from "../../assets/images/megafono.png";
import portaPapeles from "../../assets/images/portaPapeles.png";
import seguimiento from "../../assets/images/seguimiento.png";

const Index = () => {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a href="#" className="btn btn-primary btn-icon-split">
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
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="text-center">
                    Sistema de Seguimiento y Evaluación de Políticas Públicas
                  </h2>
                </div>
              </div>
              <div className="row">
                <a
                  href="inicio/parametrizacion"
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>
                <a
                  href="inicio/politicasPublicas"
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>
                <a
                  href="/inicio/plandeaccion"
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>

                <a
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>

                <a
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>

                <a
                  className="col-xl-4 col-md-6 mb-4 optionsCard"
                  style={{ textDecoration: "none" }}
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
                </a>
              </div>
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

export default Index;
