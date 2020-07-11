const express = require('express');
const router = express.Router();
const Campus = require('../database/models').Campus; // This has both, student and campus models

// Testing if database can be accessed properly
router.get('/', (req, res) => 
  Campus.findAll()
  .then(campus => {
    console.log(campus);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

module.exports = router;