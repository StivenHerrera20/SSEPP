const router = require("express").Router();
const { productoHasMeta } = require("../../model/Conexion");
router.post("/agregar", async (req, res) => {
  const sector = await productoHasMeta.create(req.body);
  res.json({
    status: "OK",
    mensaje: "Agregado Correctamente",
  });
});
router.get("/listarMeta/:id_objetivo", async (req, res) => {
  let options = {
    where: { id_objetivo: req.params.id_objetivo },
  };
  const { count, rows } = await productoHasMeta.findAndCountAll(options);
  res.json({ resultado: rows });
});
module.exports = router;
