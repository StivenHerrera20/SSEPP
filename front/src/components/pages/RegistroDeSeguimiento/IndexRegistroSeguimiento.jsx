import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../../assets/images/LogoSEGUIPOP.png";
import footerUno from "../../../assets/images/FooterUno.png";
import footerDos from "../../../assets/images/FooterDos.png";
const IndexRegistroSeguimiento = () => {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              style={{ height: "7rem" }}
              className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            >
              <h3 className="d-flex">
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
                  / Registro de Seguimiento
                </a>{" "}
              </h3>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <img src={logo} alt="" className="img-fluid" width={200} />
                </li>
              </ul>
            </nav>
            <div className="container-fluid ">
              <Outlet></Outlet>
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

export default IndexRegistroSeguimiento;
