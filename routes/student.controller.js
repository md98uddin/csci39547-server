const express = require('express');
const router = express.Router();
const {Campus, Student} = require('../database/models'); // This has both, student and campus models

// Get gig list
router.get('/', (req, res) => 
  Student.findAll()
  .then(student => {
    console.log(student);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

module.exports = router;