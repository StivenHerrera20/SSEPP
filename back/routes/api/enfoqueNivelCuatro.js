const router = require("express").Router();
const { enfoqueNivelCuatro } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const enfoqueCuatro = await enfoqueNivelCuatro.findAll();
  res.json(enfoqueCuatro);
});
router.post("/agregar", async (req, res) => {
  const enfoqueCuatro = await enfoqueNivelCuatro.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await enfoqueNivelCuatro.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await enfoqueNivelCuatro.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
