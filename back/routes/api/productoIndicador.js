const router = require("express").Router();
const { productoIndicador, sequelize } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await productoIndicador.create(req.body);
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
  const { count, rows } = await productoIndicador.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.put("/editar/:id", async (req, res) => {
  await productoIndicador.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
module.exports = router;
