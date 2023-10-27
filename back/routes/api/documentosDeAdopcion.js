const router = require("express").Router();
const { DocumentoDeAdopcion } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const DocumentosDeAdopcion = await DocumentoDeAdopcion.findAll();
  res.json(DocumentosDeAdopcion);
});
router.post("/agregar", async (req, res) => {
  const DocumentosDeAdopcion = await DocumentoDeAdopcion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await DocumentoDeAdopcion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await DocumentoDeAdopcion.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
