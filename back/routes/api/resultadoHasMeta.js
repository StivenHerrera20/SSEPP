const router = require("express").Router();
const { resultadoHasMeta } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await resultadoHasMeta.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listarMeta/:id_politica", async (req, res) => {
  let options = {
    where: { id_politica: req.params.id_politica },
  };
  const { count, rows } = await resultadoHasMeta.findAndCountAll(options);
  res.json({ resultado: rows });
});
module.exports = router;
