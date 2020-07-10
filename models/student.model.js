const Sequilize = require('sequelize');
const db = require('..configure/database');
const { Sequelize } = require('sequelize');

const Student = db.define('Students', {
    first_name: {
        type: Sequilize.STRING,
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
        type : Sequelize.DECIMAL,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    college_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

