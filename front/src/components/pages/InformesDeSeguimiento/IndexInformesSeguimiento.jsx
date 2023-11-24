import React, { useState, useEffect } from "react";
import { Outlet, NavLink, redirect } from "react-router-dom";

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
            <li
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
            </li>
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
            <li
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
                  href="/inicio/parametrizacion"
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
              <Outlet />
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

export default IndexInformesSeguimiento;
