const router = require("express").Router();
const { parametro } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const param = await parametro.findAll();
  res.json(param);
});
router.post("/agregar", async (req, res) => {
  const param = await parametro.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await parametro.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await parametro.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
