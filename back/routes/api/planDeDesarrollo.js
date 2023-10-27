const router = require("express").Router();
const { planDeDesarrollo } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const plan = await planDeDesarrollo.findAll();
  res.json(plan);
});
router.post("/agregar", async (req, res) => {
  const plan = await planDeDesarrollo.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await planDeDesarrollo.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await planDeDesarrollo.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
