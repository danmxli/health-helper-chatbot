const express = require("express");
const userConfigController = require("../controllers/userConfigController")

const router = express.Router();

router.get("/", userConfigController.getAllConfigData);

router.post("/", userConfigController.addNewConfig);

router.delete("/:id", userConfigController.deleteConfig);

module.exports = router;

