const router = require("express").Router();
const { FichaTecnicaInformacion } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await FichaTecnicaInformacion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar/:idIndicador", async (req, res) => {
  const consulta = await FichaTecnicaInformacion.findAndCountAll({
    where: { idIndicador: req.params.idIndicador },
  });
  res.json({ respuesta: consulta });
});
module.exports = router;
