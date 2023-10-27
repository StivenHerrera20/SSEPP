const router = require("express").Router();
const { enfoqueNivelUno } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const enfoqueUno = await enfoqueNivelUno.findAll();
  res.json(enfoqueUno);
});
router.post("/agregar", async (req, res) => {
  const enfoqueUno = await enfoqueNivelUno.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await enfoqueNivelUno.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await enfoqueNivelUno.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
