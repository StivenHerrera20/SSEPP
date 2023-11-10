import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
const IndexRegistroSeguimiento = () => {
  return (
    <>
      <div id="wrapper">
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
                  / Registro de Seguimiento
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
                </li>
              </ul>
            </nav>
            <div className="container-fluid ">
              <Outlet></Outlet>
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

export default IndexRegistroSeguimiento;
