// This file refers to both, student and campus models.
// Refer to this file whenever you need a model.

const Students = require('./student.model');
const Campus = require('./campus.model');

Campus.hasMany(Students);
Students.belongsTo(Campus);

module.exports = {
    Students,
    Campus
};