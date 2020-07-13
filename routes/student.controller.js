/*
  Some are modified from boilerplate
*/

const express = require('express');
const router = express.Router();
const Student = require('../database/models').Students;


//route to serve up all students
// students/
router.get('/', async (req,res,next) => {
  Student.findAll()
  .then(
    studentRes => res.send(studentRes))
  .catch(next)
})

//route to serve up a single student (based on their ID), including their student
// students/id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    // if successful:
    const student = await Student.findByPk(id);
    // send back the student as a response
    res.status(200).json(student);
  }
  catch (err) {
    next(err);
  }
});

//route to remove a student based on their ID
// students/id
router.delete('/remove/:id', (req,res,next) => {
  Student.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(res.sendStatus(200))
  .catch(next)
})

// Route to handle adding a student
// /students/
router.post("/add", async (req, res, next) => {
  // Take the form data from the request body
  const { first_name, last_name, email, gpa, CampusId, image_url } = req.body;
  // Create a student object
  const studentObj = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    gpa: gpa,
    CampusId: CampusId,
    image_url: image_url,
  };
  try {
    // Create a new student on the database
    const newStudent = await Student.create(studentObj);
    res.status(201).send(newStudent);
  } catch (err) {
    next(err);
  }
});

// Route to handle editing a student
// /students/id
router.put("/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  
  const { first_name, last_name, email, gpa, CampusId, image_url } = req.body;
  const updatedObj = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    gpa: gpa,
    CampusId: CampusId,
    image_url: image_url,
  };
  try {
    // Find a student with a matching id from the database
    const student = await Student.findByPk(id);
    // database would return a valid student object or an error
    console.log(updatedObj);
    // modify the student object with new form data
    await student.set(updatedObj);
    // save the new student object to the data
    // database would return a new student object
    const updatedStudent = await student.save();
    console.log(updatedStudent);
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});



module.exports = router;