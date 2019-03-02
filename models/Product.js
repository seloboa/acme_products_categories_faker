const db = require('../db');

const Product= db.define('Product',{
  name: db.Sequelize.STRING
})

module.exports(Product);
