const express = require("express");
const {addBillsController, getBillsController } = require("../controllers/billsController");

const router = express.Router();

// routes

// method-post
router.post("/add-bills", addBillsController);

// method-get
router. get("/get-bills", getBillsController);

module.exports = router