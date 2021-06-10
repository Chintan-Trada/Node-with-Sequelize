const dbConfig = require('../helper/db.helper');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categoryModel = require('./model/category.model')(sequelize, Sequelize);
// db.authuser = require("../models/auth")(sequelize, Sequelize);


module.exports = db;