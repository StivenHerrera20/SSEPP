const router = require("express").Router();
const { FichaTecnicaAprobacion } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await FichaTecnicaAprobacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
