const router = require("express").Router();
const { ProductoCostoHasFuentes } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await ProductoCostoHasFuentes.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
module.exports = router;
