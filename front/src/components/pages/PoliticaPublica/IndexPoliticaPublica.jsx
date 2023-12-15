import React, { useState, useEffect } from "react";
import TablaPoliticaPublica from "./TablaPoliticaPublica";
import AgregarPoliticaPublica from "./AgregarPoliticaPublica";
import logo from "../../../assets/images/LogoSEGUIPOP.png";
import footerUno from "../../../assets/images/FooterUno.png";
import footerDos from "../../../assets/images/FooterDos.png";
const IndexPoliticaPublica = () => {
  const [controlPP, setControlPP] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              style={{ height: "7rem" }}
              className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            >
              <h2 className="d-flex">
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
                  / Politicas Publicas
                </a>{" "}
              </h2>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <img src={logo} alt="" className="img-fluid" width={200} />
                </li>
              </ul>
            </nav>
            <div className="container-fluid ">
              {(() => {
                //Desicion para controlar el contenido del div de interacciones
                if (controlPP == 0) {
                  return (
                    <TablaPoliticaPublica
                      controlPP={controlPP}
                      setControlPP={setControlPP}
                    ></TablaPoliticaPublica>
                  );
                } else {
                  if (controlPP == 1) {
                    return (
                      <AgregarPoliticaPublica
                        controlPP={controlPP}
                        setControlPP={setControlPP}
                      ></AgregarPoliticaPublica>
                    );
                  } else {
                    if (controlPP == 2) {
                      return "/ Entidad";
                    } else {
                      if (controlPP == 3) {
                        return "/ Documentos de Adopción";
                      } else {
                        if (controlPP == 4) {
                          return "/ Unidades de Medida";
                        }
                      }
                    }
                  }
                }
              })()}
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

export default IndexPoliticaPublica;
