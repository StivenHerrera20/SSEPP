const router = require("express").Router();
const { productoIndicador, sequelize } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await productoIndicador.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
module.exports = router;
