const express = require("express");
const router = express.Router();

const {
  addAppointment,
  getAppointmentById,
  getAll,
  updateAppointmentById,
  deleteAppointmentById,
} = require("../../controllers/appointments");

router.post("/", addAppointment);

router.get("/:id", getAppointmentById);

router.get("/", getAll);

router.put("/:id", updateAppointmentById);

router.delete("/:id", deleteAppointmentById);

module.exports = router;
