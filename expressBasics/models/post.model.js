const { db, DataTypes } = require('../utils/database.util');

// Create our first model (table)
const Post = db.define('post', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
		userId: DataTypes.STRING,
		allowNull: false,		
	},
	status: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Post };
