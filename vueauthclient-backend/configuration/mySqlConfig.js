const mysql = require('promise-mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'hotel'
})

module.exports = connection;