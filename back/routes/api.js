const router = require("express").Router();

const apiDocumentosAsociadosRouter = require("./api/documentosAsociados");
const apiDocumentosDeAdopcionRouter = require("./api/documentosDeAdopcion");
const enfoqueNivelCuatroRouter = require("./api/enfoqueNivelCuatro");
const enfoqueNivelDosRouter = require("./api/EnfoqueNivelDos");
const enfoqueNivelTresRouter = require("./api/enfoqueNivelTres");
const enfoqueNivelUnoRouter = require("./api/enfoqueNivelUno");
const entidadRouter = require("./api/entidad");
const fuentesDeFinanciacionRouter = require("./api/fuentesDeFinanciacion");
const planDeDesarrolloRouter = require("./api/planDeDesarrollo");
const metaOdsRouter = require("./api/metaOds");
const nivelDeTerritorializacionRouter = require("./api/nivelDeTerritorializacion");
const desarrolloSostenibleRouter = require("./api/desarrolloSostenible");
const parametroRouter = require("./api/parametro");
const planRouter = require("./api/plan");
const rangoSemaforoRouter = require("./api/rangoSemaforo");
const sectorRouter = require("./api/sector");
const unidadDeMedidaRouter = require("./api/unidadDeMedida");
const politicaPublicaRouter = require("./api/politicasPublicas");
const politicaHasSectoresRouter = require("./api/politicasHasSectores");
const documentoDeAdopcionPPRouter = require("./api/documentoDeAdopcionPP");
const PPHasObjetivoGeneralRouter = require("./api/politicaHasObjetivoGeneral");
const PPHasObjetivoEspecificoRouter = require("./api/politicaHasObjetivoEspecifico");
const documentosAsociadosPPRouter = require("./api/documentosAsociadosPP");
const resultadoDatosGeneralesRouter = require("./api/resultadoDatosGenerales");
const resultadoDatosGeneralesHasEnfoquesRouter = require("./api/resultadoDatosGeneralesHasEnfoques");
const resultadoIndicadorRouter = require("./api/resultadoIndicador");
const productoDatosGeneralesRouter = require("./api/productoDatosGenerales");
const productoDatosGeneralesHasEnfoquesRouter = require("./api/productosDatosGeneralesHasenfoques");
const productoDatosGeneralesHasObjetivosRouter = require("./api/productoDatosGeneralesHasObjetivos");
const productoIndicadorRouter = require("./api/productoIndicador");
const resultadoHasMetaRouter = require("./api/resultadoHasMeta");
const productoHasMetaRouter = require("./api/prodcuctoHasMeta");
const productoHasCostoRouter = require("./api/productoHasCosto");
const productoCostoHasFuenteRouter = require("./api/productoCostoHasFuentes");
const fichaTecnicaInformacionRouter = require("./api/fichaTecnicaInformacion");
const fichaTecnicaMedicionRouter = require("./api/fichaTecnicaMedicion");
const fichaTecnicaResponsableRouter = require("./api/fichaTecnicaResponsable");
const fichaTecnicaAprobacionRouter = require("./api/fichaTecnicaAprobacion");
const avanceCostosRouter = require("./api/avanceCostos");
const avanceCualitativoRouter = require("./api/avanceCualitativo");
const publicacionPoliticaRouter = require("./api/publicacionPolitica");
router.use("/documentosAsociados", apiDocumentosAsociadosRouter);
router.use("/publicacionPolitica", publicacionPoliticaRouter);
router.use("/avanceCostos", avanceCostosRouter);
router.use("/avanceCualitativo", avanceCualitativoRouter);
router.use("/documentosDeAdopcion", apiDocumentosDeAdopcionRouter);
router.use("/enfoqueNivelCuatro", enfoqueNivelCuatroRouter);
router.use("/EnfoqueNivelDos", enfoqueNivelDosRouter);
router.use("/enfoqueNivelTres", enfoqueNivelTresRouter);
router.use("/enfoqueNivelUno", enfoqueNivelUnoRouter);
router.use("/entidad", entidadRouter);
router.use("/fuentesDeFinanciacion", fuentesDeFinanciacionRouter);
router.use("/planDeDesarrollo", planDeDesarrolloRouter);
router.use("/metaOds", metaOdsRouter);
router.use("/nivelDeTerritorializacion", nivelDeTerritorializacionRouter);
router.use("/desarrolloSostenible", desarrolloSostenibleRouter);
router.use("/parametro", parametroRouter);
router.use("/plan", planRouter);
router.use("/rangoSemaforo", rangoSemaforoRouter);
router.use("/sector", sectorRouter);
router.use("/unidadDeMedida", unidadDeMedidaRouter);
router.use("/politicasPublicas", politicaPublicaRouter);
router.use("/politicaHasSectores", politicaHasSectoresRouter);
router.use("/documentoDeAdopcionPP", documentoDeAdopcionPPRouter);
router.use("/PPHasObjetivoGeneral", PPHasObjetivoGeneralRouter);
router.use("/PPHasObjetivoEspecifico", PPHasObjetivoEspecificoRouter);
router.use("/documentosAsociadosPP", documentosAsociadosPPRouter);
router.use("/resultadoDatosGenerales", resultadoDatosGeneralesRouter);
router.use("/resultadoIndicador", resultadoIndicadorRouter);
router.use("/productoDatosGenerales", productoDatosGeneralesRouter);
router.use("/productoIndicador", productoIndicadorRouter);
router.use("/resultadoHasMeta", resultadoHasMetaRouter);
router.use("/prodcuctoHasMeta", productoHasMetaRouter);
router.use("/productoHasCosto", productoHasCostoRouter);
router.use("/productoCostoHasFuentes", productoCostoHasFuenteRouter);
router.use("/fichaTecnicaInformacion", fichaTecnicaInformacionRouter);
router.use("/fichaTecnicaMedicion", fichaTecnicaMedicionRouter);
router.use("/fichaTecnicaResponsable", fichaTecnicaResponsableRouter);
router.use("/fichaTecnicaAprobacion", fichaTecnicaAprobacionRouter);
router.use(
  "/productoDatosGeneralesHasObjetivos",
  productoDatosGeneralesHasObjetivosRouter
);
router.use(
  "/productoDatosGeneralesHasEnfoques",
  productoDatosGeneralesHasEnfoquesRouter
);
router.use(
  "/resultadoDatosGeneralesHasEnfoques",
  resultadoDatosGeneralesHasEnfoquesRouter
);

module.exports = router;
