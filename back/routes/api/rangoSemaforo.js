const router = require("express").Router();
const { rangoSemaforo } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const rango = await rangoSemaforo.findAll();
  res.json(rango);
});
router.post("/agregar", async (req, res) => {
  const rango = await rangoSemaforo.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await rangoSemaforo.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await rangoSemaforo.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
