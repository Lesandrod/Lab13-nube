
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lennard'
  });
  
  // Conectar a la base de datos MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.stack);
      return;
    }
  
    console.log('Conexión exitosa a la base de datos MySQL');
  });
  
  module.exports = connection;