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
const politicasPublicasModel = require("./PoliticasPublicas");
const politicaHasSectoresModel = require("./PoliticaHasSectores");
const documentoDeAdopcionPPModel = require("./DocumentoDeAdopcionPP");
const PPHasObjetivoGeneralModel = require("./PoliticaHasObjetivoGeneral");
const PPHasObjetivoEspecificoModel = require("./politicaHasObjetivoEspecifico");
const documentosAsociadosPPModel = require("./documentosAsociadosPP");
const resultadoDatosGeneralesModel = require("./resultadoDatosGenerales");
const resultadoDatosGeneralesHasEnfoquesModel = require("./resultadoDatosGeneralesHasEnfoques");
const resultadoIndicadorModel = require("./ResultadoIndicador");
const productoDatosGeneralesModel = require("./ProductoDatosGenerales");
const productoDatosGeneralesHasEnfoquesModel = require("./ProductoDatosGeneralesHasEnfoques");
const productoDatosGeneralesHasObjetivosModel = require("./ProductoDatosGeneralesHasObjetivos");
const productoIndicadorModel = require("./ProductoIndicador");
const resultadoHasMetaModel = require("./ResultadoHasMetas");
const productoHasMetaModel = require("./ProductoHasMetas");
const productoHasCostoModel = require("./ProductoHasCosto");
const productoHasCostoHasFuenteModel = require("./ProductoCostoHasFuentes");
const fichaTecnicaInformacionModel = require("./FichaTecnicaInformacion");
const fichaTecnicaMedicionModel = require("./FichaTecnicaMedicion");
const fichaTecnicaResponsableModel = require("./FichaTecnicaResponsable");
const fichaTecnicaAprobacionModel = require("./FichaTecnicaAprobacion");
const avanceCostosModel = require("./AvanceCostos");
const avanceCualitativoModel = require("./AvanceCualitativo");
const publicacionPoliticaModel = require("./PublicacionPolitica");
const usuarioModel = require("./Usuario");
const avanceSeguimientoModel = require("./AvanceSeguimiento");

// metodo para conectarnos a la bd, usando async -- await funciones asincronicas
const sequelize = new Sequelize("politicas_publicas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const AvanceSeguimiento = avanceSeguimientoModel(sequelize, Sequelize);
const Usuario = usuarioModel(sequelize, Sequelize);
const PublicacionPolitica = publicacionPoliticaModel(sequelize, Sequelize);
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
const politicasPublicas = politicasPublicasModel(sequelize, Sequelize);
const politicaHasSectores = politicaHasSectoresModel(sequelize, Sequelize);
const documentoDeAdopcionPP = documentoDeAdopcionPPModel(sequelize, Sequelize);
const PPHasObjetivoGeneral = PPHasObjetivoGeneralModel(sequelize, Sequelize);
const documentosAsociadosPP = documentosAsociadosPPModel(sequelize, Sequelize);
const resultadoIndicador = resultadoIndicadorModel(sequelize, Sequelize);
const productoIndicador = productoIndicadorModel(sequelize, Sequelize);
const resultadoHasMeta = resultadoHasMetaModel(sequelize, Sequelize);
const productoHasMeta = productoHasMetaModel(sequelize, Sequelize);
const productoHasCosto = productoHasCostoModel(sequelize, Sequelize);
const FichaTecnicaMedicion = fichaTecnicaMedicionModel(sequelize, Sequelize);
const AvanceCostos = avanceCostosModel(sequelize, Sequelize);
const AvanceCualitativo = avanceCualitativoModel(sequelize, Sequelize);
const FichaTecnicaAprobacion = fichaTecnicaAprobacionModel(
  sequelize,
  Sequelize
);
const fichaTecnicaResponsable = fichaTecnicaResponsableModel(
  sequelize,
  Sequelize
);
const FichaTecnicaInformacion = fichaTecnicaInformacionModel(
  sequelize,
  Sequelize
);
const ProductoCostoHasFuentes = productoHasCostoHasFuenteModel(
  sequelize,
  Sequelize
);
const productoDatosGeneralesHasObjetivos =
  productoDatosGeneralesHasObjetivosModel(sequelize, Sequelize);
const productoDatosGeneralesHasEnfoques =
  productoDatosGeneralesHasEnfoquesModel(sequelize, Sequelize);
const productoDatosGenerales = productoDatosGeneralesModel(
  sequelize,
  Sequelize
);
const resultadoDatosGeneralesHasEnfoques =
  resultadoDatosGeneralesHasEnfoquesModel(sequelize, Sequelize);
const resultadoDatosGenerales = resultadoDatosGeneralesModel(
  sequelize,
  Sequelize
);
const PPHasObjetivoEspecifico = PPHasObjetivoEspecificoModel(
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
  politicasPublicas,
  politicaHasSectores,
  documentoDeAdopcionPP,
  PPHasObjetivoGeneral,
  PPHasObjetivoEspecifico,
  documentosAsociadosPP,
  resultadoDatosGenerales,
  resultadoDatosGeneralesHasEnfoques,
  resultadoIndicador,
  productoDatosGenerales,
  productoDatosGeneralesHasEnfoques,
  productoDatosGeneralesHasObjetivos,
  productoIndicador,
  resultadoHasMeta,
  productoHasMeta,
  productoHasCosto,
  ProductoCostoHasFuentes,
  FichaTecnicaInformacion,
  FichaTecnicaMedicion,
  fichaTecnicaResponsable,
  FichaTecnicaAprobacion,
  AvanceCostos,
  AvanceCualitativo,
  PublicacionPolitica,
  Usuario,
  AvanceSeguimiento,
};
