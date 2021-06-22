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
db.portfolioModel = require('./model/portfolio.modal')(sequelize, Sequelize);
db.testnomialModel = require('./model/testnomial.modal')(sequelize, Sequelize);
db.enquiryModel = require('./model/enquiry.modal')(sequelize, Sequelize);
db.userModal = require('./model/user.modal')(sequelize, Sequelize);


module.exports = db;