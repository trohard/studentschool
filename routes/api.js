var express = require('express');
var router = express.Router();

var school_controller = require('../controllers/schoolController');
var student_controller = require('../controllers/studentController');

// If at root of api route then send to home page
router.get('/', function(req, res, next) {
  res.redirect('/');
});

/* student routes */
router.get('/student', student_controller.student_get)


/* school routes */
router.get('/school', school_controller.school_get)

module.exports = router;
