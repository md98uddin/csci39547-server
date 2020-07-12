/*
  Some are modified from boilerplate
*/

const express = require('express');
const router = express.Router();
const Campus = require('../database/models').Campus;

  //route to serve up all campuses
  // campuses
router.get('/', async (req,res,next) =>  {
    Campus.findAll()
    .then(campusRes => res.send(campusRes))
    .catch(next)
 })

  //route to serve up a single campus (based on their ID)
  // campuses/id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const campus = await Campus.findByPk(id);
    // send back the campus as a response
    res.status(200).json(campus);
  }
  catch (err) {
    next(err);
  }
});

//route to remove a campus based on its ID
// campuses/id
router.delete('/:id', (req,res,next) => {
  Campus.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(res.sendStatus(200))
  .catch(next)
})

// Route to handle adding a campus
// /campuses/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const { name, address, description, image_url } = req.body;
  // Create a campus object
  const campusObj = {
    campus_name: name,
    campus_address: address,
    image_url: image_url,
    description: description,
  };
  try {
    // Create a new campus on the database
    const newCampus = await Campus.create(campusObj);
    res.status(201).send(newCampus);
  } catch (err) {
    next(err);
  }
});

// Route to handle editing a campus
// /campuses/id
router.put("/:id", async (req, res, next) => {
  // get the id from request params
  const { id } = req.params;
  // get form data from the request body
  const { name, address, description, image_url } = req.body;
  const updatedObj = {
    campus_name: name,
    campus_address: address,
    image_url: image_url,
    description: description,
  };
  try {
    // Find a campus with a matching id from the database
    const campus = await Campus.findByPk(id);
    // database would return a valid campus object or an error
    console.log(updatedObj);
    // modify the campus object with new form data
    await campus.set(updatedObj);
    // save the new campus object to the data
    // database would return a new campus object
    const updatedCampus = await campus.save();
    console.log(updatedCampus);
    res.status(201).send(updatedCampus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;