const router = require("express").Router();
const { DocumentoAsociado } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const DocumentosAsociados = await DocumentoAsociado.findAll();
  res.json(DocumentosAsociados);
});
router.post("/agregar", async (req, res) => {
  const DocumentosAsociados = await DocumentoAsociado.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await DocumentoAsociado.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await DocumentoAsociado.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
