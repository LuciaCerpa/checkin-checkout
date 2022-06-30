const {Sequelize, DataTypes} = require ('sequelize')

const db= new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'2934',
    port:'5432',
    database:'blogs',
});

module.exports = { db, DataTypes };