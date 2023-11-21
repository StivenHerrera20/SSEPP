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
  const busqueda = await sequelize.query(
    "select max(id) as max from politica_publica",
    {
      type: QueryTypes.SELECT,
    }
  );
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
    where: { id_politica: busqueda[0].max },
  };
  const { count, rows } = await resultadoDatosGenerales.findAndCountAll(
    options
  );
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.get("/listarEscrito", async (req, res) => {
  const busquedaId = await sequelize.query(
    "select max(id) as max from politica_publica",
    {
      type: QueryTypes.SELECT,
    }
  );
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query(
    "select * from politica_publica_has_objetivo_especifico where objetivo like '%" +
      req.query.Nombre +
      "%' AND id_politica=" +
      busquedaId[0].max,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
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
router.get("/listarTodos/:id", async (req, res) => {
  const unidad = await resultadoDatosGenerales.findAll({
    where: { id_politica: req.params.id },
  });
  res.json(unidad);
});
module.exports = router;
