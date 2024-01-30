const express = require("express");
const router = express.Router();
const  Militar = require("../../models/Militar"); // Verifique se o modelo Militar está corretamente importado
const db = require("../../config/db"); // Certifique-se de que a instância do Sequelize (db) está corretamente configurada

router.post("/", async (req, res) => {
  try {
    // Extrai os dados do corpo da solicitação
    const {
      matricula,
      nomeCompleto,
      nomeGuerra,
      numeral,
      postoGraduacao,
      opm,
      status,
      // adicione outros campos aqui
    } = req.body;

    // Cria um novo militar no banco de dados usando o Sequelize
    const novoMotorista = await Militar.create({
      matricula: matricula,
      nomeCompleto: nomeCompleto,
      nomeGuerra: nomeGuerra,
      numeral: numeral,
      postoGraduacao: postoGraduacao,
      opm: opm,
      status: status,
      // atributos adicionais aqui
    });

    // Retorna o novo militar como resposta
    res.status(200).json(novoMotorista);
  } catch (error) {
    console.error("Erro ao criar motorista:", error);
    res.status(500).json({ error: "Erro interno ao criar motorista" });
  }
});

module.exports = router;
