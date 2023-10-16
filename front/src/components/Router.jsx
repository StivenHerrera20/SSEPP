import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import "../assets/css/sb-admin-2.css";
import IndexParametrizacion from "./pages/Parametrizacion/IndexParametrizacion";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/parametrizacion" element={<IndexParametrizacion />} />
          <Route index element={<Login />} />
          <Route path="/inicio" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
