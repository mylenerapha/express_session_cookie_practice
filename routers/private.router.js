const express = require("express");
const router = express.Router();

const privateController = require("../controllers/PrivateController");

router.get("/", privateController.index);

module.exports = router;