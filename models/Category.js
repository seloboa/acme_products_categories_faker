const db = require('../db');

const Category = db.define('category',{
  name: db.Sequelize.STRING
})

module.exports = Category;
