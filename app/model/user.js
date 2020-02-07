const bcrypt = require("bcrypt");
const {Sequelize, Model} = require('sequelize')
const {sequelize} = require('../../core/db')

class User extends Model {}

User.init({
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(128),
        unique: true
        // allowNull 默认为 true
    },
    password: {
        type: Sequelize.STRING,
        set(val){
            const salt = bcrypt.genSaltSync(10)
            const psw = bcrypt.hashSync(val, salt)
            this.setDataValue('password', psw)
        }
    },
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize,
    modelName: 'user'
    // 参数
});

module.exports = {User}
