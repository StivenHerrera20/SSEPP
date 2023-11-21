const router = require("express").Router();
const { resultadoIndicador, sequelize } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoIndicador.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
module.exports = router;
