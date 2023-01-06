const express = require("express");
const router = express.Router();

const {
  addProvider,
  getProviderById,
  getAll,
  updateProviderById,
  deleteProviderById,
} = require("../../controllers/providers");

router.post("/", addProvider);

router.get("/:id", getProviderById);

router.get("/", getAll);

router.put("/:id", updateProviderById);

router.delete("/:id", deleteProviderById);

module.exports = router;
