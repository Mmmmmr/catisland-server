module.exports = {
  environment: "prod",
  database: {
    dbName: "catisland",
    host: "ciliuciliu.club",
    port: 3306,
    user: "root",
    password: "root"
  },
  security: {
    secretKey: "abcdefg",
    expiresIn: 60 * 60 * 24 * 30
    // expiresIn:  10
  },
  wx: {
    appId: "wx5173ed31af8ed115",
    appSecret: "55a06e76e1ad2fe058cffd21e54421f2",
    loginUrl:
      "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code"
  },
  yushu: {
    detailUrl: "http://t.yushu.im/v2/book/id/%s",
    keywordUrl:
      "http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s"
  },
  host: "https://catisland.ciliuciliu.club/"
};
