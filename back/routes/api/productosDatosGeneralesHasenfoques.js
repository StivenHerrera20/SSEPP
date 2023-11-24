const router = require("express").Router();
const { productoDatosGeneralesHasEnfoques } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await productoDatosGeneralesHasEnfoques.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
