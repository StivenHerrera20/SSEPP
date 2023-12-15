const router = require("express").Router();
const { AvanceCualitativo, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await AvanceCualitativo.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listarTabla", async (req, res) => {
  const { page = 0, size = 5, filtro } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  if (filtro) {
    options.where = {
      idIndicador: filtro,
    };
  }
  const { count, rows } = await AvanceCualitativo.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
module.exports = router;
