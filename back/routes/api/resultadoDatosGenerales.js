const router = require("express").Router();
const { resultadoDatosGenerales, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoDatosGenerales.create(req.body);
  const busqueda = await sequelize.query(
    "select max(id) as max from objetivo_especifico_has_resultado_datos_generales",
    { type: QueryTypes.SELECT }
  );
  res.json({
    doc: busqueda,
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await resultadoDatosGenerales.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.get("/listar", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await resultadoDatosGenerales.findAndCountAll(
    options
  );
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.delete("/eliminar/:id", async (req, res) => {
  await resultadoDatosGenerales.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
router.get("/listarTodos/:id_objetivo", async (req, res) => {
  const doc = await resultadoDatosGenerales.findAndCountAll({
    where: { id_objetivo: req.params.id_objetivo },
  });
  res.json({ resultado: doc });
});
module.exports = router;
