const router = require("express").Router();
const { politicaHasSectores } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await politicaHasSectores.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
module.exports = router;
