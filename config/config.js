module.exports = {
    environment: 'dev',
    database: {
        dbName:'catland',
        host:'localhost',
        port:3306,
        user:'root',
        password:'root',
    },
    security: {
        secretKey:  "abcdefg",
        expiresIn:  60*60*24*30
    },
    wx: {
        appId: 'wx5173ed31af8ed115',
        appSecret: '55a06e76e1ad2fe058cffd21e54421f2',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
