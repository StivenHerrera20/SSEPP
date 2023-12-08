const router = require("express").Router();
const { resultadoIndicador, sequelize } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoIndicador.create(req.body);
  res.json({
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
  const { count, rows } = await resultadoIndicador.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
module.exports = router;
