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
router.use("/documentosAsociados", apiDocumentosAsociadosRouter);
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

module.exports = router;
