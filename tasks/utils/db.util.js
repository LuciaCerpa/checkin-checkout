const { Sequelize, DataTypes } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const db = new Sequelize(`${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: true,
})


// const db = new Sequelize({
// 	dialect: 'postgres',
// 	host: 'localhost',
// 	username: 'postgres',
// 	password: 'pass1234',
// 	port: 5432,
// 	database: 'postgres',
// 	logging: false,
// });

module.exports = { db, DataTypes };
