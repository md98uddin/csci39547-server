const express = require('express');
const router = express.Router();
const {Campus, Student} = require('../database/models'); // This has both, student and campus models

router.get("/", async (req, res, next) => {
    // try to get campuses object from database
    try {
      // campuses will be the result of the Campus.findAll promise
      const campuses = await Campus.findAll({ include: Student });
      // if campuses is valid, it will be sent as a json response
      console.log(campuses);
      res.status(200).json(campuses);
    } catch (err) {
      // if there is an error, it'll passed via the next parameter to the error handler middleware
      next(err);
    }
  });

module.exports = router;