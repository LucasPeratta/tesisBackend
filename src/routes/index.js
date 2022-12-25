const express = require("express");
const router = express.Router();

// Import all routers here
const pacientesRouter = require("./patients");

// Link all routers to the main router
router.use("/pacientes", pacientesRouter);

module.exports = router;
