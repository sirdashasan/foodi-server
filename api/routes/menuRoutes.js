const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const menuController = require("../controllers/menuControllers");

// get all menu items

router.get("/", menuController.getAllMenuItems);

// post a menu item
router.post("/", menuController.postMenuItem);

module.exports = router;
