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

module.exports = router;