import React from "react";
import { useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Global";

/**
 * Service provider para validar credenciales de local stroe vs credenciales de la api
 * crea un objeto o varibale de contexto para usar en toda la aplicacion
 * genera un estado = autenticado
 * retrun AuthContext.Provider = proveedor de servicio de autenticacion
 */

//crea el contexto(supervariable,variable de session como las de PHP)
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [Autenticado, setAutenticado] = useState({});
  useEffect(() => {
    autenticarUsuario();
  }, []);

  /**
   * Compara que el token sea valido
   * @returns objeto serializado de la comparacion de localstorage vs api
   */
  const autenticarUsuario = async () => {
    const user = localStorage.getItem("user");

    
    // si existen los transformamos en objeto javascript para manipular el ID del usuario
    const userObj = JSON.parse(user);
    // Comprobacion del token del localstorage vs el del Backend

    const request = await fetch(Global.url + "/usuario/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });


    const data = await request.json();
    const usuario = data.find(user => user.correo === userObj.correo);

    if (usuario) {
        setAutenticado(usuario)
    }
    
  };

  //=======================================================================================================
  return (
    <AuthContext.Provider value={{ Autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
