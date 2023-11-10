const router = require("express").Router();
const multer = require("multer");
const { politicasPublicas, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    let imagePath = file.originalname;
    cb(null, imagePath);
  },
});

const upload = multer({ storage });

router.post("/agregar", upload.single("imagen"), async (req, res) => {
  try {
    const originalname = req.file.filename;
    const imagePath = `127.0.0.1:3900/images/${originalname}`;
    const plan = await politicasPublicas.create({ ...req.body, imagen: imagePath });
    res.json({
      status: "OK",
      mensaje: "Agregado Correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al subir y guardar la imagen" });
  }
});
router.get("/listar", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await politicasPublicas.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.get("/listarEscrito", async (req, res) => {
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query("select * from politica_publica where nombre like '%" + req.query.Nombre + "%'", {
    type: QueryTypes.SELECT,
  });
  res.json({ resultado: busqueda });
});
module.exports = router;
