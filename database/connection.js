const Sequelize = require('sequelize')

const conn = new Sequelize('DhwepOgPEi', 'DhwepOgPEi', 'TqeHv0Y95O', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

conn.authenticate()
.then(() => console.log("Conexion Ok"))
.catch((err) => console.log("Conection Error",err))

module.exports = conn;