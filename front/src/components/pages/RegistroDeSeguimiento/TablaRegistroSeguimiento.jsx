import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
const TablaRegistroSeguimiento = () => {
  const [tablaResultado, setTablaResultado] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(5);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [paginaDos, setPaginaDos] = useState(0);
  const [filaDos, setFilaDos] = useState(5);
  const [totalRegistrosDos, setTotalRegistrosDos] = useState(0);
  const [totalPaginasDos, setTotalPaginasDos] = useState(0);
  const [tipo, setTipo] = useState("Producto");
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/resultadoIndicador/listar?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setTablaResultado(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
    fetch(
      `http://127.0.0.1:3900/api/productoIndicador/listar?page=${paginaDos}&size=${filaDos}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setTablaProducto(doc.desarrollo);
        setTotalRegistrosDos(doc.total);
        setTotalPaginasDos(Math.ceil(doc.total / fila));
      });
  }, [pagina, fila, paginaDos, filaDos]);
  const selectPagina = (e) => {
    if (tipo == "Producto") {
      const selectedValue = e.target.value;
      let nRegistros = totalRegistrosDos;
      let nRegistrosPP = selectedValue;
      setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
      fetch(
        "http://127.0.0.1:3900/api/productoIndicador/listar?page=" +
          paginaDos +
          "&size=" +
          selectedValue
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setTablaProducto(doc.desarrollo);
          setFilaDos(parseInt(selectedValue));
        });
    } else if (tipo == "Resultado") {
      const selectedValue = e.target.value;
      let nRegistros = totalRegistros;
      let nRegistrosPP = selectedValue;
      setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
      fetch(
        "http://127.0.0.1:3900/api/resultadoIndicador/listar?page=" +
          pagina +
          "&size=" +
          selectedValue
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setTablaResultado(doc.desarrollo);
          setFila(parseInt(selectedValue));
        });
    }
  };
  const handleSiguiente = () => {
    if (tipo == "Producto") {
      if (paginaDos < totalPaginasDos - 1) {
        setPaginaDos(paginaDos + 1);
      }
    } else if (tipo == "Resultado") {
      if (pagina < totalPaginas - 1) {
        setPagina(pagina + 1);
      }
    }
  };

  const handleAnterior = () => {
    if (tipo == "Producto") {
      if (paginaDos > 0) {
        setPaginaDos(paginaDos - 1);
      }
    } else if (tipo == "Resultado") {
      if (pagina > 0) {
        setPagina(pagina - 1);
      }
    }
  };
  const TablaResultado = () => (
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Politica pública</th>
            <th>Objetivo especifico</th>
            <th>Vigente</th>
            <th>
              Ultimo <br /> Periodo <br /> Registrado
            </th>
            <th className="text-center">Editar</th>
          </tr>
        </thead>

        <tbody>
          {tablaResultado.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>Resultado</td>
                <td>{res.nombre}</td>
                <td>{res.politica}</td>
                <td>{res.objetivo}</td>
                <td>Vigente</td>
                <td>{res.ultimoPeriodoRegistrado}</td>
                <td className="text-center">
                  <button
                    onClick={() => {
                      localStorage.setItem("idIndicadorSeg", res.id);
                      window.location =
                        "/inicio/registrodeseguimiento/cargueavance";
                    }}
                  >
                    Editar
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  const TablaProducto = () => (
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Politica pública</th>
            <th>Objetivo especifico</th>
            <th>Vigente</th>
            <th>
              Ultimo <br /> Periodo <br /> Registrado
            </th>
            <th className="text-center">Editar</th>
          </tr>
        </thead>

        <tbody>
          {tablaProducto.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>Producto</td>
                <td>{res.nombre}</td>
                <td>{res.politica}</td>
                <td>{res.objetivo}</td>
                <td>Vigente</td>
                <td>{res.ultimoPeriodoRegistrado}</td>
                <td className="text-center">
                  <button
                    onClick={() => {
                      localStorage.setItem("idIndicadorSeg", res.id);
                      window.location =
                        "/inicio/registrodeseguimiento/cargueavance";
                    }}
                  >
                    Editar
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <div>
            <select
              name=""
              id="numeroFilas"
              className="form-select ms-3"
              onChange={selectPagina}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option selected value="5">
                5
              </option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id="tipo"
              className="form-select ms-3"
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              <option value="Producto">Producto</option>
              <option value="Resultado">Resultado</option>
            </select>
          </div>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Indicadores a Cargo de la Entidad
          </h2>
        </div>
        <div className="card-body">
          {tipo === "Resultado" ? (
            <TablaResultado />
          ) : tipo === "Producto" ? (
            <TablaProducto />
          ) : null}
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-primary m-2"
              variant="primary"
              onClick={handleAnterior}
            >
              Anterior
            </Button>
            <Button
              className="btn btn-primary m-2"
              variant="primary"
              onClick={handleSiguiente}
            >
              Siguiente
            </Button>
          </div>
        </div>
        {/* <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th className="align-middle text-center">Tipo</th>
                  <th className="align-middle text-center">
                    Nombre del indicador
                  </th>
                  <th className="align-middle text-center">Politica Pública</th>
                  <th className="align-middle text-center">
                    Objetivo Especifico
                  </th>
                  <th className="align-middle text-center">¿Vigente? </th>
                  <th>
                    Ultimo <br /> Periodo <br /> Registrado
                  </th>
                  <th className="align-middle text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>PRODUCTO</td>
                  <td>Estrategia de respeto a las normas</td>
                  <td>Politica Pública de cultura ciudadana 2019-2038 </td>
                  <td>Sector Administrativo Mujeres</td>
                  <td>Vigente</td>
                  <td>ENE 2020</td>
                  <td className="text-center">
                    {" "}
                    <NavLink
                      to="cargueavance"
                      className="btn btn-success fa fa-pencil"
                      aria-current="page"
                    ></NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TablaRegistroSeguimiento;
