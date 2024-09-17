// Load environment variables from .env file
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Extract values from environment variables
const DATABASE_URL = process.env.DB;
const DB_USER = process.env.USER;
const DB_PASSWORD = process.env.PASSWORD;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_DIALECT = 'mysql';  // Since you're using MySQL

// Create a new Sequelize instance using the environment variables
const sequelize = new Sequelize(DATABASE_URL, {
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false,  // Optionally disable logging
});

// Authenticate and test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to MySQL established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to MySQL:', error);
    });

module.exports = { sequelize };
