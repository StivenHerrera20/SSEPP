const router = require("express").Router();
const { productoDatosGeneralesHasEnfoques } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await productoDatosGeneralesHasEnfoques.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar/:id", async (req, res) => {
  const doc = await productoDatosGeneralesHasEnfoques.findAndCountAll({
    where: { id_producto_datos_generales: req.params.id },
  });
  res.json({ resultado: doc });
});
module.exports = router;
