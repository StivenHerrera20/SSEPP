//Instancio sequelize
const { Sequelize } = require("sequelize");

const DocumentoAsociadoModel = require("./DocumentosAsociados");

// metodo para conectarnos a la bd, usando async -- await funciones asincronicas
const sequelize = new Sequelize("politicas_publicas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const DocumentoAsociado = DocumentoAsociadoModel(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Melo hasta aqui");
});

module.exports = { DocumentoAsociado };
