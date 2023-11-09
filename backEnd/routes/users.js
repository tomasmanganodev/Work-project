const express = require("express");
//Importar Express router
const router = express.Router();
const controller = require("../controllers/users");

router.post("/add", controller.postAddUser);

router.get("/all", controller.getUsers);

module.exports = router;