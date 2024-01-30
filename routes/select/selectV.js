const express = require("express");
const router = express.Router();
const Viatura = require("../../models/Viatura");

router.get("/", async (req, res) => {
  try {
    const Viaturas = await Viatura.findAll();
    res.json(Viaturas);
  } catch (error) {
    console.error("Erro ao buscar viaturas:", error);
    res.status(500).json({ error: "Erro interno ao buscar viaturas" });
  }
});

module.exports = router;
