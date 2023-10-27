const router = require("express").Router();
const { unidadDeMedida } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const unidad = await unidadDeMedida.findAll();
  res.json(unidad);
});
router.post("/agregar", async (req, res) => {
  const unidad = await unidadDeMedida.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await unidadDeMedida.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await unidadDeMedida.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
