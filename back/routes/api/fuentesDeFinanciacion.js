const router = require("express").Router();
const { fuentesDeFinanciacion } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const fuentes = await fuentesDeFinanciacion.findAll();
  res.json(fuentes);
});
router.post("/agregar", async (req, res) => {
  const fuentes = await fuentesDeFinanciacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await fuentesDeFinanciacion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await fuentesDeFinanciacion.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
