const router = require("express").Router();
const { fuentesDeFinanciacion } = require("../../model/Conexion");
router.get("/listar", async (req, res) => {
  const fuentes = await fuentesDeFinanciacion.findAll();
  res.json(fuentes);
});
router.post("/agregar", async (req, res) => {
  const fuentes = await fuentesDeFinanciacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.put("/editar/:id", async (req, res) => {
  await fuentesDeFinanciacion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Actualizado Correctamente",
  });
});
router.delete("/eliminar/:id", async (req, res) => {
  await fuentesDeFinanciacion.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
router.get("/maximo/:campo", async (req, res) => {
  const campo = req.params.campo;

  fuentesDeFinanciacion
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
