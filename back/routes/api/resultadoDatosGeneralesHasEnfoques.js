const router = require("express").Router();
const {
  resultadoDatosGeneralesHasEnfoques,
  sequelize,
} = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoDatosGeneralesHasEnfoques.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await resultadoDatosGeneralesHasEnfoques.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.get("/listar/:id", async (req, res) => {
  const doc = await resultadoDatosGeneralesHasEnfoques.findAndCountAll({
    where: { id_resultado_datos_generales: req.params.id },
  });
  res.json({ resultado: doc });
});
router.get("/listarEscrito", async (req, res) => {
  const busquedaId = await sequelize.query(
    "select max(id) as max from politica_publica",
    {
      type: QueryTypes.SELECT,
    }
  );
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query(
    "select * from politica_publica_has_objetivo_especifico where objetivo like '%" +
      req.query.Nombre +
      "%' AND id_politica=" +
      busquedaId[0].max,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
router.delete("/eliminar/:id", async (req, res) => {
  await resultadoDatosGeneralesHasEnfoques.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
router.get("/listarTodos/:id", async (req, res) => {
  const unidad = await resultadoDatosGeneralesHasEnfoques.findAll({
    where: { id_politica: req.params.id },
  });
  res.json(unidad);
});
module.exports = router;
