const Sequelize = require('sequelize')
const conn = require('../database/connection')

module.exports = conn.define('books', {
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    name: Sequelize.STRING,
    mail: Sequelize.STRING,
    date: Sequelize.STRING,
    time: Sequelize.STRING,
    idservice: Sequelize.SMALLINT
}, {
    timestamps: false
})