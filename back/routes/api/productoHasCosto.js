const router = require("express").Router();
const { productoHasCosto, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await productoHasCosto.create(req.body);
  const busqueda = await sequelize.query(
    "select max(id) as max from producto_has_costos",
    { type: QueryTypes.SELECT }
  );
  res.json({
    doc: busqueda,
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listarCosto/:id_objetivo", async (req, res) => {
  let options = {
    where: { id_objetivo: req.params.id_objetivo },
  };
  const { count, rows } = await productoHasCosto.findAndCountAll(options);
  res.json({ resultado: rows });
});
router.get("/traerTotal/:id_objetivo", async (req, res) => {
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query(
    "select SUM(estimado) AS total from producto_has_costos where id_objetivo=" +
      req.params.id_objetivo,
    { type: QueryTypes.SELECT }
  );
  res.json({ resultado: busqueda });
});
router.get("/traerEstimado/:id_objetivo/:year", async (req, res) => {
  const { id_objetivo, year } = req.params;
  const busqueda = await sequelize.query(
    "SELECT estimado FROM producto_has_costos WHERE id_objetivo = :id_objetivo AND year = :year",
    {
      replacements: { id_objetivo, year },
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
router.put("/editarEjecutado/:id/:year", async (req, res) => {
  await productoHasCosto.update(req.body, {
    where: { id_objetivo: req.params.id, year: req.params.year },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
module.exports = router;
