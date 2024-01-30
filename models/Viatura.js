const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Viatura = db.define(
  "Viatura",
  {
    Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    Placa: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      
    },
    Modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Ano: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    Chassi: {
      type: Sequelize.STRING,
      allowNull: true, // Ajuste conforme necessário
      
    },
    Prefixo: {
      type: Sequelize.STRING,
      allowNull: false, 
    },
    OPM: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    Km: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    Status: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    Combustivel: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = Viatura;
