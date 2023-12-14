const router = require("express").Router();
const { fichaTecnicaResponsable } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await fichaTecnicaResponsable.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar/:id", async (req, res) => {
  const doc = await fichaTecnicaResponsable.findAndCountAll({
    where: { idIndicador: req.params.id },
  });
  res.json({ resultado: doc });
});
module.exports = router;
