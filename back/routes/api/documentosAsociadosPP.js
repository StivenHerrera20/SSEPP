const router = require("express").Router();
const multer = require("multer");
const { documentosAsociadosPP, sequelize } = require("../../model/Conexion");
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

router.post("/agregar", upload.single("documento"), async (req, res) => {
  try {
    const originalname = req.file.filename;
    const imagePath = `${originalname}`;
    const plan = await documentosAsociadosPP.create({
      ...req.body,
      documento: imagePath,
    });
    res.json({
      status: "OK",
      mensaje: "Agregado Correctamente",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al subir y guardar la imagen" + error });
  }
});
router.get("/listar", async (req, res) => {
  const { page = 0, size = 5 } = req.query;
  let options = {
    limit: +size,
    offset: +page * +size,
  };
  const { count, rows } = await documentosAsociadosPP.findAndCountAll(options);
  res.json({ total: count, desarrollo: rows, fila: size, page: page });
});
router.get("/listarEscrito", async (req, res) => {
  console.log(req.query.Nombre);
  const busqueda = await sequelize.query(
    "select * from documentos_asociados_politica_publica where nombre like '%" +
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

  documentosAsociadosPP
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
router.delete("/eliminar/:id", async (req, res) => {
  await documentosAsociadosPP.destroy({
    where: { id: req.params.id },
  });
  res.json({
    status: "OK",
    mensaje: "Eliminado correctamente",
  });
});
module.exports = router;
