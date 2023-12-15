import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const TablaCostos = () => {
  const [pagina, setPagina] = useState(0);
  const [fila, setFila] = useState(5);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [costos, setCostos] = useState([]);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3900/api/avanceCostos/listarTabla?page=${pagina}&size=${fila}`
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setCostos(doc.desarrollo);
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
      "http://127.0.0.1:3900/api/avanceCostos/listarTabla?page=" +
        pagina +
        "&size=" +
        selectedValue
    )
      .then((response) => {
        return response.json();
      })
      .then((doc) => {
        setCostos(doc.desarrollo);
        setFila(parseInt(selectedValue));
      });
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
  return (
    <>
      <div className="card-body ">
        <h5 className="m-0 font-weight-bold ">
          Registro de Recursos Ejecutados
        </h5>
      </div>
      <div className="col-2">
        <select
          name=""
          id="numeroFilas"
          className="form-select ms-3 w-25"
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
      <hr className="sidebar-divider my-0 " />
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%">
            <thead>
              <tr>
                <th className="align-middle text-center">Fecha</th>
                <th className="align-middle text-center">Periodo Reportado</th>
                <th className="align-middle text-center">
                  Costo <br /> Estimado{" "}
                </th>
                <th className="align-middle text-center">
                  Recursos <br /> Ejecutados
                </th>
                <th className="align-middle text-center">
                  Recursos <br /> Ejecutados <br /> Acumulados
                </th>
                <th className="align-middle text-center"> Observación </th>
              </tr>
            </thead>

            <tbody>
              {/* <tr>
                <td>2020-06-12</td>
                <td>DICIEMBRE 2019</td>
                <td>$ 65</td>
                <td>$ 15</td>
                <td>$ 15</td>
                <td>Se ejecutó al presupuesto conforme al PAC</td>
              </tr> */}
              {costos.map((res) => {
                return (
                  <tr key={res.id}>
                    <td>{res.fecha}</td>
                    <td>{res.periodo}</td>
                    <td>{res.costo_estimado}</td>
                    <td>{res.recursos_ejecutados}</td>
                    <td>{res.recursos_ejecutados_acumulados}</td>
                    <td>{res.observacion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
    </>
  );
};

export default TablaCostos;
