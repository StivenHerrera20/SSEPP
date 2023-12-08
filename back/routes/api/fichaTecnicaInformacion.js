const router = require("express").Router();
const { FichaTecnicaInformacion } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await FichaTecnicaInformacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
