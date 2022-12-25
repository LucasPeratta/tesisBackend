const express = require("express");
const router = express.Router();

const {
  addPatient,
  getPatientById,
  getAll,
  updatePatientById,
  deletePatientById,
} = require("../../controllers/patients");

router.post("/", addPatient);

router.get("/:id", getPatientById);

router.get("/", getAll);

router.put("/:id", updatePatientById);

router.delete("/:id", deletePatientById);

module.exports = router;
