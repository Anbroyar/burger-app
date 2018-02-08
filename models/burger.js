var orm = require('../config/orm.js');

var burger = {
 		all: function(cb) {
 			orm.all( function(res){
 				cb(res);
 			});
 		},
 		insert: function(vals, cb) {
 			orm.insert(vals, function(res){
 				cb(res);
 			});
 		},
 		update: function(vals, cb) {
 			orm.update(vals, function(res){
 				cb(res);
 			});
 		}
 };

module.exports = burger;