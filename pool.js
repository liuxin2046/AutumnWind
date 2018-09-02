const mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit:15,
	host:'localhost',
	user:'root',
	password:'',
	database:'aw'
});
	module.exports = pool;