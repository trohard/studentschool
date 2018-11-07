var Student = require('../models/student');

exports.student_get = function(req, res) {
    let filters = req.query
	if (req.query.grade != null){
		filters = {
			grade: {$gt: req.query.grade}
		}
	}

	Student.find(filters)
	.then(students => {
		res.json({
			confirmation: 'success',
			data: students
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.student_post = function(req, res) {
    Student.create(req.body)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}