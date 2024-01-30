const express = require("express");
const Militar = require("../../models/Militar");
const router = express.Router();
const db = require("../../config/db");

router.get("/", async (req, res) => {
  try {
    const Militares = await Militar.findAll();
    res.json(Militares);
  } catch (error) {
    console.error("Erro ao buscar militares:", error);
    res.status(500).json({ error: "Erro interno ao buscar militares" });
  }
});

module.exports = router;
