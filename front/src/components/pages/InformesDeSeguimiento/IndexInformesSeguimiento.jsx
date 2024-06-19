import React, { useState, useEffect } from "react";
import { Outlet, NavLink, redirect } from "react-router-dom";
import logo from "../../../assets/images/LogoSEGUIPOP.png";
import footerUno from "../../../assets/images/FooterUno.png";
import footerDos from "../../../assets/images/FooterDos.png";

const IndexInformesSeguimiento = () => {
  const [control, setControl] = useState(1);

  useEffect(() => {}, []);
  return (
    <>
      <div id="wrapper">
        <nav
          className="navbar-nav bg-primary sidebar sidebar-dark"
          /* style={{ height: window.innerHeight - 200 }} */
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center "
            href="/inicio"
            style={{ height: "7rem" }}
          >
            <div className="sidebar-brand-text mx-3">
              INFORMES DE SEGUIMIENTO
            </div>
          </a>

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
              <NavLink
                to="informeejecutivo"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Informe Ejecutivo</span>
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(2);
              }}
            >
              <NavLink
                to="informeanalitico"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Informe Analitico</span>
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
                to="informecostos"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Informe de costos</span>
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
                to="seguimientocualitativo"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Seguimiento Cualitativo</span>
              </NavLink>
            </li>
            {/* <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(5);
              }}
            >
              <NavLink
                to="hojadevidadelindicador"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Hoja de Vida del Indicador</span>
              </NavLink>
            </li> */}
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(6);
              }}
            >
              <NavLink
                to="consultaproductos"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Consulta productos</span>
              </NavLink>
            </li>
            {/* <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setControl(7);
              }}
            >
              <NavLink
                to="plandeaccionyavance"
                className="nav-link"
                aria-current="page"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Plan de acción y avance</span>
              </NavLink>
            </li> */}
          </div>
        </nav>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              style={{ height: "7rem" }}
              className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            >
              <h3 className="d-flex">
                <a
                  href="/inicio"
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" }}
                >
                  Inicio
                </a>{" "}
                <a
                  href="/inicio/informesdeseguimiento/plandeaccionyavance"
                  className="text-secondary mx-0 px-1"
                  style={{ textDecoration: "none" }}
                >
                  / Informe de Seguimiento{" "}
                  {(() => {
                    //Desicion para controlar el contenido del div de interacciones

                    if (control == 1) {
                      return "/ Informe Ejecutivo";
                    } else {
                      if (control == 2) {
                        return "/ Informe Analitico";
                      } else {
                        if (control == 3) {
                          return "/ Indorme de Costos";
                        } else {
                          if (control == 4) {
                            return "/ Seguimiento Cualitativo";
                          } else {
                            if (control == 5) {
                              return "/ Hoja de Vida del Indicador";
                            } else {
                              if (control == 6) {
                                return "/ Consulta Productos";
                              } else {
                                if (control == 7) {
                                  return "/ Plan de acción y avance";
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })()}
                </a>{" "}
              </h3>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <img src={logo} alt="" className="img-fluid" width={200} />
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
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

export default IndexInformesSeguimiento;
