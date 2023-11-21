const router = require("express").Router();
const { productoDatosGenerales, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await productoDatosGenerales.create(req.body);
  const busqueda = await sequelize.query(
    "select max(id) as max from objetivo_especifico_has_producto_datos_generales",
    { type: QueryTypes.SELECT }
  );
  res.json({
    doc: busqueda,
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
