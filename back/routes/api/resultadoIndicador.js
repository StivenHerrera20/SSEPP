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
router.put("/editar/:id", async (req, res) => {
  await resultadoIndicador.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.get("/listarObj/:id", async (req, res) => {
  const rango = await resultadoIndicador.findAll({
    where: { id_objetivo: req.params.id },
  });
  res.json(rango);
});
router.get("/listarTodos", async (req, res) => {
  const rango = await resultadoIndicador.findAll();
  res.json(rango);
});
module.exports = router;
