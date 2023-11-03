const express = require("express");
//Importar Express router
const router = express.Router();
const controller = require("../controllers/users");

router.post("/add", controller.postAddUser);

module.exports = router;