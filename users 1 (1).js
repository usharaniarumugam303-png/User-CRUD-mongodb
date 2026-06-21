console.log("Users route loaded");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  console.log("PUT route hit");

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/test", (req, res) => {
  res.send("TEST ROUTE WORKING");
});
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;