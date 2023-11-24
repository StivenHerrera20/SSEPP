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

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Tamaño máximo: 50 MB
  },
});

router.post("/agregar", upload.single("imagen"), async (req, res) => {
  try {
    const originalname = req.file.filename;
    const imagePath = `http://127.0.0.1:3900/images/${originalname}`;
    const plan = await politicasPublicas.create({
      ...req.body,
      imagen: imagePath,
    });
    const busqueda = await sequelize.query(
      "select max(id) as max from politica_publica",
      { type: QueryTypes.SELECT }
    );
    res.json({
      doc: busqueda,
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
  const busqueda = await sequelize.query(
    "select * from politica_publica where nombre like '%" +
      req.query.Nombre +
      "%'",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
router.get("/maximo/:campo", async (req, res) => {
  const campo = req.params.campo;

  politicasPublicas
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
router.get("/traerId", async (req, res) => {
  const busqueda = await sequelize.query(
    "select id from politica_publica where nombre like '%" +
      req.query.nombre +
      "%'",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
router.get("/traerFechas", async (req, res) => {
  const busqueda = await sequelize.query(
    "select fecha_inicio,fecha_fin from politica_publica where nombre like '%" +
      req.query.nombre +
      "%'",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ resultado: busqueda });
});
module.exports = router;
