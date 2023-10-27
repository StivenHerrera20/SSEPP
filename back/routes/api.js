const router = require("express").Router();

const apiDocumentosAsociadosRouter = require("./api/documentosAsociados");
router.use("/documentosAsociados", apiDocumentosAsociadosRouter);

module.exports = router;
