import React, { useState, useEffect } from "react";
import megafono from "../../../assets/images/megafono.png";
const IndexPoliticaPublica = () => {
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
                  / Politicas Publicas
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
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex">
                  <button className="btn btn-primary fa fa-plus"></button>

                  <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
                    {/* <img src={megafono} alt="" style={{ height: "3rem" }} />{" "} */}
                    Politicas Públicas
                  </h2>
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
                          <th>Imagen</th>
                          <th>Nemotécnico</th>
                          <th>Nombre</th>
                          <th>Sector Líder</th>
                          <th>Entidad Líder</th>
                          <th>Estado</th>
                          <th className="text-center">Editar</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td></td>
                          <td>13</td>
                          <td>
                            Politica pública Distrital de Educación Ambiental
                          </td>
                          <td>Sector Ambiente</td>
                          <td>Secretaria Distrital de Ambiente</td>
                          <td>Aprobada</td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-success fa fa-pencil "></button>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>10</td>
                          <td>
                            Politica pública de Cultura Ciudadana 2019-2038
                          </td>
                          <td>Sector Cultura Recreación y Deporte</td>
                          <td>Secretaria Distrital de Cultura</td>
                          <td>Aprobada</td>
                          <td className="text-center">
                            {" "}
                            <button className="btn btn-success fa fa-pencil "></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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

export default IndexPoliticaPublica;
