const db = require('../db');
const Category = require('./Category');

const Product = db.define('product', {
  name: db.Sequelize.STRING,
});

module.exports = Product;
