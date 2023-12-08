const router = require("express").Router();
const { FichaTecnicaMedicion } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await FichaTecnicaMedicion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
