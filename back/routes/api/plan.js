const router = require("express").Router();
const { Plan } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const plan = await Plan.findAll();
  res.json(plan);
});
router.post("/agregar", async (req, res) => {
  const plan = await Plan.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await Plan.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await Plan.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
