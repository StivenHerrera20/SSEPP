const router = require("express").Router();
const { desarrolloSostenible } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const desarrollo = await desarrolloSostenible.findAll();
  res.json(desarrollo);
});
router.post("/agregar", async (req, res) => {
  const desarrollo = await desarrolloSostenible.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await desarrolloSostenible.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await desarrolloSostenible.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
