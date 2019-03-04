const db = require('../db');

const Product = db.define('product', {
  name: db.Sequelize.STRING,
});

module.exports = Product;
