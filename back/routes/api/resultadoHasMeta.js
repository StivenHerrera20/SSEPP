const router = require("express").Router();
const { resultadoHasMeta } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoHasMeta.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
