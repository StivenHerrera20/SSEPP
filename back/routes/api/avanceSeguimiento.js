const router = require("express").Router();
const { AvanceSeguimiento, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await AvanceSeguimiento.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar/id", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
    where: { idObjetivo: req.params.id },
  };
  const { count, rows } = await AvanceSeguimiento.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.get("/listarTodos/:id_objetivo", async (req, res) => {
  const doc = await AvanceSeguimiento.findAndCountAll({
    where: { id_objetivo: req.params.id_objetivo },
  });
  res.json({ resultado: doc });
});
router.get("/traerAcumulado/:id", async (req, res) => {
  const { id, periodo } = req.params;
  const busqueda = await sequelize.query(
    "SELECT MAX(porcentaje_acumulado) as total FROM avance_seguimiento WHERE idIndicador = :id",
    {
      replacements: { id },
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
router.get("/listarTabla", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await AvanceSeguimiento.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
module.exports = router;
