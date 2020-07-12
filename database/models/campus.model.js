// Model for campus

const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('Campuses', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    campus_name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true, //do not allow empty strings
    },

    campus_address: {
        type: Sequelize.STRING,
        notEmpty: true, //do not allow empty strings
        allowNull: false,
    },

    image_url: {
        type: Sequelize.STRING,
        defaultValue: "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
        allowNull: false,
    },

    description: {
        type:Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Campus;