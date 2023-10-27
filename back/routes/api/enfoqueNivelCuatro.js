const router = require("express").Router();
const { enfoqueNivelCuatro } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const enfoqueCuatro = await enfoqueNivelCuatro.findAll();
  res.json(enfoqueCuatro);
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
module.exports = router;
