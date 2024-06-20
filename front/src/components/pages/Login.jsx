import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogoSEGUIPOP.png";
import UseAuth from "../../helpers/UseAuth";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";


const Login = () => {
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  const navigate = useNavigate();
  const { setAutenticado } = UseAuth();

  const loginUsuario = async (e) => {
    e.preventDefault();
    let usuarioLogin = form;
    //guardar en la api
    const request = await fetch(Global.url + "/usuario/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();

    console.log(usuarioLogin)
    console.log(data)

    const usuario = data.find(user => user.correo === form.emailUser);

    if (usuario) {
      if (usuario.pass === form.passUser) {
        console.log('Usuario autenticado correctamente');
      localStorage.setItem("user", JSON.stringify(usuario));

      setGuardado("Guardado");
      setAutenticado(usuario);
      setTimeout(() => {
        navigate("/inicio");
      }, 2000);
        // Aquí puedes realizar alguna acción adicional, como redireccionar a otra página, guardar en el estado global, etc.
    } else {
        console.log('Contraseña incorrecta');
    }
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Correo o contraseña incorrectos",
      });
    }
  };

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

                  <form onSubmit={loginUsuario}>
                    <div className="form-outline mb-4">
                      <input
                      onChange={cambiar}
                        type="email"
                        id="emailUser"
                        name="emailUser"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Correo Electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                      onChange={cambiar}
                        type="password"
                        id="passUser"
                        name="passUser"
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
                  {guardado == "Guardado" ? (
              <div className="alert alert-success mt-3 p-2 alert-dismissible fade show" role="alert">
                <strong>Bienvenido {form.correo}</strong> </div>
            ) : (
              ""
            )}
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
