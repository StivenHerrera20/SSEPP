const router = require("express").Router();
const { EnfoqueNivelTres } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const enfoqueTres = await EnfoqueNivelTres.findAll();
  res.json(enfoqueTres);
});
router.post("/agregar", async (req, res) => {
  const enfoqueTres = await EnfoqueNivelTres.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await EnfoqueNivelTres.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await EnfoqueNivelTres.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
