const express = require("express");
const router = express.Router();
const Alteracao = require("../../models/Alteracao");

router.get("/", async (req, res) => {
  try {
    const Alteracoes = await Alteracao.findAll();
    res.json(Alteracoes);
  } catch (error) {
    console.error("Erro ao buscar alterações:", error);
    res.status(500).json({ error: "Erro interno ao buscar alterações" });
  }
});

module.exports = router;
