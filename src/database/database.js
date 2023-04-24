import mysql from "promise-mysql"
import config from "./../config"

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    ssl: {
        // Habilita el uso de SSL/TLS
        rejectUnauthorized: true // Si el certificado SSL del servidor no está firmado por una entidad de confianza, se rechazará la conexión
    }
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};