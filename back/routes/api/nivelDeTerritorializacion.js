const router = require("express").Router();
const { nivelDeTerritorializacion } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const territorializacion = await nivelDeTerritorializacion.findAll();
  res.json(territorializacion);
});
router.post("/agregar", async (req, res) => {
  const territorializacion = await nivelDeTerritorializacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await nivelDeTerritorializacion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await nivelDeTerritorializacion.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
