const express = require('express');
const router = express.Router();
const {Campus, Student} = require('../database/models'); // This has both, student and campus models

// Get gig list
router.get('/', (req, res) => 
  Campus.findAll()
  .then(campus => {
    console.log(campus);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

module.exports = router;