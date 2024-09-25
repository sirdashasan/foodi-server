const express = require("express");
const router = express.Router();
const Payment = require("../models/Payments");

// post payment info to db
router.post("/", async (req, res) => {
  const payment = req.body;
  try {
    const paymentRequest = await Payment.create(payment);
    res.status(200).json(paymentRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
