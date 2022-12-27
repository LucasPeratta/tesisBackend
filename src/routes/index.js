const express = require("express");
const router = express.Router();

// Import all routers here
const patientsRouter = require("./patients");
const providersRouter = require("./providers");

// Link all routers to the main router
router.use("/patients", patientsRouter);
router.use("/providers", providersRouter);

module.exports = router;
