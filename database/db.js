const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_disney'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es ' +error);
        return
    }
    console.log('Conectado a Base de datos')
})

module.exports = conexion;