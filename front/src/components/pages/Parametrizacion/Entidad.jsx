import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
const Entidad = () => {
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
            Entidad
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
                  <th>Descripcion</th>
                  <th>Sector</th>
                  <th>Estado</th>
                  <th className="text-center">Editar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Caja de Vivienda Popular</td>
                  <td>Entidades</td>
                  <td>
                    Sector Administrativo de Seguridad, Convivencia y Justicia
                  </td>
                  <td>ACTIVO</td>
                  <td className="text-center">
                    {" "}
                    <button className="btn btn-success fa fa-pencil "></button>
                  </td>
                </tr>
                <tr>
                  <td>Caja Capital</td>
                  <td>Entidades</td>
                  <td>Sector Administrativo de Gestión Juridica</td>
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
            <Modal.Title>Agregar Entidad</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div className="mb-3">
                <label for="" className="form-label">
                  Sector <b className="text-danger">*</b>
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">
                    Sector Administrativo de Gestión Juridica
                  </option>
                  <option value="2">
                    Sector Administrativo de Seguridad, Convivencia y Justicia
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Nombre <b className="text-danger">*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEntidad"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="descripcionEntidad"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
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

export default Entidad;
