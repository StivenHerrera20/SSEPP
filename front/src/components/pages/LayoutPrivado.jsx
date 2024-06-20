import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  return (
    <>
    {console.log(Autenticado)}
        {userObj.correo ? <Outlet /> : <Navigate to="/" />}
      
    </>
  );
};

export default LayoutPrivado;
