import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const OpcionesNavegacion = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center "
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">logo</div>
          <div className="sidebar-brand-text mx-3">SSEPP</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <NavLink to="/sector" className="nav-link" aria-current="page">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Sector</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/entidad"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Entidad</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/documentosDeAdopcion"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Documentos de adopción</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/unidadesDeMedida"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Unidades de Medida</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/rangoSemaforo"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Rango Semáforo</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            class="nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={(e) => {
              e.preventDefault();
              control == 6 || control == 7 || control == 8 || control == 9
                ? setControl(0)
                : null;
            }}
          >
            <span>Enfoque</span>
          </button>
          <div
            class="collapse w-100 my-0 mx-0 text-center"
            id="collapseExample"
          >
            <NavLink
              to="/parametrizacion/enfoqueNivelUno"
              className="nav-link w-100"
              aria-current="page"
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Nivel 1</span>
            </NavLink>
            <NavLink
              to="/parametrizacion/enfoqueNivelDos"
              className="nav-link w-100"
              aria-current="page"
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Nivel 2</span>
            </NavLink>
            <NavLink
              to="/parametrizacion/enfoqueNivelTres"
              className="nav-link w-100"
              aria-current="page"
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Nivel 3</span>
            </NavLink>
            <NavLink
              to="/parametrizacion/enfoqueNivelCuatro"
              className="nav-link w-100"
              aria-current="page"
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Nivel 4</span>
            </NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/metaODS"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Meta ODS</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/documentosAsociados"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Documentos asociados</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/fuentesDeFinanciacion"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Fuentes de Financiación</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/desarrolloSostenible"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Objetivo de Desarrollo Sostenible</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/nivelTerritorializacion"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Nivel de Territorialización</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/planDesarrollo"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Plan de Desarrollo</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/indicadorPlanDesarrollo"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Indicador Plan de Desarrollo</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parametrizacion/parametros"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Parametros</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default OpcionesNavegacion;
