import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const TablaBateriaIndicadores = ({ controlBI, setControlBI }) => {
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
            <th>Estado </th>
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
                <td>{res.estado}</td>
                <td className="text-center">
                  {" "}
                  <button
                    className="btn btn-secondary fa fa-pencil "
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.setItem("nombreIndicador", res.nombre);
                      localStorage.setItem("politicaAsociada", res.politica);
                      localStorage.setItem("objetivoAsociado", res.objetivo);
                      localStorage.setItem("idObj", res.id_objetivo);
                      localStorage.setItem("pdd", res.plan_de_desarrollo);
                      localStorage.setItem("indicador", res.indicador_pdd);
                      localStorage.setItem("formula", res.formula);
                      localStorage.setItem("valorBase", res.valor);
                      localStorage.setItem("fechaFin", res.fin);
                      localStorage.setItem("fechaBase", res.fecha_base);
                      localStorage.setItem("fuente", res.fuente);
                      localStorage.setItem("fechaInicio", res.inicio);
                      localStorage.setItem("idIndicador", res.id);
                      localStorage.setItem("tipo", "Resultado");
                      setControlBI(1);
                    }}
                  ></button>
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
            <th>Estado </th>
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
                <td>{res.estado}</td>
                <td className="text-center">
                  {" "}
                  <button
                    className="btn btn-secondary fa fa-pencil "
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.setItem("nombreIndicador", res.nombre);
                      localStorage.setItem("politicaAsociada", res.politica);
                      localStorage.setItem("objetivoAsociado", res.objetivo);
                      localStorage.setItem("idObj", res.id_objetivo);
                      localStorage.setItem("pdd", res.plan_de_desarrollo);
                      localStorage.setItem("indicador", res.indicador_pdd);
                      localStorage.setItem("formula", res.formula);
                      localStorage.setItem("valorBase", res.valor);
                      localStorage.setItem("fechaFin", res.fin);
                      localStorage.setItem("fechaBase", res.fecha_base);
                      localStorage.setItem("fuente", res.fuente);
                      localStorage.setItem("fechaInicio", res.inicio);
                      localStorage.setItem("idIndicador", res.id);
                      localStorage.setItem("tipo", "Producto");
                      setControlBI(1);
                    }}
                  ></button>
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
          <div className="me-3">
            <select
              name=""
              id="numeroFilas"
              className="form-select ms-3  w-100"
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
            Bateria de Indicadores
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
              className="btn btn-secondary m-2"
              variant="primary"
              onClick={handleAnterior}
            >
              Anterior
            </Button>
            <Button
              className="btn btn-secondary m-2"
              variant="primary"
              onClick={handleSiguiente}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaBateriaIndicadores;
