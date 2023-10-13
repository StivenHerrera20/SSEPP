import React, { useState, useEffect } from "react";

const Login = () => {
  return (
    <>
      <section className="vh-100 " style={{ backgroundColor: "#4E73DF" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1.5rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Inicio Sesion</h3>

                  <form action="">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Correo Electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX-2">
                        Contraseña
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
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
