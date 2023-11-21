const router = require("express").Router();
const {
  productoDatosGeneralesHasObjetivos,
  sequelize,
} = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await productoDatosGeneralesHasObjetivos.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});

module.exports = router;
