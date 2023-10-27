const router = require("express").Router();
const { Sector } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const sector = await Sector.findAll();
  res.json(sector);
});
router.post("/agregar", async (req, res) => {
  const sector = await Sector.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await Sector.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await Sector.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
