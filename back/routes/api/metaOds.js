const router = require("express").Router();
const { metaOds } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const meta = await metaOds.findAll();
  res.json(meta);
});
router.post("/agregar", async (req, res) => {
  const meta = await metaOds.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await metaOds.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await metaOds.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
