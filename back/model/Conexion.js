//Instancio sequelize
const { Sequelize } = require("sequelize");

const DocumentoAsociadoModel = require("./DocumentosAsociados");
const DocumentoDeAdopcionModel = require("./DocumentosDeAdopcion");
const enfoqueNivelCuatroModel = require("./EnfoqueNivelCuatro");
const enfoqueNivelDosModel = require("./EnfoqueNivelDos");
const enfoqueNivelTresModel = require("./EnfoqueNivelTres");
const enfoqueNivelUnoModel = require("./enfoqueNivelUno");
const entidadModel = require("./Entidad");
const fuentesDeFinanciacionModel = require("./fuentesDeFinanciacion");
const planDeDesarrolloModel = require("./planDeDesarrollo");
const metaOdsModel = require("./metaOds");
const nivelDeTerritorializacionModel = require("./nivelDeTerritorializacion");
const desarrolloSostenibleModel = require("./desarrolloSostenible");
const parametroModel = require("./parametro");
const planModel = require("./Plan");
const rangoSemaforoModel = require("./rangoSemaforo");
const sectorModel = require("./Sector");
const unidadDeMedidaModel = require("./unidadDeMedida");

// metodo para conectarnos a la bd, usando async -- await funciones asincronicas
const sequelize = new Sequelize("politicas_publicas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const DocumentoDeAdopcion = DocumentoDeAdopcionModel(sequelize, Sequelize);
const DocumentoAsociado = DocumentoAsociadoModel(sequelize, Sequelize);
const enfoqueNivelCuatro = enfoqueNivelCuatroModel(sequelize, Sequelize);
const EnfoqueNivelDos = enfoqueNivelDosModel(sequelize, Sequelize);
const EnfoqueNivelTres = enfoqueNivelTresModel(sequelize, Sequelize);
const enfoqueNivelUno = enfoqueNivelUnoModel(sequelize, Sequelize);
const fuentesDeFinanciacion = fuentesDeFinanciacionModel(sequelize, Sequelize);
const planDeDesarrollo = planDeDesarrolloModel(sequelize, Sequelize);
const Entidad = entidadModel(sequelize, Sequelize);
const desarrolloSostenible = desarrolloSostenibleModel(sequelize, Sequelize);
const parametro = parametroModel(sequelize, Sequelize);
const metaOds = metaOdsModel(sequelize, Sequelize);
const Plan = planModel(sequelize, Sequelize);
const rangoSemaforo = rangoSemaforoModel(sequelize, Sequelize);
const Sector = sectorModel(sequelize, Sequelize);
const unidadDeMedida = unidadDeMedidaModel(sequelize, Sequelize);
const nivelDeTerritorializacion = nivelDeTerritorializacionModel(
  sequelize,
  Sequelize
);
sequelize.sync({ force: false }).then(() => {
  console.log("Melo hasta aqui");
});

module.exports = {
  sequelize,
  DocumentoAsociado,
  DocumentoDeAdopcion,
  enfoqueNivelCuatro,
  EnfoqueNivelDos,
  EnfoqueNivelTres,
  enfoqueNivelUno,
  Entidad,
  fuentesDeFinanciacion,
  planDeDesarrollo,
  metaOds,
  nivelDeTerritorializacion,
  desarrolloSostenible,
  parametro,
  Plan,
  rangoSemaforo,
  Sector,
  unidadDeMedida,
};
