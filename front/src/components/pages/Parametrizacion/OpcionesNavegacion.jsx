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
          <NavLink
            to="/parametrizacion/sector"
            className="nav-link"
            aria-current="page"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Sector</span>
          </NavLink>
          {/* <a
            className="nav-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 1 ? setControl(0) : setControl(1);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Sector</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 2 ? setControl(0) : setControl(2);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Entidad</span>
          </a> */}
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
          {/*  <a
            className="nav-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 3 ? setControl(0) : setControl(3);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Documentos de adopción</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 4 ? setControl(0) : setControl(4);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Unidades de Medida</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 5 ? setControl(0) : setControl(5);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Rango Semáforo</span>
          </a> */}
        </li>
        <li className="nav-item">
          <select class="nav-link " aria-label="Default select example">
            <option value="1">Enfoque Nivel 1</option>
            <option value="2">Enfoque Nivel 2</option>
            <option value="2">Enfoque Nivel 3</option>
            <option value="2">Enfoque Nivel 4</option>
          </select>
          {/* <a
      className="nav-link "
      href=""
      onClick={(e) => {
        e.preventDefault();
        control == 6 ? setControl(0) : setControl(6);
      }}
    >
      <i className="fas fa-fw fa-tachometer-alt"></i>
      <span>Enfoque</span>
    </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 7 ? setControl(0) : setControl(7);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Meta ODS</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 8 ? setControl(0) : setControl(8);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Documentos asociados</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 9 ? setControl(0) : setControl(9);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Fuentes de Financiación</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 10 ? setControl(0) : setControl(10);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Objetivo de Desarrollo Sostenible</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 11 ? setControl(0) : setControl(11);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Nivel de Territorialización</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 12 ? setControl(0) : setControl(12);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Plan de Desarrollo</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 13 ? setControl(0) : setControl(13);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Indicador Plan de Desarrollo</span>
          </a> */}
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
          {/* <a
            className="nav-link "
            href=""
            onClick={(e) => {
              e.preventDefault();
              control == 14 ? setControl(0) : setControl(14);
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Paramaetros</span>
          </a> */}
        </li>
      </ul>
    </>
  );
};

export default OpcionesNavegacion;
