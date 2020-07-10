const Sequilize = require('sequelize');
const db = require('..configure/database');
const { Sequelize } = require('sequelize');

const Campus = db.define('Campuses', {
    college_name: {
        type: Sequilize.STRING,
        allowNull: false
    },
    college_address: {
        type:Sequelize.STRING,
        allowNull: false
    },
    image_url: {
        type:Sequelize.STRING,
        allowNull: false
    },
    description: {
        type:Sequelize.STRING,
        allowNull: false
    },
    college_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

