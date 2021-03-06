var express = require("express");
var router = express.Router();

// Subrouters;
const campusesRouter = require("./campus.controller");
const studentsRouter = require("./student.controller");

// Mount our subrouters to assemble our apiRouter;

router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);

// Error handling middleware;
// Might need to modify later
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

module.exports = router;