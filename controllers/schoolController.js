var School = require('../models/school');

exports.school_get = function(req, res) {
    let filters = req.query

	School.find(filters)
	.then(schools => {
		res.json({
			confirmation: 'success',
			data: schools
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.school_update = function(req, res) {
    const query = req.query // require: id, key=value
	const schoolId = query.id
	delete query['id']

	Profile.findByIdAndUpdate(schoolId, query, {new:true})
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.school_post = function(req, res) {
    School.create(req.body)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}