const router = require("express").Router();
const { EnfoqueNivelDos } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const enfoqueDos = await EnfoqueNivelDos.findAll();
  res.json(enfoqueDos);
});
router.post("/agregar", async (req, res) => {
  const enfoqueDos = await EnfoqueNivelDos.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await EnfoqueNivelDos.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await EnfoqueNivelDos.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
