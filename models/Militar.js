const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Militar = db.define(
  "Militar",
  {
    Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    matricula: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nomeCompleto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nomeGuerra: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numeral: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postoGraduacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    opm: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Militar;
