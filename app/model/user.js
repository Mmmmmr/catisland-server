const bcrypt = require("bcrypt");
const {Sequelize, Model} = require('sequelize')
const {sequelize} = require('../../core/db')

class User extends Model {
    static async verifyEmailPassword(email, plainPassword){
        const user = await User.findOne({
            where:{
                email
            }
        })
        if(!user){
            throw new global.errs.AuthFailed('账号不存在')
        }
        const correct = bcrypt.compareSync(plainPassword, user.password)
        if(!correct){
            throw new global.errs.AuthFailed('密码不正确')
        }
        return user
    }

    static async getUserByOpenid(openid){
        const user = await User.findOne({
            where: {
                openid
            }
        })
        return user
    }

    static async registryByOpenid(openid){
       const user = User.create({
           openid
       });
       return user
    }
}

User.init({
    nickname: {
        type: Sequelize.STRING
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
