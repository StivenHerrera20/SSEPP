const router = require("express").Router();
const { enfoqueNivelCuatro, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");
router.get("/listar", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await enfoqueNivelCuatro.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.post("/agregar", async (req, res) => {
  const enfoqueCuatro = await enfoqueNivelCuatro.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await enfoqueNivelCuatro.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await enfoqueNivelCuatro.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
router.get("/maximo/:campo", async (req, res) => {
  const campo = req.params.campo;

  enfoqueNivelCuatro
    .max(campo)
    .then((maxValue) => {
      res.json({
        status: "OK",
        maximo: maxValue,
      });
    })
    .catch((err) => {
      console.error("Error al obtener el valor máximo:", err);
      res.status(500).json({
        status: "Error",
        mensaje: "Hubo un problema al obtener el valor máximo.",
      });
    });
});
router.get("/listarEscrito", async (req, res) => {
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query(
    "select * from enfoque_nivel_cuatro where Nombre like '%" +
      req.query.Nombre +
      "%'",
    { type: QueryTypes.SELECT }
  );
  res.json({ resultado: busqueda });
});
module.exports = router;
