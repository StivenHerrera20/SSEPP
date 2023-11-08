const router = require("express").Router();
const multer = require("multer");
const { politicasPublicas, sequelize } = require("../../model/Conexion");
const { QueryTypes } = require("sequelize");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/agregar", upload.single("imagen"), async (req, res) => {
  try {
    const originalname = req.file.path;
    const imagePath = `${originalname}` + Date.now();
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

module.exports = router;
