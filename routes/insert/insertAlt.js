const express = require("express");
const router = express.Router();
const Alteracao = require('../../models/Alteracao')


router.post("/", async (req, res) => {
  try {
    // Extrai os dados do corpo da solicitação
    const {
      Prefixo,
      Km,
      Motorista,
      Numeral,
      Matricula,
      Graduacao,
      Turno,
      HoraInicial,
      Area,
      Cartao,
      Autonomia,
      VidroTraseiro,
      TMD,
      Pneus,
      Step,
      Farois,
      Adesivo,
      Setas,
      Parabrisa,
      Capo,
      Sinais,
      Laternas,
      Retrovisores,
      Ferramentas,
      
      // adicione outros campos aqui
    } = req.body;

    // Cria uma nova alteracao no banco de dados usando o Sequelize
    const novaAlteracao = await Alteracao.create({
      Prefixo: Prefixo,
      Km: Km,
      Motorista: Motorista,
      Numeral: Numeral,
      Matricula: Matricula,
      Graduacao: Graduacao,
      Turno: Turno,
      HoraInicial: HoraInicial,
      Area: Area,
      Cartao: Cartao,
      Autonomia: Autonomia,
      VidroTraseiro: VidroTraseiro,
      TMD: TMD,
      Pneus: Pneus,
      Step: Step,
      Farois: Farois,
      Adesivo: Adesivo,
      Setas: Setas,
      Parabrisa: Parabrisa,
      Capo: Capo,
      Sinais: Sinais,
      Laternas: Laternas,
      Retrovisores: Retrovisores,
      Ferramentas: Ferramentas,
      
      // atributos adicionais aqui
    });

    // Retorna a nova alteracao como resposta
    res.status(200).json(novaAlteracao);
  } catch (error) {
    console.error("Erro ao criar alteracao:", error);
    res.status(500).json({ error: "Erro interno ao criar alteracao" });
  }
});

module.exports = router;
