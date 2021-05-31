const mysql = require('mysql')
const config = require('../config')

const connection = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
})

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подлючение успешно!');
    }
})
/*123*/
module.exports = connection