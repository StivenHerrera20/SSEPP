const router = require("express").Router();
const { productoDatosGenerales, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await productoDatosGenerales.create(req.body);
  const busqueda = await sequelize.query(
    "select max(id) as max from objetivo_especifico_has_producto_datos_generales",
    { type: QueryTypes.SELECT }
  );
  res.json({
    doc: busqueda,
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await productoDatosGenerales.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.get("/listarTodos/:id_objetivo", async (req, res) => {
  const doc = await productoDatosGenerales.findAndCountAll({
    where: { id_objetivo: req.params.id_objetivo },
  });
  res.json({ resultado: doc });
});
module.exports = router;
