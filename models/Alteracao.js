const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Alteracao = db.define(
  "Alteracao",
  {
    Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    Prefixo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Km: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Motorista: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Numeral: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Matricula: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Graduacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Turno: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    HoraInicial: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Area: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Cartao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Autonomia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    VidroTraseiro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    TMD: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Pneus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Step: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Farois: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Adesivo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Setas: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Parabrisa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Capo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Sinais: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Laternas: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Retrovisores: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Ferramentas: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    /* Image: {
      type: Sequelize.STRING,
      allowNull: false,
    }, */
  },
  {
    freezeTableName: true,
  }
);
module.exports = Alteracao;
