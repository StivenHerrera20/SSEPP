const router = require("express").Router();
const { PublicacionPolitica } = require("../../model/Conexion");
router.get("/listar/:id", async (req, res) => {
  const rango = await PublicacionPolitica.findAll({
    where: { idPolitica: req.params.id },
  });
  res.json(rango);
});
router.post("/agregar", async (req, res) => {
  const rango = await PublicacionPolitica.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
module.exports = router;
