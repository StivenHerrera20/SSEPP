import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogoSEGUIPOP.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="row">
        <h1 className="text-primary text-center">
          Sistema Seguimiento de Políticas Públicas
        </h1>
      </div>
      <section className="vh-100 " style={{ backgroundColor: "#4E73DF" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1.5rem" }}
              >
                <div className="card-body p-5 text-center">
                  <img src={logo} alt="" width={150} />
                  <h3 className="mb-5">Inicio Sesion</h3>

                  <form action="">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="emailUser"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Correo Electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="passUser"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX-2">
                        Contraseña
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        let passUser = document.querySelector("#passUser");
                        let emailUser = document.querySelector("#emailUser");
                        if (
                          emailUser.value.length > 0 &&
                          passUser.value.length > 0
                        ) {
                          fetch("http://127.0.0.1:3900/api/usuario/login")
                            .then((response) => {
                              return response.json();
                            })
                            .then((doc) => {
                              if (
                                doc[0].correo == emailUser.value &&
                                doc[0].pass == passUser.value
                              ) {
                                navigate("/inicio");
                              } else {
                                Swal.fire({
                                  icon: "error",
                                  title: "Error!",
                                  text: "Correo o contraseña incorrectos",
                                });
                              }
                            });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "Ingresa todos los datos",
                          });
                        }
                      }}
                    >
                      Iniciar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
