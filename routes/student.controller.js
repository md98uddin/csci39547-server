const express = require('express');
const router = express.Router();
const Student = require('../database/models').Students; // This has both, student and campus models

// Testing if database can be accessed properly
router.get('/', (req, res) => 
  Student.findAll()
  .then(student => {
    console.log(student);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

//route to serve up all students
router.get('/', (req,res,next) => {
  Student.findAll()
  .then(studentRes => res.send(studentRes))
  .catch(next)
})

//route to serve up a single student (based on their ID), including their campus
router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id, 
  {include: [campuses]})
  .then(studenRes => res.send(studentRes))
  .catch(next)
})

//route to remove a student based on their ID
router.delete('/:id', (req,res,next) => {
  Student.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(studentDel => res.sendStatus(200))
  .catch(next)
})



module.exports = router;