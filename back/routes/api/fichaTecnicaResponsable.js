const router = require("express").Router();
const { fichaTecnicaResponsable } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await fichaTecnicaResponsable.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
