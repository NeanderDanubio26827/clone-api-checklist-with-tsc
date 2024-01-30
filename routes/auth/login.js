const express = require("express");
const jwt = require("jsonwebtoken"); // Importe o módulo JWT para geração de token
const router = express.Router();
const Militar = require("../../models/Militar");
const db = require("../../config/db");

router.post("/", async (req, res) => {
  try {
    // Extrai os dados do corpo da solicitação
    const { matricula, numeral } = req.body;
    console.log(numeral, matricula);

    // Verifique se matricula e numeral foram fornecidos
    if (!matricula) {
      return res
        .status(400)
        .json({ error: "Matrícula e numeral são obrigatórios" });
    }
    // Busca militar na base de dados com base nos campos recebidos
    try {
      const militarEncontrado = await Militar.findOne({
        where: { matricula},
      });

      // Se militar encontrado, gera um token para o front-end
      if (militarEncontrado) {
        const token = jwt.sign(
          { matricula: militarEncontrado.matricula },
          process.env.JWT_SECRET
        );        
        res.status(200).json({ token });
      } else {
        res.status(404).json({ error: "Militar não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar militar:", error);
      res.status(500).json({ error: "Erro interno ao buscar militar" });
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    res.status(500).json({ error: "Erro interno na requisição" });
  }
});

module.exports = router;
