import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
const TablaPlanAccion = ({ controlPD, setControlPD }) => {
  const [pagina, setPagina] = useState(0);
  const [politicasPublicas, setPoliticasPublicas] = useState([]);
  const [fila, setFila] = useState(5);
  const [busqueda, setBusqueda] = useState(0);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/politicasPublicas/listar?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPoliticasPublicas(doc.desarrollo);
        setTotalRegistros(doc.total);
        setTotalPaginas(Math.ceil(doc.total / fila));
      });
  }, [pagina, fila]);
  const selectPagina = (e) => {
    const selectedValue = e.target.value;
    let nRegistros = totalRegistros;
    let nRegistrosPP = selectedValue;
    setTotalPaginas(Math.ceil(nRegistros / nRegistrosPP));
    fetch(
      "http://127.0.0.1:3900/api/politicasPublicas/listar?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setPoliticasPublicas(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    setBusqueda(searchText); // Actualiza el estado inmediatamente
    if (searchText.length != 0) {
      // Realiza la búsqueda solo si el texto no está vacío
      fetch(
        `http://127.0.0.1:3900/api/politicasPublicas/listarEscrito?Nombre=${searchText}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setPoliticasPublicas(doc.resultado);
        });
    } else {
      // Si el texto está vacío, vuelve a cargar los datos originales
      fetch(
        `http://127.0.0.1:3900/api/politicasPublicas/listar?page=${pagina}&size=${fila}`
      )
        .then((response) => {
          return response.json();
        })
        .then((doc) => {
          setPoliticasPublicas(doc.desarrollo);
        });
    }
  };
  const handleSiguiente = () => {
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const handleAnterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };
  localStorage.clear();
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
              <option defaultValue={5} value="5">
                5
              </option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Plan de Acción - Politicas Públicas
          </h2>
          <div>
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Buscar..."
              id="txtTabla"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imagen</th>
                  <th>Nemotécnico D.C.N</th>
                  <th>Nombre</th>
                  <th>Sector</th>
                  <th>Entidad </th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                {politicasPublicas.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td width={320}>
                        <img
                          className="img-fluid"
                          src={res.imagen}
                          width={300}
                          height={300}
                        />
                      </td>
                      <td>{res.nemotecnico}</td>
                      <td>{res.nombre}</td>
                      <td>{res.sector_lider}</td>
                      <td>{res.entidad_lider}</td>
                      <td className="text-center">
                        {" "}
                        <button
                          className="btn btn-success fa fa-pencil "
                          onClick={(e) => {
                            e.preventDefault();
                            let nombre =
                              e.target.parentElement.parentElement.children[3]
                                .textContent;
                            let idPolitica =
                              e.target.parentElement.parentElement.children[0]
                                .textContent;
                            localStorage.setItem("nombre", nombre);
                            localStorage.setItem("idPolitica", idPolitica);
                            setControlPD(1);
                          }}
                        ></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Button
            className="btn btn-primary"
            variant="primary"
            onClick={handleAnterior}
          >
            Anterior
          </Button>
          <Button
            className="btn btn-primary"
            variant="primary"
            onClick={handleSiguiente}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </>
  );
};

export default TablaPlanAccion;
