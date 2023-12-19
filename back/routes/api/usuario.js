const router = require("express").Router();
const { Usuario, sequelize } = require("../../model/Conexion");
router.get("/login", async (req, res) => {
  const unidad = await Usuario.findAll();
  res.json(unidad);
});
module.exports = router;
