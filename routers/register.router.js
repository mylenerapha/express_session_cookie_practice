const express = require("express");
const router = express.Router();

const registerController = require("../controllers/RegisterController");

router.get("/", registerController.index);
router.post("/", registerController.postRegister);

module.exports = router;