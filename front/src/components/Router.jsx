import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import IndexParametrizacion from "./pages/Parametrizacion/IndexParametrizacion";
import "../assets/css/sb-admin-2.css";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/parametrizacion" element={<IndexParametrizacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
