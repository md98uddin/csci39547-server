// Model for students

const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('Students', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    CampusId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image_url: {
        type: Sequelize.STRING,
        defaultValue: "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
        allowNull: false,
    },
})

module.exports = Student;