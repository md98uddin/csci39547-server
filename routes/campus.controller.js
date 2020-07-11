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

  //route to serve up all campuses
router.get('/', (req,res,next) =>  {
    Campus.findAll()
    .then(campusRes => res.send(campusRes))
    .catch(next)
 })

//route to remove a campus based on its ID
router.delete('/:id', (req,res,next) => {
  Campus.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(campusDel => res.sendStatus(200))
  .catch(next)
})

module.exports = router;