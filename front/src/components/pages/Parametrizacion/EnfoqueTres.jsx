import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const EnfoqueTres = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex">
          <Button
            className="btn btn-primary fa fa-plus"
            variant="primary"
            onClick={handleShow}
          ></Button>

          <h2 className="m-0 font-weight-bold text-center justify-content-center m-auto">
            Enfoque Nivel 3
          </h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Nivel 1</th>
                  <th>Nivel 2</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>3.1.1 Primera infancia, infancia y adolecencia</td>
                  <td>
                    3. Enfoque poblacional - diferencial en políticas públicas
                  </td>
                  <td>3.1 Trancurrir vital</td>
                  <td>ACTIVO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td>3.1.2 Juventud</td>
                  <td>
                    3. Enfoque poblacional - diferencial en políticas públicas
                  </td>
                  <td>3.1 Trancurrir vital</td>
                  <td>ACTIVO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td>3.2.1 Sexo</td>
                  <td>
                    3. Enfoque poblacional - diferencial en políticas públicas
                  </td>
                  <td>3.2 Orientaciones sexuales e identidades de género</td>
                  <td>ACTIVO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title>Agregar Enfoque Nivel 3</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEnfoqueNivelTres"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Nivel 1
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">
                    1. Enfoque de derechos humanos en políticas públicas
                  </option>
                  <option value="2">
                    2. Enfoque de Género en políticas publicas
                  </option>
                  <option value="3">
                    3. Enfoque poblacional - diferencial en políticas públicas
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Nivel 2
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">3.1 Trancurrir vital</option>
                  <option value="2">
                    3.2 Orientaciones sexuales e identidades de género
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Estado
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Guardar
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default EnfoqueTres;
