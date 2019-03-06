const Sequelize = require('sequelize');
const db = new Sequelize('postgres://bfopgberpbwdcx:7c7c8a847fe2f580d663355e98e147050aac8becf099d419e0a1c7dd116f8c01@ec2-54-83-196-179.compute-1.amazonaws.com:5432/deit7fk5375fkg', {
  logging: false,
});

module.exports = db;
