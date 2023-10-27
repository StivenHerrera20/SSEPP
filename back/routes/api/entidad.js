const router = require("express").Router();
const { Entidad } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const entidad = await Entidad.findAll();
  res.json(entidad);
});
router.post("/agregar", async (req, res) => {
  const entidad = await Entidad.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await Entidad.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await Entidad.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
