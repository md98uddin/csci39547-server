const Sequelize = require('sequelize');

// Change the three variables to suit your database
var DATABASE_NAME = "Site_DB";
var USERNAME = "postgres";
var PASSWORD = "postgres";
module.exports = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max:5,
        min:0,
        aquire: 30000,
        idle: 10000
    },
});