import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import "../assets/css/sb-admin-2.css";
import Navbar from "./pages/Parametrizacion/Navbar";
import OpcionesNavegacion from "./pages/Parametrizacion/OpcionesNavegacion";
import Sector from "./pages/Parametrizacion/Sector";
import IndexParametrizacion from "./pages/Parametrizacion/IndexParametrizacion";
import Entidad from "./pages/Parametrizacion/Entidad";
import DocumentosAdopcion from "./pages/Parametrizacion/DocumentosAdopcion";
import UnidadesMedida from "./pages/Parametrizacion/UnidadesMedida";
import RangoSemaforo from "./pages/Parametrizacion/RangoSemaforo";
import MetaODS from "./pages/Parametrizacion/MetaODS";
import DocumentosAsociados from "./pages/Parametrizacion/DocumentosAsociados";
import FuentesFinanciacion from "./pages/Parametrizacion/FuentesFinanciacion";
import ObjetivoDesarrolloSostenible from "./pages/Parametrizacion/ObjetivoDesarrolloSostenible";
import NivelTerritorializacion from "./pages/Parametrizacion/NivelTerritorializacion";
import PlanDesarrollo from "./pages/Parametrizacion/PlanDesarrollo";
import IndicadorPlanDesarrollo from "./pages/Parametrizacion/IndicadorPlanDesarrollo";
import Parametros from "./pages/Parametrizacion/Parametros";
import IndexPoliticaPublica from "./pages/PoliticaPublica/IndexPoliticaPublica";
import IndexPlanAccion from "./pages/PlanDeAccion/IndexPlanAccion";
import IndexBateriaDeIndicadores from "./pages/BateriaDeIndicadores/IndexBateriaDeIndicadores";
import Enfoque from "./pages/Parametrizacion/Enfoque";
import EnfoqueDos from "./pages/Parametrizacion/EnfoqueDos";
import EnfoqueTres from "./pages/Parametrizacion/EnfoqueTres";
import EnfoqueCuatro from "./pages/Parametrizacion/EnfoqueCuatro";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}

          <Route index element={<Login />} />
          <Route path="/inicio" element={<Index />} />
          <Route
            path="/inicio/parametrizacion/"
            element={<IndexParametrizacion />}
          >
            <Route path="sector" element={<Sector></Sector>} />
            <Route path="Entidad" element={<Entidad></Entidad>} />
            <Route
              path="documentosDeAdopcion"
              element={<DocumentosAdopcion></DocumentosAdopcion>}
            />
            <Route
              path="unidadesDeMedida"
              element={<UnidadesMedida></UnidadesMedida>}
            />
            <Route path="enfoqueNivelUno" element={<Enfoque></Enfoque>} />
            <Route path="enfoqueNivelDos" element={<EnfoqueDos></EnfoqueDos>} />
            <Route
              path="enfoqueNivelTres"
              element={<EnfoqueTres></EnfoqueTres>}
            />
            <Route
              path="enfoqueNivelCuatro"
              element={<EnfoqueCuatro></EnfoqueCuatro>}
            />
            <Route
              path="rangoSemaforo"
              element={<RangoSemaforo></RangoSemaforo>}
            />
            <Route path="metaODS" element={<MetaODS></MetaODS>} />
            <Route
              path="documentosAsociados"
              element={<DocumentosAsociados></DocumentosAsociados>}
            />
            <Route
              path="fuentesDeFinanciacion"
              element={<FuentesFinanciacion></FuentesFinanciacion>}
            />
            <Route
              path="desarrolloSostenible"
              element={
                <ObjetivoDesarrolloSostenible></ObjetivoDesarrolloSostenible>
              }
            />
            <Route
              path="nivelTerritorializacion"
              element={<NivelTerritorializacion></NivelTerritorializacion>}
            />
            <Route
              path="planDesarrollo"
              element={<PlanDesarrollo></PlanDesarrollo>}
            />
            <Route
              path="indicadorPlanDesarrollo"
              element={<IndicadorPlanDesarrollo></IndicadorPlanDesarrollo>}
            />
            <Route path="parametros" element={<Parametros></Parametros>} />
          </Route>

          <Route path="politicasPublicas" element={<IndexPoliticaPublica />} />
          <Route path="plandeaccion" element={<IndexPlanAccion />} />
          <Route
            path="bateriadeindicadores"
            element={<IndexBateriaDeIndicadores />}
          />
        </Routes>

        {/* Esta es la forma de prueba (Que pinte la url de cada componente) */}
        {/* <div id="wrapper">
          <OpcionesNavegacion></OpcionesNavegacion>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar></Navbar>
              <div className="container-fluid">
                <Routes>
                  <Route
                    path="/parametrizacion/sector"
                    element={<Sector></Sector>}
                  />
                  <Route
                    path="/parametrizacion/Entidad"
                    element={<Entidad></Entidad>}
                  />
                  <Route
                    path="/parametrizacion/documentosDeAdopcion"
                    element={<DocumentosAdopcion></DocumentosAdopcion>}
                  />
                  <Route
                    path="/parametrizacion/unidadesDeMedida"
                    element={<UnidadesMedida></UnidadesMedida>}
                  />
                  <Route
                    path="/parametrizacion/rangoSemaforo"
                    element={<RangoSemaforo></RangoSemaforo>}
                  />
                  <Route
                    path="/parametrizacion/metaODS"
                    element={<MetaODS></MetaODS>}
                  />
                  <Route
                    path="/parametrizacion/documentosAsociados"
                    element={<DocumentosAsociados></DocumentosAsociados>}
                  />
                  <Route
                    path="/parametrizacion/fuentesDeFinanciacion"
                    element={<FuentesFinanciacion></FuentesFinanciacion>}
                  />
                  <Route
                    path="/parametrizacion/desarrolloSostenible"
                    element={
                      <ObjetivoDesarrolloSostenible></ObjetivoDesarrolloSostenible>
                    }
                  />
                  <Route
                    path="/parametrizacion/nivelTerritorializacion"
                    element={
                      <NivelTerritorializacion></NivelTerritorializacion>
                    }
                  />
                  <Route
                    path="/parametrizacion/planDesarrollo"
                    element={<PlanDesarrollo></PlanDesarrollo>}
                  />
                  <Route
                    path="/parametrizacion/indicadorPlanDesarrollo"
                    element={
                      <IndicadorPlanDesarrollo></IndicadorPlanDesarrollo>
                    }
                  />
                  <Route
                    path="/parametrizacion/parametros"
                    element={<Parametros></Parametros>}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div> */}
      </BrowserRouter>
    </>
  );
};

export default Router;
