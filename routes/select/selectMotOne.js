const express = require("express");
const Militar = require("../../models/Militar");
const router = express.Router();
const db = require("../../config/db");

router.get("/:matricula", async (req, res) => {
  const { matricula } = req.params;

  try {
    // Modifique a consulta para filtrar pelo número de matrícula
    const militar = await Militar.findOne({
      where: {
        matricula: matricula,
      },
    });

    if (militar) {
      res.json(militar);
    } else {
      res.status(404).json({ message: "Militar não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar militar:", error);
    res.status(500).json({ error: "Erro interno ao buscar militar" });
  }
});

module.exports = router;
