const db = require('../db');
const Product = require('./Product');

const Category = db.define('category', {
  name: db.Sequelize.STRING,
});

module.exports = Category;
