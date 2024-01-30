const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const db = new Sequelize('postgres', 'postgres', 'bia220614', {

    dialect: 'postgresql',
    host: 'localhost',
    port: 5432,
});

module.exports = db