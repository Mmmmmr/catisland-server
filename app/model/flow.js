const {sequelize} = require('../../core/db')
const {
    Sequelize,
    Model
} = require('sequelize')

class Flow extends Model{
    static
}

Flow.init({
    index:Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER
}, {
    sequelize,
    tableName: 'flow'
})

module.exports = {
    Flow
}
