const express = require("express");
const router = express.Router();

const {
  addPaciente,
  getPacienteById,
  getAll,
  updateById,
  deleteById,
} = require("../controllers/routesControlers");

router.post("/", addPaciente);

router.get("/:id", getPacienteById);

router.get("/", getAll);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

module.exports = router;
