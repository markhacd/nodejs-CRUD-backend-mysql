const mysql = require('mysql');

const db = mysql.createConnection({
    host: '192.168.99.100',
    database: 'react_login',
    user: 'root',
    password: '1234'
});

db.connect((err) => {
    if(!err) {
        console.log('DB Connected.');
    } else {
        console.log('DB Connected failed. : Error ' + JSON.stringify(err));
    }
});