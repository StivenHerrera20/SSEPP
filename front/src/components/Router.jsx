import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import "../assets/css/sb-admin-2.css";

/* Parametrización */
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
import Enfoque from "./pages/Parametrizacion/Enfoque";
import EnfoqueDos from "./pages/Parametrizacion/EnfoqueDos";
import EnfoqueTres from "./pages/Parametrizacion/EnfoqueTres";
import EnfoqueCuatro from "./pages/Parametrizacion/EnfoqueCuatro";

/* Politica Publica */
import IndexPoliticaPublica from "./pages/PoliticaPublica/IndexPoliticaPublica";

/* Plan de acción */
import IndexPlanAccion from "./pages/PlanDeAccion/IndexPlanAccion";

/* Bateria De Indicadores */
import IndexBateriaDeIndicadores from "./pages/BateriaDeIndicadores/IndexBateriaDeIndicadores";

/* Registro De Seguimiento */
import IndexRegistroSeguimiento from "./pages/RegistroDeSeguimiento/IndexRegistroSeguimiento";
import TablaRegistroSeguimiento from "./pages/RegistroDeSeguimiento/TablaRegistroSeguimiento";
import CargueAvance from "./pages/RegistroDeSeguimiento/CargueAvance";

/* Informe De Seguimiento */
import IndexInformesSeguimiento from "./pages/InformesDeSeguimiento/IndexInformesSeguimiento";
import InformeEjecutivo from "./pages/InformesDeSeguimiento/InformeEjecutivo";
import InformeAnalitico from "./pages/InformesDeSeguimiento/InformeAnalitico";
import InformeCostos from "./pages/InformesDeSeguimiento/InformeCostos";
import SeguimientoCualitativo from "./pages/InformesDeSeguimiento/SeguimientoCualitativo";
import HojaDeVidaIndicador from "./pages/InformesDeSeguimiento/HojaDeVidaIndicador";
import ConsultaProductos from "./pages/InformesDeSeguimiento/ConsultaProductos";
import PlanAccionAvance from "./pages/InformesDeSeguimiento/PlanAccionAvance";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}

          <Route index element={<Login />} />
          <Route path="/inicio" element={<Index />} />

          {/* Parametrización */}
          <Route
            path="/inicio/parametrizacion/"
            element={<IndexParametrizacion />}
          >
            <Route index element={<Sector></Sector>} />
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

          {/* Politicas Publicas */}
          <Route
            path="/inicio/politicasPublicas"
            element={<IndexPoliticaPublica />}
          />

          {/* Plan de acción */}
          <Route path="/inicio/plandeaccion" element={<IndexPlanAccion />} />

          {/* Bacteria de Indicadores */}
          <Route
            path="/inicio/bateriadeindicadores"
            element={<IndexBateriaDeIndicadores />}
          />

          {/* Registro de seguimiento */}
          <Route
            path="/inicio/registrodeseguimiento"
            element={<IndexRegistroSeguimiento />}
          >
            <Route index element={<TablaRegistroSeguimiento />} />
            <Route path="cargueavance" element={<CargueAvance />} />
          </Route>

          {/* Informes de Seguimiento */}
          <Route
            path="/inicio/informesdeseguimiento"
            element={<IndexInformesSeguimiento />}
          >
            <Route index element={<InformeEjecutivo />} />
            <Route path="informeejecutivo" element={<InformeEjecutivo />} />
            <Route path="informeanalitico" element={<InformeAnalitico />} />
            <Route path="informecostos" element={<InformeCostos />} />
            <Route
              path="seguimientocualitativo"
              element={<SeguimientoCualitativo />}
            />
            <Route
              path="hojadevidadelindicador"
              element={<HojaDeVidaIndicador />}
            />
            <Route path="consultaproductos" element={<ConsultaProductos />} />
            <Route path="plandeaccionyavance" element={<PlanAccionAvance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
