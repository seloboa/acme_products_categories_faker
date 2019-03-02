const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/acmecatfaker', {
  logging: false,
});

module.exports = db;
