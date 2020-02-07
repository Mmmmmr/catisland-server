const Sequelize = require('sequelize')
const {dbName, user, password, port, host} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    host,
    port,
    dialect: 'mysql',
    timezone: '+08:00',
    define: {
        // timestamps: false
    }
})

sequelize.sync({
    force: true
})

module.exports = {
    sequelize
}
