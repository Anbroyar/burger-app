var express = require('express');
var router = express.Router();
var path = require('path');
var burger = require('../models/burger.js');

	router.get('/',function(req,res) {
		burger.all(function(data) {
			var object = {
				burgers: data
			};
			console.log(object);
			res.render('index', object);
		});
	})
	router.post('/api/new',function(req,res) {
		burger.insert(req.body.burger,function(result) {
			res.json({ id: result.insertId });
		});
	})
	router.put('/api/devour/:id',function(req,res) {
		var id = req.params.id;
		burger.update(id,function(result) {
			if (result.changedRows == 0) {
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		});
	});


module.exports = router;