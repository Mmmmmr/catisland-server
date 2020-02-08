const Sequelize = require('sequelize')
const {dbName, user, password, port, host} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    host,
    port,
    dialect: 'mysql',
    timezone: '+08:00',
    define:{
        //create_time  update_time delete_time
        timestamps:true,
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true,
        freezeTableName:true,
        scopes:{
            bh:{
                attributes:{
                    exclude:['updated_at','deleted_at','created_at']
                }
            }
        }
    }
})

sequelize.sync()

module.exports = {
    sequelize
}
