const router = require("express").Router();
const { FichaTecnicaMedicion } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await FichaTecnicaMedicion.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listar/:id", async (req, res) => {
  const doc = await FichaTecnicaMedicion.findAndCountAll({
    where: { idIndicador: req.params.id },
  });
  res.json({ resultado: doc });
});
module.exports = router;
