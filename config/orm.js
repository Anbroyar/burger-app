var connection = require('./connection.js');

var orm = {

	all: function(cb){
		console.log('Select all');
		connection.query('SELECT * FROM burgers',function(err,result){
			if (err) throw err;
			cb(result);
		});
	},
	insert: function(vals, cb){
		console.log('Creating burger',vals);
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', vals, function(err,result) {
			if (err) throw err;
			cb(result);
		});
	},
	update: function(vals, cb){
		console.log('Updating burger',vals);
		connection.query('UPDATE burgers SET ? WHERE ?', [
            { devoured: true },
            { id: id }
        ], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}

};

module.exports = orm;