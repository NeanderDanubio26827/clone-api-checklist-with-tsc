const express = require("express");
const router = express.Router();
const Viatura = require("../../models/Viatura");
const db = require("../../config/db");

router.post("/", async (req, res) => {
  try {
    // Extrai os dados do corpo da solicitação
    const {
      Placa,
      Modelo,
      Ano,
      Chassi,
      Prefixo,
      OPM,
      Km,
      Vale,
      Combustivel,
      Status
      // adicione outros campos aqui
    } = req.body;

    // Cria um novo motorista no banco de dados usando o Prisma
    const novaViatura = await Viatura.create({
     
        Placa: Placa,
        Modelo: Modelo,
        Ano: Ano,
        Chassi: Chassi,
        Prefixo: Prefixo,
        OPM: OPM,
        Km: Km,
        Vale: Vale,
        Combustivel: Combustivel,
        Status: Status,
        
        // atributos adicionais aqui
      
    });

    // Retorna o novo motorista como resposta
    res.status(200).json(novaViatura);
  } catch (error) {
    console.error("Erro ao criar viatura:", error);
    res.status(500).json({ error: "Erro interno ao criar viatura" });
  }
});

module.exports = router;
