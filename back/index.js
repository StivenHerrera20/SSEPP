const express = require("express");
const cors = require("cors");
const app = express();
const apiRouter = require("./routes/api");
require("./model/Conexion");

//setting cors :: middleware para evitar error de rutas cruzadas
app.use(cors());
app.use(express.static("uploads"));
app.use("/images", express.static("uploads"));
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api", apiRouter);
app.listen(3900, () => {
  console.log("App ejecutandose");
});
